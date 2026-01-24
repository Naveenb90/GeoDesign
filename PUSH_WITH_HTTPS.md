# Push to GitHub Using HTTPS

## ✅ Remote Already Changed to HTTPS

The remote has been changed from SSH to HTTPS. Now you can push using your GitHub credentials.

## Commands to Push

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Add all changes
git add .

# Commit
git commit -m "Optimize Core Web Vitals and fix UI spacing issues"

# Push (will prompt for credentials)
git push origin master
```

## When Prompted for Credentials

**Username:** `Naveenb90`

**Password:** Use a GitHub Personal Access Token (NOT your GitHub password)

### How to Get Personal Access Token:

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. **Name:** `GeoDesign Push` (or any name you like)
4. **Expiration:** Choose your preference (90 days, 1 year, or no expiration)
5. **Select scopes:** Check the box for **`repo`** (this gives full repository access)
6. Click **"Generate token"** at the bottom
7. **IMPORTANT:** Copy the token immediately - you won't see it again!
8. Use this token as your password when pushing

## One-Liner Push Command

```bash
cd /Users/naveen/Documents/Geodesign/do_react && git add . && git commit -m "Optimize Core Web Vitals and fix UI spacing" && git push origin master
```

## Save Credentials (Optional)

To avoid entering credentials every time:

```bash
# Configure Git to use credential helper
git config --global credential.helper osxkeychain

# Then push (will save credentials in macOS Keychain)
git push origin master
```

## Verify Remote is HTTPS

```bash
git remote -v
```

Should show:
```
origin  https://github.com/Naveenb90/GeoDesign.git (fetch)
origin  https://github.com/Naveenb90/GeoDesign.git (push)
```

## Troubleshooting

### If you get "Authentication failed"
- Make sure you're using a Personal Access Token, not your GitHub password
- Verify the token has `repo` scope selected
- Try generating a new token

### If you want to switch back to SSH later
```bash
git remote set-url origin git@github.com:Naveenb90/GeoDesign.git
```

But for now, HTTPS is the easiest solution!
