#!/bin/bash
# Generate all scenario images using Leonardo AI

API_KEY="2bd03915-b504-4393-9de4-7da6ace76ffa"
MODEL_ID="7b592283-e8a7-4c5a-9ba6-d18c31f258b9"
STYLE_UUID="5bdc3f2a-1be6-4d1c-8e77-992a30824a2c"
OUTPUT_DIR="/Users/jamesashbridge/.openclaw/workspace/aussie-workplace-challenge/images"

# Read prompts and generate
jq -c '.[]' "$OUTPUT_DIR/prompts.json" | while read -r item; do
    id=$(echo "$item" | jq -r '.id')
    prompt=$(echo "$item" | jq -r '.prompt')
    output_file="$OUTPUT_DIR/scenario-$(printf '%02d' $id).jpg"
    
    # Skip if already exists
    if [ -f "$output_file" ] && [ $(stat -f%z "$output_file") -gt 10000 ]; then
        echo "Skipping $id (already exists)"
        continue
    fi
    
    echo "Generating scenario $id..."
    
    # Start generation
    response=$(curl -s --request POST \
        --url https://cloud.leonardo.ai/api/rest/v1/generations \
        --header 'accept: application/json' \
        --header "authorization: Bearer $API_KEY" \
        --header 'content-type: application/json' \
        --data "{
            \"alchemy\": false,
            \"height\": 576,
            \"width\": 1024,
            \"modelId\": \"$MODEL_ID\",
            \"contrast\": 3.5,
            \"num_images\": 1,
            \"styleUUID\": \"$STYLE_UUID\",
            \"prompt\": \"$prompt\",
            \"ultra\": false
        }")
    
    gen_id=$(echo "$response" | jq -r '.sdGenerationJob.generationId')
    
    if [ "$gen_id" == "null" ] || [ -z "$gen_id" ]; then
        echo "  ✗ Failed to start generation for scenario $id"
        echo "  Response: $response"
        continue
    fi
    
    echo "  Started: $gen_id"
    
    # Poll for completion (max 60 seconds)
    for i in {1..12}; do
        sleep 5
        result=$(curl -s --request GET \
            --url "https://cloud.leonardo.ai/api/rest/v1/generations/$gen_id" \
            --header 'accept: application/json' \
            --header "authorization: Bearer $API_KEY")
        
        status=$(echo "$result" | jq -r '.generations_by_pk.status')
        
        if [ "$status" == "COMPLETE" ]; then
            image_url=$(echo "$result" | jq -r '.generations_by_pk.generated_images[0].url')
            
            # Download image
            curl -s "$image_url" --output "$output_file"
            
            if [ -f "$output_file" ] && [ $(stat -f%z "$output_file") -gt 10000 ]; then
                echo "  ✓ Saved scenario-$(printf '%02d' $id).jpg"
            else
                echo "  ✗ Download failed for scenario $id"
            fi
            break
        elif [ "$status" == "FAILED" ]; then
            echo "  ✗ Generation failed for scenario $id"
            break
        fi
    done
    
    # Small delay between requests
    sleep 1
done

echo ""
echo "Done! Checking results..."
ls -la "$OUTPUT_DIR"/scenario-*.jpg 2>/dev/null | wc -l
echo "images generated"
