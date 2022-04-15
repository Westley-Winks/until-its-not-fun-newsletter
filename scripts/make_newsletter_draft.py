import os
import requests
import frontmatter

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
        body = frontmatter.loads(f.read())

    # get title from front matter
    subject = body["title"]
    payload["subject"] = subject

    # remove front matter
    body = body.content

    # add View In Browser link
    header_text = f"[View in Browser](https://untilitsnotfun.com/posts/{post_path}/)\n\n"

    # combine link, subject as heading and body
    payload["body"] = header_text + f"# {subject}" + body

    r = requests.post("https://api.buttondown.email/v1/drafts", headers=headers, data=payload)

    return r

response = make_draft(POST_PATH)

if response.status_code != 201:
    print("Problem with api\n", response.status_code)
else:
    print("Draft Posted!")