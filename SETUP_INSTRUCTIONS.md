# Complete Setup Instructions

## Step 1: Install Node.js and npm

**You need to install Node.js first!** See `INSTALL_NODE.md` for detailed instructions.

Quick option: Download from https://nodejs.org/ (choose LTS version)

## Step 2: Verify Installation

Open Terminal and run:
```bash
node --version
npm --version
```

If you see version numbers, you're ready! If not, follow `INSTALL_NODE.md`.

## Step 3: Install Project Dependencies

Once Node.js is installed:

```bash
cd /Users/naveen/Documents/Geodesign/do_react
npm install
```

This will install all required packages (React, Vite, Tailwind, etc.)

## Step 4: Start Development Server

```bash
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

Open `http://localhost:3000` in your browser.

## Step 5: Build for Production (Optional)

When ready to deploy:

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

## Common Issues

### "command not found: npm"
- Node.js is not installed → Follow `INSTALL_NODE.md`

### "EACCES: permission denied"
- Fix npm permissions (see `INSTALL_NODE.md`)

### Port 3000 already in use
- Use a different port: `npm run dev -- --port 3001`

### Module not found errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

## Next Steps

- Read `QUICK_START.md` for project overview
- Check `VALIDATION_AND_IMPROVEMENTS.md` for best practices
- Customize content in `src/constants/data.js`
