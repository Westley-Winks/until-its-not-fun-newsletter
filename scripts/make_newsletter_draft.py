from lib2to3.pygram import pattern_symbols
import os
import requests
import re

from dotenv import load_dotenv
load_dotenv(".env")

BD_TOKEN = os.environ["BD_TOKEN"]
POST_PATH = os.environ["INPUT_POST_PATH"]

def make_draft(post_path):

    headers = {
        "Authorization": f"Token {BD_TOKEN}"
    }

    payload = {}

    with open(f"content/posts/{post_path}/index.md") as f:
        body = f.read()

    # get title from front matter
    pattern = re.compile(r"title:\s\".*\"")
    subject = pattern.search(body).group(0)
    subject = subject.replace("title: ", "").strip("\"")
    payload["subject"] = subject

    # get date from front matter
    # pattern = re.compile(r"date:\s\d{4}-\d{2}-\d{2}")
    # folder = pattern.search(body).group(0)
    # folder = folder.replace("date: ", "").strip("\"")

    # remove front matter
    pattern = re.compile(r"---\n[\w\:\s\"\.\-]+\n---")
    front_matter = pattern.match(body).group(0)
    body = body.replace(front_matter, "")

    header_text = f"[View in Browser](example.com/posts/{post_path}/)\n\n"

    payload["body"] = header_text + f"# {subject}" + body

    r = requests.post("https://api.buttondown.email/v1/drafts", headers=headers, data=payload)

    return r

response = make_draft(POST_PATH)

if response.status_code != 201:
    print("Problem with api\n", response.status_code)
else:
    print("Draft Posted!")