# Personal Site Justfile
# Use 'just <command>' to run commands

# Show all available commands
help:
    @just --list

# Install dependencies
install:
    npm install

# Start development server
dev:
    npm run dev

# Build for production
build:
    npm run build

# Preview production build locally
preview:
    npm run preview

# Check types and lint
check:
    npm run check

# Watch mode for type checking
check-watch:
    npm run check:watch

# Lint code
lint:
    npm run lint

# Format code
format:
    npm run format

# Clean build artifacts and node_modules
clean:
    rm -rf build/ .svelte-kit/ node_modules/

# Fresh install (clean + install)
fresh: clean install

# Deploy to GitHub Pages
deploy:
    ./deploy-to-gh-pages.sh

# Update dependencies interactively
update:
    npm-check-updates --interactive

# Run all checks (lint + type check)
verify: lint check

# Full build pipeline (install, verify, build)
ci: install verify build

# Development setup (install + dev)
setup: install dev
