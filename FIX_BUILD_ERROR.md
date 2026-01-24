# Fix Build Error: terser not found

## Problem
```
error during build:
[vite:terser] terser not found. Since Vite v3, terser has become an optional dependency.
```

## Solution Applied

Changed `vite.config.js` from using `terser` to `esbuild`:
- **esbuild** is built into Vite (no installation needed)
- **esbuild** is faster than terser
- **esbuild** provides good minification

## Alternative: Install Terser (If You Need Console Removal)

If you specifically need to remove `console.log` statements, you can install terser:

```bash
cd /Users/naveen/Documents/Geodesign/do_react
npm install --save-dev terser
```

Then change `vite.config.js` back to:
```javascript
minify: 'terser',
terserOptions: {
  compress: {
    drop_console: true,
    drop_debugger: true,
  },
},
```

## Current Configuration

The build now uses `esbuild` which:
- ✅ Works out of the box (no installation needed)
- ✅ Faster build times
- ✅ Good minification
- ✅ Smaller bundle sizes

## Test Build Locally

```bash
cd /Users/naveen/Documents/Geodesign/do_react
npm run build
```

Should build successfully now!
