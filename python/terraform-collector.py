import re
import os
import requests
import codecs
from bs4 import BeautifulSoup
import subprocess

# Constants
NAMESPACE = "hashicorp"
PROVIDER = "azurerm"
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

def decode_escapes(s):
    """
    Decodes escape sequences like \n and \"
    """
    return codecs.decode(s, 'unicode_escape')

def substitute_values(content, slug, substitutions):
    """
    Substitute attributes with specified values.
    
    :param content: The original Terraform content.
    :param slug: Slug for the resource.
    :param substitutions: Dictionary with attribute as key and replacement value as value.
    :return: Modified content.
    """
    for attribute, value in substitutions.items():
        if attribute == "tags":
            # Pattern to match the entire tags block, capturing leading whitespace
            pattern = re.compile(rf'^(\s\s){attribute}\s*=\s*{{.*?}}', re.DOTALL | re.MULTILINE)
            replacement = rf'\1{attribute} = {value}'
        else:
            # Matching the attribute at the beginning of a line (with leading whitespace), to avoid false matches inside other attributes or strings
            pattern = re.compile(rf'^(\s\s){attribute}\s*=\s*".*?"', re.MULTILINE)
            replacement = rf'\1{attribute} = {value}'
        
        content = pattern.sub(replacement, content)
    return content

def extract_resources_and_data(content, resource_type):
    """
    Extract the block for a specific resource type from the Terraform content and
    retain blocks containing "data" or "locals" references.
    """
    
    # Patterns to capture blocks
    locals_pattern = rf'^locals\s*{{[\s\S]*?^}}'
    data_pattern = rf'^data\s+\".*?\"\s+\".*?\"(\s+{{[^{{}}]*}})'
    resource_pattern = rf'^resource\s+"{resource_type}"\s+".*?"\s*{{[\s\S]*?^}}'
    
    # Capture the desired resource
    resource_blocks = [match.group(0) for match in re.finditer(resource_pattern, content, re.MULTILINE)]
    
    # If the resource contains references to data or locals, capture those blocks
    data_blocks = set()  # Using set to avoid duplicate blocks
    locals_blocks = set()
    
    for resource_block in resource_blocks:
        if 'data.' in resource_block:
            data_blocks.update([match.group(0) for match in re.finditer(data_pattern, content, re.MULTILINE)])
        if 'local.' in resource_block:
            locals_blocks.update([match.group(0) for match in re.finditer(locals_pattern, content, re.MULTILINE)])
    
    # Combine the blocks in the desired order: data, locals, resource
    combined_blocks = list(data_blocks) + list(locals_blocks) + resource_blocks
    
    return '\n\n'.join(combined_blocks)  # Separate blocks with two newlines for better readability

def extract_resource_from_terraform_url(url):
    """
    Extracts the Terraform service name from the Terraform documentation URL.
    """
    match = re.search(r"/resources/(.*)", url)
    if match:
        return match.group(1)
    return None

def get_github_url(resource):
    """
    Formulates the GitHub documentation URL using the extracted service name.
    """
    return f"https://github.com/{NAMESPACE}/terraform-provider-{PROVIDER}/blob/main/website/docs/r/{resource}.html.markdown"

def scrape_terraform_documentation(url):
    """
    Fetches the documentation from GitHub, focusing on content inside <article> tags.
    """
    try:
        print(f"Scraping {url}...")
        response = requests.get(url, headers=HEADERS, timeout=10)
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')
            article_content = soup.find('article')
            return article_content
    except requests.RequestException as e:
        print(f"Error scraping URL {url}: {e}")
    return None

def get_documentation_code(article_content):
    """
    Extracts Terraform code from <pre> tags within the given article content.
    """
    code_content = article_content.find('pre')
    return code_content.text if code_content else None

def supports_tags(article_content):
    """
    Checks if the article content mentions that "tags" are supported.
    """
    return "tags -" in article_content.text

def append_tags_if_supported(article_content, terraform_code):
    """
    Appends 'tags = var.tags' just before the closing brace of the Terraform resource block
    if tags are supported but not present in the example code.
    """
    if "tags -" in article_content.text and 'tags =' not in terraform_code:
        # Use a regex to find the last closing brace and append 'tags = var.tags' before it
        modified_code = re.sub(r'}\s*$', '\n  tags = var.tags\n}', terraform_code, flags=re.MULTILINE)
        return modified_code
    return terraform_code

