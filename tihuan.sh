#!/bin/bash
find /data/corejj-v3.3.3 -depth -type d -name "*spug*" | while IFS= read -r dir; do
  new_dir=$(echo "$dir" | sed 's/spug/corejj/g')
  mv -v "$dir" "$new_dir"
done

find /data/corejj-v3.3.3 -depth -type f -name "*spug*" | while IFS= read -r file; do
  new_file=$(echo "$file" | sed 's/spug/corejj/g')
  mv -v "$file" "$new_file"
done

