#!/bin/bash
# Generate all scenario audio files using ElevenLabs v3 model

API_KEY="3b865a0a9812baa264a9b0468a036b5faa41f0f4d411ec5e386df17467ed3cc4"
VOICE_ID="DYkrAHD8iwork3YSUBbs"  # Tom
MODEL="eleven_v3"
OUTPUT_DIR="/Users/jamesashbridge/.openclaw/workspace/aussie-workplace-challenge/audio"

# Read scripts and generate
jq -c '.[]' "$OUTPUT_DIR/scripts.json" | while read -r item; do
    id=$(echo "$item" | jq -r '.id')
    text=$(echo "$item" | jq -r '.text')
    output_file="$OUTPUT_DIR/scenario-$(printf '%02d' $id).mp3"
    
    if [ -f "$output_file" ] && [ $(stat -f%z "$output_file") -gt 1000 ]; then
        echo "Skipping $id (already exists)"
        continue
    fi
    
    echo "Generating scenario $id..."
    
    # Escape the text for JSON
    escaped_text=$(echo "$text" | sed 's/"/\\"/g')
    
    curl -s "https://api.elevenlabs.io/v1/text-to-speech/$VOICE_ID" \
        -H "xi-api-key: $API_KEY" \
        -H "Content-Type: application/json" \
        -d "{
            \"text\": \"$escaped_text\",
            \"model_id\": \"$MODEL\",
            \"voice_settings\": {
                \"stability\": 0.5
            }
        }" \
        --output "$output_file"
    
    if [ -f "$output_file" ] && [ $(stat -f%z "$output_file") -gt 1000 ]; then
        echo "  ✓ Created scenario-$(printf '%02d' $id).mp3 ($(stat -f%z "$output_file") bytes)"
    else
        echo "  ✗ Failed scenario $id"
        cat "$output_file" 2>/dev/null
    fi
    
    # Small delay to respect rate limits
    sleep 0.3
done

echo "Done! Files created:"
ls -la "$OUTPUT_DIR"/scenario-*.mp3 2>/dev/null | wc -l
