# GeoDesign React Application

A modern React application for GeoDesign - Expert Soil Testing Services in India.

**Production:** [https://geodesign.co.in](https://geodesign.co.in) — inner pages use a white `page-shell` + `max-w-7xl` layout, sky card tokens, and typography (Inter, Montserrat). See [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) and the [docs index](docs/README.md). Service routes: [docs/SERVICES_PAGES.md](docs/SERVICES_PAGES.md). Git workflow template: [docs/git-local.example.md](docs/git-local.example.md) (copy to `docs/git-local.md`, gitignored).

## Features

- ⚛️ Built with React 18 and Vite
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🚀 Optimized performance with code splitting
- ♿ Accessibility features
- 🔒 Security best practices

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
do_react/
├── public/
│   └── assets/          # Static assets (images, etc.)
├── src/
│   ├── components/      # React components
│   ├── hooks/          # Custom React hooks
│   ├── styles/         # Global styles
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Best Practices Implemented

- Component-based architecture
- Custom hooks for reusable logic
- Performance optimization (lazy loading, code splitting)
- Accessibility (ARIA labels, semantic HTML)
- Security (form validation, XSS prevention)
- SEO optimization (meta tags, semantic structure)


