#!/usr/bin/python3
"""A script that:
- takes your GitHub credentials (username and password)
- uses the GitHub API to display your id
"""

import requests
import sys

# Get the username and personal access token from the command-line arguments
username = sys.argv[1]
password = sys.argv[2]

# Set up the API endpoint and headers
url = 'https://api.github.com/user'
headers = {'Accept': 'application/vnd.github.v3+json'}

# Make the API request using Basic Authentication
response = requests.get(url, auth=(username, password), headers=headers)

# Check if the request was successful
if response.status_code == 200:
    # Get the user ID from the response JSON
    user_id = response.json()['id']
    print(f"Your GitHub user ID is {user_id}")
else:
    print("Error: Could not retrieve user ID")

