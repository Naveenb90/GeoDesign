# SSH Push Commands

## Setup SSH (First Time or If Not Working)

```bash
# Start ssh-agent
eval "$(ssh-agent -s)"

# Add your SSH key
ssh-add ~/.ssh/naveenb_git

# Test connection
ssh -T git@github.com
```

## Verify Remote is Using SSH

```bash
cd /Users/naveen/Documents/Geodesign/do_react
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

## Push Commands

### Standard Push
```bash
cd /Users/naveen/Documents/Geodesign/do_react
git add .
git commit -m "Optimize Core Web Vitals, fix UI spacing, and clean up project files"
git push origin master
```

### One-Liner (Setup + Push)
```bash
cd /Users/naveen/Documents/Geodesign/do_react && eval "$(ssh-agent -s)" && ssh-add ~/.ssh/naveenb_git && git add . && git commit -m "Optimize Core Web Vitals, fix UI spacing, and clean up project files" && git push origin master
```

### Push to Current Branch
```bash
cd /Users/naveen/Documents/Geodesign/do_react
git add .
git commit -m "Your commit message"
git push origin $(git branch --show-current)
```

## Make SSH Persistent (macOS)

```bash
# Create SSH config
cat > ~/.ssh/config << 'EOF'
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/naveenb_git
  AddKeysToAgent yes
  UseKeychain yes
EOF

# Add key to keychain
ssh-add --apple-use-keychain ~/.ssh/naveenb_git
```
