import re
import os
import requests

from bs4 import BeautifulSoup

def get_template_url(resource, entity, template_type):
    return f"https://learn.microsoft.com/en-us/azure/templates/{resource}/{entity}?pivots=deployment-language-{template_type}"

def scrape_template_url(url):
    try:
        response = requests.get(url, headers=HEADERS, timeout=10)
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')
            code_content = soup.find('code', {'class': 'lang-json'})
            return code_content.text if code_content else None
    except requests.RequestException as e:
        print(f"Error scraping URL {url}: {e}")
    return None

def save_content(content, storage_location, file_name):
    if content is None:
        print(f"Skipping {file_name} as content is None.")
        return

    try:
        os.makedirs(storage_location, exist_ok=True)
        full_path = os.path.join(storage_location, file_name)
        with open(full_path, 'w') as file:
            file.write(content)
        print(f"File saved to {full_path}")
    except FileNotFoundError as e:
        print(f"Error saving {file_name}: {e}. Skipping this file.")



print("Starting the script scraping script...")

# Constants
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

# Parameters
template_type = "arm"  # Change to "arm" for ARM templates
storage_location = "../public/code"  # Default storage location

# Read the content of the data.ts file
with open('../src/app/data.ts', 'r') as f:
    tsx_content = f.read()

# Define a pattern to match the entity objects
pattern = re.compile(r"resource: '(.*?)',.*?entity: '(.*?)',", re.DOTALL)

# Find all matches using the pattern
matches = pattern.findall(tsx_content)

# Iterate through the matches and process them
for resource, entity in matches:
    # Form the URL for Bicep or ARM template
    bicep_url = get_template_url(resource, entity, template_type)
    
    # Scrape the content from the URL
    bicep_content = scrape_template_url(bicep_url)
    
    # Determine the file extension and subfolder based on the template type
    extension = ".bicep" if template_type == "bicep" else ".json"
    subfolder = "/bicep" if template_type == "bicep" else "/arm"
    
    # Save the content to the specified location
    save_content(bicep_content, storage_location + subfolder, entity + extension)
