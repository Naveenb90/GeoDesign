# Fix SSH Authentication Error

## Problem
```
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
```

## Solution Options

### Option 1: Fix SSH Key Setup (Recommended)

#### Step 1: Check SSH Key Location
```bash
# Your key is at: ~/.ssh/naveenb_git.pub
# Check if private key exists
ls -la ~/.ssh/naveenb_git
```

#### Step 2: Start SSH Agent
```bash
# Start ssh-agent
eval "$(ssh-agent -s)"

# Add your SSH key to the agent
ssh-add ~/.ssh/naveenb_git
```

#### Step 3: Test SSH Connection
```bash
ssh -T git@github.com
```

Expected output: `Hi Naveenb90! You've successfully authenticated...`

#### Step 4: Try Push Again
```bash
cd /Users/naveen/Documents/Geodesign/do_react
git push origin master
```

### Option 2: Use HTTPS Instead of SSH (Quick Fix)

#### Change Remote to HTTPS
```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Change remote URL to HTTPS
git remote set-url origin https://github.com/Naveenb90/GeoDesign.git

# Try push (will prompt for credentials)
git push origin master
```

**Note:** You'll need a Personal Access Token (not password) for HTTPS.

### Option 3: Generate New SSH Key

If the current key doesn't work:

```bash
# Generate new SSH key
ssh-keygen -t ed25519 -C "naveens2007@gmail.com" -f ~/.ssh/id_ed25519

# Start ssh-agent
eval "$(ssh-agent -s)"

# Add key to agent
ssh-add ~/.ssh/id_ed25519

# Copy public key to clipboard
cat ~/.ssh/id_ed25519.pub | pbcopy

# Add to GitHub:
# 1. Go to https://github.com/settings/keys
# 2. Click "New SSH key"
# 3. Paste the key and save

# Test connection
ssh -T git@github.com
```

### Option 4: Use GitHub CLI (Alternative)

```bash
# Install GitHub CLI (if not installed)
brew install gh

# Authenticate
gh auth login

# Then push normally
git push origin master
```

## Quick Fix Commands

### If SSH Key Exists but Not Added to Agent:
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/naveenb_git
git push origin master
```

### If You Want to Switch to HTTPS:
```bash
cd /Users/naveen/Documents/Geodesign/do_react
git remote set-url origin https://github.com/Naveenb90/GeoDesign.git
git push origin master
```

## Verify SSH Key is Added to GitHub

1. Go to: https://github.com/settings/keys
2. Check if your SSH key is listed
3. If not, add it:
   - Copy public key: `cat ~/.ssh/naveenb_git.pub`
   - Click "New SSH key" on GitHub
   - Paste and save

## Troubleshooting

### Check SSH Key Permissions
```bash
# Fix permissions
chmod 600 ~/.ssh/naveenb_git
chmod 644 ~/.ssh/naveenb_git.pub
```

### Check SSH Config
```bash
# Create/edit SSH config
nano ~/.ssh/config

# Add this:
Host github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/naveenb_git
```

### Test SSH Connection Verbose
```bash
ssh -vT git@github.com
```

This will show detailed connection info to help debug.

## Recommended: Quick HTTPS Switch

If SSH keeps failing, switch to HTTPS (easiest solution):

```bash
cd /Users/naveen/Documents/Geodesign/do_react
git remote set-url origin https://github.com/Naveenb90/GeoDesign.git
git push origin master
```

You'll need a GitHub Personal Access Token:
1. Go to: https://github.com/settings/tokens
2. Generate new token (classic)
3. Select scopes: `repo`
4. Use token as password when pushing
