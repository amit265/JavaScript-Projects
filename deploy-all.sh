#!/bin/bash

# Store current folder
BASE_DIR=$(pwd)
echo "📁 Starting bulk deployment from: $BASE_DIR"
echo "---------------------------------------------"

# Create/clear output file
OUTPUT_FILE="$BASE_DIR/deployed-projects.txt"
> "$OUTPUT_FILE"

# Loop through all subfolders
for dir in */; do
  echo "🚀 Deploying: $dir"
  cd "$dir"

  # Deploy using Vercel CLI (must be logged in already)
  LIVE_URL=$(vercel --prod --confirm 2>/dev/null | grep -Eo 'https://[^ ]+')

  if [[ -n "$LIVE_URL" ]]; then
    echo "✅ $dir → $LIVE_URL"
    echo "$dir → $LIVE_URL" >> "$OUTPUT_FILE"
  else
    echo "❌ $dir → Deployment failed"
    echo "$dir → FAILED" >> "$OUTPUT_FILE"
  fi

  cd ..
  echo "---------------------------------------------"
done

echo "🎉 Done! All results saved to deployed-projects.txt"
