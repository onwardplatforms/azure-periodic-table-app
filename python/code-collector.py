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

# Step 1: Parse the TSX file and extract all terraformUrl values.

with open('../src/app/data.ts', 'r') as f:
    tsx_content = f.read()

# Use regex to extract terraformUrl and name values
pattern = re.compile(r'name: \'(.*?)\',\s*slug: \'(.*?)\',.*?terraformUrl: \'(.*?)\'', re.DOTALL)
matches = pattern.findall(tsx_content)

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
    patterns = [
        rf'locals\s+{{[\s\S]*?^}}',  # Locals block pattern
        rf'data\s+".*?"\s+".*?"\s+{{[\s\S]*?^}}',  # Data block pattern
        rf'resource\s+"{resource_type}"\s+".*?"\s+{{[\s\S]*?^}}'  # Specific resource pattern
    ]
    
    blocks = []
    for pattern in patterns:
        for match in re.finditer(pattern, content, re.MULTILINE):
            blocks.append(match.group(0))
    
    return '\n\n'.join(blocks)  # Separate blocks with two newlines for better readability

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

def scrape_github_url(url):
    """
    Fetches the documentation from GitHub, focusing on content inside <article> tags.
    """
    try:
        print(f"Scraping {url}...")
        response = requests.get(url, headers=HEADERS, timeout=10)
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')
            article_content = soup.find('article')
            code_content = article_content.find('pre')
            return code_content.text if code_content else None
    except requests.RequestException as e:
        print(f"Error scraping URL {url}: {e}")
    return None

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

# Step 2: For each terraformUrl, get the GitHub URL and fetch the content.

output_directory = "../public/code"
if not os.path.exists(output_directory):
    os.makedirs(output_directory)


for name, slug, url in matches:
    # print(f"Processing: Name: {name}, Slug: {slug}, URL: {url}")  # Debug line
    # Define substitutions outside the loop
    substitutions = {
        "name": f'"{slug}${{local.naming_suffix}}"',
        "location": "var.location",
        "tags": "var.tags",
    }

    resource = extract_resource_from_terraform_url(url)
    if resource:
        # if name == "managed identity":
        github_url = get_github_url(resource)
        content = scrape_github_url(github_url)
        if content:
            # Decode escape sequences
            content = decode_escapes(content)
            
            # Substitute name and location values
            content = substitute_values(content, slug, substitutions)
            
            # Extract specific resource block
            content = extract_resources_and_data(content, f"azurerm_{resource}")
            if not content:
                print("Specific resource block not found!")  # Debug line
                continue  # If the specific resource block is not found, skip saving the file

            # Replace all instances of "example" and .example
            content = content.replace('"example"', '"main"').replace('.example', '.main')

            # Format the Terraform code
            content = format_terraform_code(content)
            
            if not content:
                print(f"No content for {name}, skipping...")
                continue

            file_name = name.replace(' ', '-').lower() + '.tf'
            full_path = os.path.join(output_directory, file_name)

            # Check if file already exists and contents are the same
            if os.path.exists(full_path):
                with open(full_path, 'r') as f:
                    existing_content = f.read()
                if existing_content == content:
                    print(f"No changes for {name}, skipping...")
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
