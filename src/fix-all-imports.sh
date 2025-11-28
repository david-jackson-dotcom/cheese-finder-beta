#!/bin/bash

# Fix all versioned imports in components/ui

find components/ui -name "*.tsx" -o -name "*.ts" | while read file; do
  sed -i.bak -E \
    -e 's/@radix-ui\/([a-z-]+)@[0-9.]+/@radix-ui\/\1/g' \
    -e 's/lucide-react@[0-9.]+/lucide-react/g' \
    -e 's/class-variance-authority@[0-9.]+/class-variance-authority/g' \
    -e 's/react-day-picker@[0-9.]+/react-day-picker/g' \
    -e 's/embla-carousel-react@[0-9.]+/embla-carousel-react/g' \
    -e 's/recharts@[0-9.]+/recharts/g' \
    -e 's/cmdk@[0-9.]+/cmdk/g' \
    -e 's/vaul@[0-9.]+/vaul/g' \
    -e 's/input-otp@[0-9.]+/input-otp/g' \
    -e 's/react-resizable-panels@[0-9.]+/react-resizable-panels/g' \
    "$file"
  rm "${file}.bak" 2>/dev/null || true
  echo "Fixed: $file"
done

echo "All imports fixed!"
