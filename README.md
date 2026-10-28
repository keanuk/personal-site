# Keanu Kerr's Personal Website

A modern personal portfolio website showcasing work experience, skills, education, and projects.

Built with **SvelteKit** for optimal performance and modern web standards.

## Features

- 🚀 Static site generation with SvelteKit
- 📱 Fully responsive design
- ⚡ Fast loading and optimized performance
- 🎨 Clean, professional design
- 📄 Downloadable resume
- 🔗 Social media integration
- ♿ Accessible navigation and interactions

## Tech Stack

- **Framework**: SvelteKit
- **Language**: TypeScript
- **Runtime**: Deno (with npm compatibility) + Node.js
- **Styling**: Modern CSS with custom properties
- **Build Tool**: Vite
- **Task Runner**: Deno tasks + just
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## Development

### Prerequisites

Choose one of the following setups:

**Recommended: Deno + just**

- [Deno](https://deno.land/) 2.0+
- [just](https://github.com/casey/just) (command runner)

**Alternative: Traditional Node.js**

- Node.js 22.17+
- npm

### Setup

1. Clone the repository:

```bash
git clone https://github.com/keanuk/personal-site.git
cd personal-site
```

2. **With Deno + just (Recommended)**:

```bash
# Install dependencies
just install

# Start development server
just dev
```

**Or with npm directly**:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Available Commands

**With just (uses Deno tasks internally)**:

- `just dev` - Start development server
- `just build` - Build for production
- `just preview` - Preview production build locally
- `just check` - Run type checking
- `just lint` - Run ESLint and linting
- `just format` - Format code with Prettier
- `just clean` - Clean build artifacts
- `just verify` - Run all checks (lint + type check)
- `just serve` - Serve built files with Deno's file server

**Deno-specific commands**:

- `just fmt-deno` - Format with Deno's built-in formatter
- `just lint-deno` - Lint with Deno's built-in linter
- `just typecheck-deno` - Type check with Deno

**Traditional npm scripts** (still available):

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run check` - Run type checking
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch via GitHub Actions.

For manual deployment:

**With just**:

```bash
just deploy
```

**With npm**:

```bash
npm run build
./deploy-to-gh-pages.sh
```

## Project Structure

```
personal-site/
├── src/
│   ├── lib/
│   │   ├── components/     # Reusable Svelte components
│   │   └── data.ts        # Personal information and content
│   ├── routes/            # SvelteKit routes
│   ├── app.css           # Global styles
│   └── app.html          # HTML template
├── static/               # Static assets (images, icons, documents)
└── build/               # Production build output
```

## Customization

To adapt this site for your own use:

1. Update personal information in `src/lib/data.ts`
2. Replace images and icons in `static/`
3. Modify styling in `src/app.css` and component styles
4. Update the CNAME file with your domain
5. Configure GitHub Pages in your repository settings

## Why Deno?

This project uses a hybrid Deno + npm approach that combines the best of both ecosystems:

**Deno advantages**:

- **Built-in tooling**: Formatter, linter, and TypeScript support out of the box
- **Modern runtime**: Web standards API, secure by default
- **Better development experience**: No need for separate tools like Prettier or ESLint for basic formatting/linting
- **Simplified dependency management**: Direct imports from URLs and JSR

**npm compatibility**:

- Complex build toolchains (Vite, SvelteKit, esbuild) still work through npm
- Existing ecosystem packages remain available
- Gradual migration path without breaking existing workflows

The `deno.json` configuration provides tasks that use Deno where it excels (formatting, linting, type checking) while delegating complex builds to the proven npm toolchain.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: keanu@kerr.us
- **LinkedIn**: [linkedin.com/in/keanukerr](https://www.linkedin.com/in/keanukerr/)
- **GitHub**: [github.com/keanuk](https://github.com/keanuk)

---

Built with ❤️ using SvelteKit
