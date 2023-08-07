import requests
from bs4 import BeautifulSoup
import json

URL = "https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-dns"
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}
response = requests.get(URL, headers=HEADERS)
soup = BeautifulSoup(response.content, 'html.parser')

# Find the tables in the webpage. Depending on the structure, you might need to adjust this
tables = soup.find_all('table')

def split_on_multiple_delimiters(text, delimiters):
    for delimiter in delimiters:
        text = text.replace(delimiter, '|')
    return [item.strip() for item in text.split('|') if item.strip()]

data = []
current_cloud_type = "commercial"  # Default value for the first table

for table in tables:
    # Check if the preceding sibling is an h3 tag
    prev_sibling = table.find_previous_sibling()
    if prev_sibling and prev_sibling.name == 'h3':
        current_cloud_type = prev_sibling.text.strip()
    
    rows = table.find_all('tr')
    for row in rows[1:]:  # skipping the header row
        columns = row.find_all('td')
        entry = {
            "private_link_resource_type": columns[0].text.strip(),
            "subresource": split_on_multiple_delimiters(columns[1].text, [',', '  ']),
            "private_dns_zone_name": split_on_multiple_delimiters(columns[2].text, [',', '  ']),
            "public_dns_zone_forwarders": split_on_multiple_delimiters(columns[3].text, [',', '  ']),
            "cloud_type": current_cloud_type
        }
        data.append(entry)

# Save to JSON file
with open("azure_private_endpoint_dns_configuration.json", 'w') as file:
    json.dump(data, file, indent=4)

print("Data saved to azure_private_endpoint_dns_configuration.json")
