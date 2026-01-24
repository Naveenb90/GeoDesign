#!/bin/bash

# Script to help install Node.js on macOS
# Run this script: bash install-node.sh

echo "=========================================="
echo "Node.js Installation Helper for macOS"
echo "=========================================="
echo ""

# Check if Homebrew is installed
if command -v brew &> /dev/null; then
    echo "✅ Homebrew is installed!"
    echo ""
    echo "Installing Node.js via Homebrew..."
    brew install node
    
    echo ""
    echo "✅ Node.js installation complete!"
    echo ""
    echo "Verifying installation..."
    node --version
    npm --version
    echo ""
    echo "✅ Setup complete! You can now run 'npm install' in the project directory."
else
    echo "❌ Homebrew is not installed."
    echo ""
    echo "Please choose one of these options:"
    echo ""
    echo "Option 1: Install Homebrew first, then Node.js"
    echo "  Run: /bin/bash -c \"\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\""
    echo "  Then: brew install node"
    echo ""
    echo "Option 2: Download Node.js directly"
    echo "  1. Visit: https://nodejs.org/"
    echo "  2. Download the LTS version for macOS"
    echo "  3. Run the installer"
    echo "  4. Restart Terminal"
    echo ""
    echo "After installation, verify with:"
    echo "  node --version"
    echo "  npm --version"
fi
