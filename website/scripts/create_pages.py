import json
import os
import sys
import unicodedata

from snakemd import Document

BASEDIR = os.path.dirname(os.path.abspath(__file__).replace("scripts/", ""))


def normalizeFilename(name):
    return (
        "".join(
            c
            for c in unicodedata.normalize("NFD", name)
            if unicodedata.category(c) != "Mn"
        )
        .strip()
        .replace(" ", "-")
        .replace("/", "-")
        .lower()
    ).replace("---", "-")


def create_content_page(page_type, data):
    content = f"""---
title: "{data["name"]}"
description: "{data.get("description", "Italia Open-Source the first platform dedicated to Italian open-source world.")}"
---
import ContentPage from '@site/src/components/Pages/{page_type}';
""" + """
<ContentPage
    data={""" + str(data) + """}
/>
"""
    return content.replace("True", "true").replace("False", "false").replace("None", "null")

def create_project_page(data):
    doc = Document()
    content = create_content_page("project", data)
    doc.add_block(content)

    return doc


def create_community_page(data):
    doc = Document()
    content = create_content_page("community", data)
    doc.add_block(content)

    return doc


def create_digital_nomad_page(data):
    doc = Document()
    content = create_content_page("digital-nomad", data)
    doc.add_block(content)

    return doc


def create_startup_page(data):
    doc = Document()
    content = create_content_page("startup", data)
    doc.add_block(content)

    return doc


def main():
    api_endpoit = ["opensource", "startups", "communities", "digital-nomads"]

    for endpoint in api_endpoit:
        data_filepath = "/".join([BASEDIR, "database", f"{endpoint}.json"])
        with open(data_filepath, "r") as f:
            response = f.read()

        os.chdir(
            "/".join(
                [
                    BASEDIR,
                    "src",
                    "pages",
                    f"{endpoint}s" if endpoint == "opensource" else endpoint,
                ]
            )
        )

        for item in json.loads(response)["data"]:
            print(f"Creating {item['name']} in {endpoint}")

            if endpoint == "startups":
                doc = create_startup_page(item)

            if endpoint == "communities":
                doc = create_community_page(item)

            if endpoint == "opensource":
                doc = create_project_page(item)

            if endpoint == "digital-nomads":
                doc = create_digital_nomad_page(item)

            doc.dump(normalizeFilename(item["name"]))


if __name__ == "__main__":
    sys.exit(main())
