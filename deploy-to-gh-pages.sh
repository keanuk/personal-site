#!/bin/bash

# Build the SvelteKit application
echo "Building SvelteKit application..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "Build failed!"
    exit 1
fi

# Copy CNAME file to build directory if it exists
if [ -f "CNAME" ]; then
    cp CNAME build/
fi

# Create .nojekyll file to bypass Jekyll processing
touch build/.nojekyll

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npx gh-pages -d build -r https://github.com/keanuk/personal-site.git

echo "Deployment complete!"
