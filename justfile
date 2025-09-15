# Personal Site Justfile
# Modern workflow using Deno + npm hybrid approach
# Use 'just <command>' to run commands

# Show all available commands
help:
    @just --list

# === DENO WORKFLOW (Recommended) ===

# Install dependencies (uses npm under the hood)
install:
    deno task install

# Start development server
dev:
    deno task dev

# Build for production
build:
    deno task build

# Preview production build locally
preview:
    deno task preview

# Check types and lint
check:
    deno task check

# Watch mode for type checking
check-watch:
    deno task check:watch

# Lint code (npm-based)
lint:
    deno task lint

# Format code (npm-based)
format:
    deno task format

# Clean build artifacts with Deno
clean:
    deno task clean

# Fresh install (clean + install)
fresh:
    deno task fresh

# Deploy to GitHub Pages
deploy:
    deno task deploy

# Update dependencies interactively
update:
    deno task update

# Run all checks (lint + type check)
verify:
    deno task verify

# Full build pipeline (install, verify, build)
ci:
    deno task ci

# Development setup (install + dev)
setup:
    deno task setup

# === DENO-SPECIFIC COMMANDS ===

# Format code with Deno's built-in formatter
fmt-deno:
    deno task fmt-deno

# Lint code with Deno's built-in linter
lint-deno:
    deno task lint-deno

# Type check TypeScript files with Deno
typecheck-deno:
    deno task typecheck-deno

# Serve built files with Deno's file server
serve:
    deno task serve

# Check Deno installation and version
deno-info:
    deno --version

# === LEGACY NPM COMMANDS (if needed) ===

# Install dependencies with npm directly
install-npm:
    npm install

# Start development server with npm directly
dev-npm:
    npm run dev

# Build for production with npm directly
build-npm:
    npm run build

# Preview production build with npm directly
preview-npm:
    npm run preview

# Check types with npm directly
check-npm:
    npm run check

# Lint code with npm directly
lint-npm:
    npm run lint

# Format code with npm directly
format-npm:
    npm run format

# Clean with rm (traditional approach)
clean-npm:
    rm -rf build/ .svelte-kit/ node_modules/

# === UTILITY COMMANDS ===

# Run Deno example script (demonstrates Deno capabilities)
example:
    deno task example

# Run Deno formatter on specific files
fmt-file file:
    deno fmt {{file}}

# Run Deno linter on specific files
lint-file file:
    deno lint {{file}}

# Type check specific TypeScript file
check-file file:
    deno check {{file}}

# View build size analysis
analyze:
    @echo "Build size analysis:"
    @du -sh build/
    @echo ""
    @echo "Largest files:"
    @find build -type f -exec du -h {} + | sort -hr | head -10

# === DEVELOPMENT HELPERS ===

# Quick development cycle (format + lint + build)
quick: fmt-deno lint-deno build

# Full quality check (all linting + type checking)
quality: lint-deno fmt-deno check

# Development with auto-reload (alias for dev)
watch: dev

# === DEFAULT COMMANDS ===

# Default task points to setup
default: setup

# Common aliases for faster typing
alias d := dev
alias b := build
alias p := preview
alias c := check
alias l := lint
alias f := format
alias q := quick
