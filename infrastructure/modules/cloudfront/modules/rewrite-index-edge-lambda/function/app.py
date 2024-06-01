from __future__ import annotations


def process_uri(uri: str):
    if uri == "/":
        return uri

    if uri.endswith("/"):
        return f"{uri}index.html"

    if "." not in uri:
        return f"{uri}/index.html"

    return uri


def handler(event, _):
    request = event["Records"][0]["cf"]["request"]

    request["uri"] = process_uri(request["uri"])

    return request
