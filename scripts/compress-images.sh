#!/bin/bash
# Compresses PNG/JPG images in public/images/ to web-optimized JPEGs.
# Output: <original-name>-web.jpg, JPEG quality 85, max width 2400px (no upscaling).
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../public/images" && pwd)"
QUALITY=85
MAX_WIDTH=2400

for f in "$DIR"/*.png "$DIR"/*.jpg "$DIR"/*.jpeg; do
  [ -e "$f" ] || continue
  base="$(basename "$f")"
  name="${base%.*}"

  # Skip files that are already web-compressed output
  [[ "$name" == *-web ]] && continue

  out="$DIR/${name}-web.jpg"
  width=$(sips -g pixelWidth "$f" | awk '/pixelWidth/{print $2}')

  if [ "$width" -gt "$MAX_WIDTH" ]; then
    sips -s format jpeg -s formatOptions "$QUALITY" --resampleWidth "$MAX_WIDTH" "$f" --out "$out" >/dev/null
  else
    sips -s format jpeg -s formatOptions "$QUALITY" "$f" --out "$out" >/dev/null
  fi

  echo "$base -> $(basename "$out")"
done
