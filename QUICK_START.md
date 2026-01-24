# Quick Start Guide

## Installation

1. **Install Dependencies**
   ```bash
   cd do_react
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

## Project Structure

```
do_react/
├── public/
│   └── assets/          # Static assets (images, etc.)
├── src/
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── VideoSection.jsx
│   │   ├── IssueSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   └── ErrorBoundary.jsx
│   ├── hooks/          # Custom React hooks
│   │   └── useIntersectionObserver.js
│   ├── constants/      # Data constants
│   │   └── data.js
│   ├── styles/         # Global styles
│   │   └── index.css
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Key Features

- ✅ **Component-Based Architecture**: Modular, reusable components
- ✅ **Performance Optimized**: Lazy loading, code splitting
- ✅ **Accessible**: ARIA labels, keyboard navigation
- ✅ **Responsive**: Mobile-first design
- ✅ **Error Handling**: Error boundaries for graceful error handling
- ✅ **Modern React**: Hooks, functional components

## Customization

### Updating Content

All content is centralized in `src/constants/data.js`. Update:
- Services
- About points
- Contact information
- Social media links
- etc.

### Styling

- Global styles: `src/styles/index.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles: Inline Tailwind classes

### Adding New Components

1. Create component in `src/components/`
2. Import and use in `App.jsx`
3. Add any data to `src/constants/data.js` if needed

## Building for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## Deployment

### Netlify (Recommended)

1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Netlify Forms will automatically handle form submissions

### Other Platforms

- **Vercel**: Similar to Netlify
- **GitHub Pages**: Requires additional configuration
- **Traditional Hosting**: Upload `dist/` folder contents

## Troubleshooting

### Images Not Loading

- Check that assets are in `public/assets/`
- Verify image paths in components match file structure
- Ensure file extensions match (.jpg vs .JPG)

### Form Not Submitting

- Verify Netlify Forms is configured
- Check browser console for errors
- Ensure `data-netlify="true"` is in form tag

### Build Errors

- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version (requires v18+)
- Verify all dependencies are installed

## Next Steps

1. Review `VALIDATION_AND_IMPROVEMENTS.md` for best practices
2. Customize content in `src/constants/data.js`
3. Add your own images to `public/assets/`
4. Test on multiple devices and browsers
5. Deploy to production

## Support

For issues or questions, refer to:
- `VALIDATION_AND_IMPROVEMENTS.md` - Detailed documentation
- `README.md` - General project information


