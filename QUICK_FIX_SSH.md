# Quick Fix: SSH Authentication Error

## Immediate Solution: Switch to HTTPS

This is the fastest way to push your code right now:

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Change remote from SSH to HTTPS
git remote set-url origin https://github.com/Naveenb90/GeoDesign.git

# Verify the change
git remote -v

# Now push (will prompt for credentials)
git add .
git commit -m "Optimize Core Web Vitals and fix UI spacing"
git push origin master
```

**When prompted:**
- **Username**: `Naveenb90`
- **Password**: Use a GitHub Personal Access Token (not your GitHub password)

### Get Personal Access Token:
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name it: "GeoDesign Push"
4. Select scope: `repo` (check the box)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again)
7. Use this token as your password when pushing

---

## Alternative: Fix SSH (If You Prefer SSH)

### Step 1: Check if Private Key Exists
```bash
ls -la ~/.ssh/naveenb_git
```

If it doesn't exist, you need to generate a new key pair.

### Step 2: Start SSH Agent and Add Key
```bash
# Start ssh-agent
eval "$(ssh-agent -s)"

# Add your key
ssh-add ~/.ssh/naveenb_git

# Test connection
ssh -T git@github.com
```

### Step 3: Verify Key is on GitHub
1. Get your public key:
   ```bash
   cat ~/.ssh/naveenb_git.pub
   ```
2. Go to: https://github.com/settings/keys
3. Check if this key is listed
4. If not, click "New SSH key" and add it

### Step 4: Create SSH Config (If Needed)
```bash
# Create/edit SSH config
nano ~/.ssh/config

# Add this content:
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/naveenb_git
  AddKeysToAgent yes
  UseKeychain yes

# Save and exit (Ctrl+X, then Y, then Enter)
```

### Step 5: Test and Push
```bash
# Test connection
ssh -T git@github.com

# If successful, push
cd /Users/naveen/Documents/Geodesign/do_react
git push origin master
```

---

## Recommended: Use HTTPS (Easiest)

HTTPS is simpler and works immediately. Just switch the remote URL and use a Personal Access Token.

```bash
cd /Users/naveen/Documents/Geodesign/do_react
git remote set-url origin https://github.com/Naveenb90/GeoDesign.git
git push origin master
```
