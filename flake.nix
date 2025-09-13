{
  description = "Personal site built with SvelteKit";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = nixpkgs.legacyPackages.${system};
    in {
      devShells.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          # Node.js and package managers
          nodejs_20
          npm-check-updates

          # Development tools
          just
          git

          # Optional tools for development
          gh # GitHub CLI for deployment

          # Language servers and formatters (optional)
          nodePackages.typescript-language-server
          nodePackages.svelte-language-server
          nodePackages.prettier
          nodePackages.eslint
        ];

        shellHook = ''
          echo "🚀 SvelteKit development environment"
          echo "Node.js version: $(node --version)"
          echo "npm version: $(npm --version)"
          echo ""
          echo "Available commands:"
          echo "  just dev     - Start development server"
          echo "  just build   - Build for production"
          echo "  just preview - Preview production build"
          echo "  just deploy  - Deploy to GitHub Pages"
          echo "  just help    - Show all available commands"
          echo ""

          # Install node modules if they don't exist
          if [ ! -d "node_modules" ]; then
            echo "Installing npm dependencies..."
            npm install
          fi
        '';
      };
    });
}
