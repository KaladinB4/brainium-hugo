#!/usr/bin/env bash
set -euo pipefail

count="${1:-60}"
start_date="${2:-2025-10-01}"

content_dir="$(cd "$(dirname "$0")/../content/posts" && pwd)"

for i in $(seq 1 "$count"); do
  date_str=$(date -d "$start_date +$i day" +%F)
  slug=$(printf "demo-post-%02d" "$i")
  file="$content_dir/$slug.md"
  if [[ -f "$file" ]]; then
    continue
  fi
  cat > "$file" <<EOM
---
title: "Demo Post $i"
date: $date_str
description: "Placeholder entry for archive pagination."
---

This is a generated placeholder used to test archive pagination.
EOM
done

echo "Generated up to $count demo posts in $content_dir"
