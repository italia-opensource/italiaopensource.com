#!/bin/bash
set -eE -o functrace

failure() {
  local lineno=$1
  local msg=$2
  echo "Failed at $lineno: $msg"
}
trap 'failure ${LINENO} "$BASH_COMMAND"' ERR

set -o pipefail

BASEDIR="$(dirname "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)")"

# Function to normalize filenames
normalize_filename() {
    local name="$1"
    # Remove diacritics (approximation in bash), replace spaces with hyphens, 
    # replace slashes with hyphens, make lowercase, replace triple hyphens with single hyphen
    echo "$name" | iconv -f utf8 -t ascii//TRANSLIT | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr '/' '-' | sed 's/---/-/g'
}

# Function to create content page
create_content_page() {
    local page_type="$1"
    local name="$2"
    local description="$3"
    
    # Use default description if not provided
    if [ -z "$description" ]; then
        description="Italia Open-Source the first platform dedicated to Italian open-source world."
    fi
    
    # Create content with frontmatter
    cat << EOF
---
title: "$name"
description: "$description"
---
import ContentPage from '@site/src/components/Pages/$page_type';

<ContentPage
    data={$4}
/>
EOF
}

# Process each endpoint
process_endpoints() {
    local endpoints=("opensource" "startups" "communities" "digital-nomads")
    
    for endpoint in "${endpoints[@]}"; do
        local data_filepath="$BASEDIR/database/${endpoint}.json"
        
        # Determine target directory
        if [ "$endpoint" == "opensource" ]; then
            target_dir="$BASEDIR/src/pages/${endpoint}s"
        else
            target_dir="$BASEDIR/src/pages/$endpoint"
        fi
        
        # Ensure target directory exists
        mkdir -p "$target_dir"
        
        echo "Processing $endpoint data from $data_filepath"
        
        # Parse JSON and loop through items
        # Uses jq to process JSON - make sure it's installed
        item_count=$(jq '.data | length' "$data_filepath")
        
        for ((i=0; i<item_count; i++)); do
            name=$(jq -r ".data[$i].name" "$data_filepath")
            description=$(jq -r ".data[$i].description // \"\"" "$data_filepath")
            # Get the full JSON for the item and transform boolean values
            item_json=$(jq ".data[$i]" "$data_filepath")
            
            echo "Creating $name in $endpoint"
            
            # Create content based on endpoint type
            local content=""
            case "$endpoint" in
                "startups")
                    content=$(create_content_page "startup" "$name" "$description" "$item_json")
                    ;;
                "communities")
                    content=$(create_content_page "community" "$name" "$description" "$item_json")
                    ;;
                "opensource")
                    content=$(create_content_page "project" "$name" "$description" "$item_json")
                    ;;
                "digital-nomads")
                    content=$(create_content_page "digital-nomad" "$name" "$description" "$item_json")
                    ;;
            esac
            
            # Create the file
            normalized_name=$(normalize_filename "$name")
            output_file="$target_dir/${normalized_name}.md"
            echo "$content" > "$output_file"
            echo "Created $output_file"
        done
    done
}

main() {
    echo "Starting page creation script..."
    process_endpoints
    echo "Page creation completed."
}

main