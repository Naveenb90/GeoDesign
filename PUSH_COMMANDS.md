# Git Push Commands

## Quick Push (All Changes)

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Add all changes
git add .

# Commit with message
git commit -m "Optimize Core Web Vitals, fix UI spacing, and clean up project files"

# Push to master branch
git push origin master
```

## One-Liner Command

```bash
cd /Users/naveen/Documents/Geodesign/do_react && git add . && git commit -m "Optimize Core Web Vitals, fix UI spacing, and clean up project files" && git push origin master
```

## Step-by-Step (If You Want to Review First)

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Step 1: Check what will be committed
git status

# Step 2: Add all changes
git add .

# Step 3: Commit
git commit -m "Optimize Core Web Vitals, fix UI spacing, and clean up project files"

# Step 4: Push
git push origin master
```

## If Using SSH (After Setup)

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Setup SSH agent (if not already done)
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/naveenb_git

# Add, commit, and push
git add .
git commit -m "Optimize Core Web Vitals, fix UI spacing, and clean up project files"
git push origin master
```

## If Using HTTPS

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Make sure remote is HTTPS
git remote set-url origin https://github.com/Naveenb90/GeoDesign.git

# Add, commit, and push
git add .
git commit -m "Optimize Core Web Vitals, fix UI spacing, and clean up project files"
git push origin master
```

## Check Current Branch

```bash
git branch
```

## Push to Different Branch

```bash
# Push to develop branch
git push origin develop

# Push to current branch
git push origin $(git branch --show-current)
```

## Verify Before Pushing

```bash
# See what files changed
git status

# See what will be committed
git diff --cached

# See commit history
git log --oneline -5
```