def format_terraform_code(code: str, indentation='  '):
    """
    Indent Terraform code so that it is formatted correctly.

    Args:
        code (str): The Terraform code to format.
        indentation (str): The string used for each level of indentation. Defaults to two spaces.
    """

    # Split the code into lines
    lines = code.split('\n')

    # Initialize a counter for the current level of indentation
    indent_level = 0

    # Process each line
    for i, line in enumerate(lines):
        # Increase the indent level if the line opens a block
        if '{' in line and '}' not in line:
            lines[i] = indent_level * indentation + line.lstrip()
            indent_level += 1
        # Decrease the indent level if the line closes a block
        elif '}' in line and '{' not in line:
            indent_level -= 1
            lines[i] = indent_level * indentation + line.lstrip()
        # No change in indent level if the line both opens and closes a block
        elif '{' in line and '}' in line:
            lines[i] = indent_level * indentation + line.lstrip()
        # Otherwise, just add the current level of indentation
        else:
            lines[i] = indent_level * indentation + line.lstrip()

    # Join the lines back together and return the result
    return '\n'.join(lines)

cloud_platforms = [
    {
        'name': 'azure',
        'provider': 'azurerm',
    },
    {
        'name': 'aws',
        'provider': 'aws',
    },
    {
        'name': 'google',
        'provider': 'google',
    }
]

for cloud in cloud_platforms:
    # Step 1: Parse the TSX file and extract all terraformUrl values.
    cloud_name = cloud['name']
    cloud_provider = cloud['provider']

    with open(f'../src/app/{cloud_name}.ts', 'r') as f:
        tsx_content = f.read()

    # Use regex to extract terraformUrl and id values
    pattern = re.compile(r'id: \'(.*?)\',.*?\s*slug: \'(.*?)\',.*?terraformUrl: \'(.*?)\'', re.DOTALL)
    matches = pattern.findall(tsx_content)

    # Step 2: For each terraformUrl, get the GitHub URL and fetch the content.

    output_directory = f"../public/{cloud_name}/code/terraform"
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)


    for id, slug, url in matches:
        # print(f"Processing: ID: {id}, Slug: {slug}, URL: {url}")  # Debug line
        # Define substitutions outside the loop
        substitutions = {
            "name": f'"{slug}${{local.naming_suffix}}"',
            "location": "var.location",
            "tags": "var.tags",
        }

        resource = extract_resource_from_terraform_url(url)
        if resource:
            github_url = get_github_url(resource)
            article_content = scrape_terraform_documentation(github_url)

            if article_content:
                # Get the example code
                content = get_documentation_code(article_content)

                if content:
                    # Check if tags are supported and append them if needed
                    content = append_tags_if_supported(article_content, content)

                    # Decode escape sequences
                    content = decode_escapes(content)
                    
                    # Substitute name and location values
                    content = substitute_values(content, slug, substitutions)
                    
                    # Extract specific resource block
                    content = extract_resources_and_data(content, f"{cloud_provider}_{resource}")

                    if not content:
                        print("Specific resource block not found!")  # Debug line
                        continue  # If the specific resource block is not found, skip saving the file

                    # Replace all instances of "example" and .example
                    content = content.replace('"example"', '"main"').replace('.example', '.main')

                    # Format the Terraform code
                    content = format_terraform_code(content)
                    
                    if not content:
                        print(f"No content for {id}, skipping...")
                        continue

                    file_name = id.replace(' ', '-').lower() + '.tf'
                    full_path = os.path.join(output_directory, file_name)

                    # Check if file already exists and contents are the same
                    if os.path.exists(full_path):
                        with open(full_path, 'r') as f:
                            existing_content = f.read()
                        if existing_content == content:
                            print(f"No changes for {id}, skipping...")
                            continue

                    print(f"Saving to {full_path}")  # Debug line
                    with open(full_path, 'w') as f:
                        f.write(content)

    print("Files saved successfully!")

    # Run terraform fmt on all written files
    try:
        print("Running terraform fmt...")
        subprocess.run(["terraform", "fmt"], cwd=output_directory, check=True)
        print("Terraform fmt completed successfully!")
    except subprocess.CalledProcessError:
        print("Error running terraform fmt!")
