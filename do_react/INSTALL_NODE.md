# Installing Node.js and npm on macOS

Node.js and npm are required to run this React project. Follow one of the methods below to install them.

## Method 1: Install via Official Installer (Recommended for Beginners)

1. **Download Node.js**
   - Go to: https://nodejs.org/
   - Download the **LTS (Long Term Support)** version for macOS
   - Choose the `.pkg` installer for your Mac (Intel or Apple Silicon)

2. **Run the Installer**
   - Double-click the downloaded `.pkg` file
   - Follow the installation wizard
   - This will install both Node.js and npm

3. **Verify Installation**
   Open Terminal and run:
   ```bash
   node --version
   npm --version
   ```
   You should see version numbers (e.g., v20.x.x and 10.x.x)

## Method 2: Install via Homebrew (Recommended for Developers)

If you have Homebrew installed:

1. **Install Homebrew** (if not already installed):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install Node.js**:
   ```bash
   brew install node
   ```

3. **Verify Installation**:
   ```bash
   node --version
   npm --version
   ```

## Method 3: Install via NVM (Node Version Manager)

NVM allows you to manage multiple Node.js versions:

1. **Install NVM**:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

2. **Restart Terminal** or run:
   ```bash
   source ~/.zshrc
   ```

3. **Install Node.js LTS**:
   ```bash
   nvm install --lts
   nvm use --lts
   ```

4. **Verify Installation**:
   ```bash
   node --version
   npm --version
   ```

## After Installation

Once Node.js and npm are installed:

1. **Navigate to the project directory**:
   ```bash
   cd /Users/naveen/Documents/Geodesign/do_react
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** to `http://localhost:3000`

## Troubleshooting

### If npm commands still don't work after installation:

1. **Restart Terminal** - Close and reopen Terminal app
2. **Check PATH** - Run `echo $PATH` to see if Node.js is in your PATH
3. **Reload shell config**:
   ```bash
   source ~/.zshrc
   ```

### If you get permission errors:

You may need to fix npm permissions:
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```

## Recommended Version

- **Node.js**: v18.x or higher (LTS recommended)
- **npm**: Comes bundled with Node.js (v9.x or higher)

## Verify Everything Works

After installation, run these commands to verify:

```bash
node --version    # Should show v18.x.x or higher
npm --version     # Should show 9.x.x or higher
```

Then proceed with the project setup as described in `QUICK_START.md`.
