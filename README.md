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
- **Styling**: CSS with custom properties
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## Development

### Prerequisites

- Node.js 18+
- npm

### Setup

1. Clone the repository:

```bash
git clone https://github.com/keanuk/personal-site.git
cd personal-site
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run check` - Run type checking
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch via GitHub Actions.

For manual deployment:

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

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: keanu@kerr.us
- **LinkedIn**: [linkedin.com/in/keanukerr](https://www.linkedin.com/in/keanukerr/)
- **GitHub**: [github.com/keanuk](https://github.com/keanuk)

---

Built with ❤️ using SvelteKit
