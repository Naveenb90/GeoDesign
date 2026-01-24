# SSH Push Commands for GitHub

## Step 1: Setup SSH Agent and Add Key

```bash
# Start ssh-agent
eval "$(ssh-agent -s)"

# Add your SSH key
ssh-add ~/.ssh/naveenb_git

# Verify key is added
ssh-add -l
```

## Step 2: Test SSH Connection

```bash
# Test connection to GitHub
ssh -T git@github.com
```

**Expected output if successful:**
```
Hi Naveenb90! You've successfully authenticated, but GitHub does not provide shell access.
```

## Step 3: Create SSH Config (If Not Exists)

```bash
# Create SSH config file
cat > ~/.ssh/config << 'EOF'
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/naveenb_git
  AddKeysToAgent yes
  UseKeychain yes
EOF

# Set correct permissions
chmod 600 ~/.ssh/config
```

## Step 4: Verify Remote is Using SSH

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Check remote URL
git remote -v
```

Should show:
```
origin	git@github.com:Naveenb90/GeoDesign.git (fetch)
origin	git@github.com:Naveenb90/GeoDesign.git (push)
```

If it shows HTTPS, change it:
```bash
git remote set-url origin git@github.com:Naveenb90/GeoDesign.git
```

## Step 5: Push to GitHub

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Add all changes
git add .

# Commit
git commit -m "Optimize Core Web Vitals and fix UI spacing issues"

# Push to master
git push origin master
```

## Complete One-Liner Setup and Push

```bash
cd /Users/naveen/Documents/Geodesign/do_react && eval "$(ssh-agent -s)" && ssh-add ~/.ssh/naveenb_git && git remote set-url origin git@github.com:Naveenb90/GeoDesign.git && git add . && git commit -m "Optimize Core Web Vitals and fix UI spacing" && git push origin master
```

## Verify SSH Key is on GitHub

Your public key:
```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAN3SEorUKMhQuLAo+vf0BXp2yjDVgUhk7YQaQS7E5lD naveens2007@gmail.com
```

1. Go to: https://github.com/settings/keys
2. Check if this key is listed
3. If not, add it:
   ```bash
   # Copy your public key
   cat ~/.ssh/naveenb_git.pub | pbcopy
   ```
   Then paste it on GitHub → Settings → SSH and GPG keys → New SSH key

## Troubleshooting

### If "Permission denied" error:
```bash
# Make sure key is added to agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/naveenb_git

# Test again
ssh -T git@github.com
```

### If key not found:
```bash
# Check if key exists
ls -la ~/.ssh/naveenb_git

# If it doesn't exist, generate new key
ssh-keygen -t ed25519 -C "naveens2007@gmail.com" -f ~/.ssh/naveenb_git
```

### If "Could not resolve hostname":
```bash
# Check internet connection
ping github.com

# Try again
ssh -T git@github.com
```

### If key permissions are wrong:
```bash
# Fix permissions
chmod 600 ~/.ssh/naveenb_git
chmod 644 ~/.ssh/naveenb_git.pub
chmod 700 ~/.ssh
```

## Quick Reference Commands

```bash
# Setup SSH
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/naveenb_git

# Test connection
ssh -T git@github.com

# Push code
cd /Users/naveen/Documents/Geodesign/do_react
git add .
git commit -m "Your commit message"
git push origin master
```

## Make SSH Key Persistent (macOS)

To avoid adding key every time you open terminal:

```bash
# Add to SSH config
cat >> ~/.ssh/config << 'EOF'
Host github.com
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/naveenb_git
EOF

# Add key to keychain
ssh-add --apple-use-keychain ~/.ssh/naveenb_git
```
