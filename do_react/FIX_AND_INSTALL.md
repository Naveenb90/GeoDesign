# Fix npm Permissions and Install Dependencies

## The Issue
You're getting a permissions error with npm. This is common on macOS.

## Solution: Install Dependencies

Run these commands in your Terminal:

```bash
# Navigate to the project directory
cd /Users/naveen/Documents/Geodesign/do_react

# Install all dependencies (including Tailwind CSS)
npm install
```

## If You Still Get Permission Errors

### Option 1: Fix npm Permissions (Recommended)

```bash
# Create a directory for global packages
mkdir ~/.npm-global

# Configure npm to use the new directory
npm config set prefix '~/.npm-global'

# Add to your PATH (for zsh)
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc

# Reload your shell configuration
source ~/.zshrc

# Now try installing again
cd /Users/naveen/Documents/Geodesign/do_react
npm install
```

### Option 2: Use npx (No Global Install Needed)

If the above doesn't work, you can try:

```bash
cd /Users/naveen/Documents/Geodesign/do_react
npx npm install
```

### Option 3: Reinstall Node.js

If permissions are still an issue, you might need to reinstall Node.js:

1. Uninstall current Node.js
2. Reinstall from https://nodejs.org/ (don't use sudo)
3. Then run `npm install` again

## After Installation

Once `npm install` completes successfully, you should see a `node_modules` folder created.

Then start the development server:

```bash
npm run dev
```

## What Was Fixed

I've updated `package.json` to include:
- ✅ `tailwindcss` - CSS framework
- ✅ `postcss` - CSS processor
- ✅ `autoprefixer` - CSS vendor prefixer

These are required for Tailwind CSS to work properly.
