#!/bin/bash

if [ -z "$1" ]; then
  echo "Error: URL is missing"
  exit 1
fi

url="$1"
header="X-School-User-Id: 98"

curl -s -H "$header" "$url"
