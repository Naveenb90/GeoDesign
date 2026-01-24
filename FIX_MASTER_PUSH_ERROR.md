# Fix: "non-fast-forward" Error on Master Branch

## Problem
```
! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'github.com:Naveenb90/GeoDesign.git'
```

The remote `master` branch has commits that your local `master` doesn't have.

## Solution Options

### Option 1: Pull and Merge First (Recommended)

This integrates remote changes with your local changes:

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Make sure you're on master
git checkout master

# Fetch and pull remote master
git fetch origin master
git pull origin master --no-rebase

# If there are merge conflicts, resolve them:
# 1. Fix conflicts in files
# 2. git add .
# 3. git commit -m "Merge remote master"

# Now push
git push origin master
```

### Option 2: Pull with Rebase (Cleaner History)

This puts your commits on top of remote commits:

```bash
cd /Users/naveen/Documents/Geodesign/do_react

git checkout master
git pull origin master --rebase

# If conflicts occur, resolve them, then:
# git add .
# git rebase --continue

# Push
git push origin master
```

### Option 3: Force Push (⚠️ Use Only If You Want to Overwrite Remote)

**WARNING:** This will overwrite the remote master branch. Only use if:
- The remote has old/unwanted content
- You're sure you want to replace everything on remote

```bash
cd /Users/naveen/Documents/Geodesign/do_react

git checkout master

# Force push (overwrites remote)
git push -f origin master

# Or safer option (fails if someone else pushed)
git push --force-with-lease origin master
```

### Option 4: Check What's on Remote First

Before deciding, see what's different:

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Fetch remote
git fetch origin master

# See commits on remote that you don't have
git log HEAD..origin/master --oneline

# See commits you have that remote doesn't
git log origin/master..HEAD --oneline

# Compare branches visually
git log --oneline --graph --all --decorate -10
```

## Recommended Steps

1. **First, check what's on remote:**
   ```bash
   cd /Users/naveen/Documents/Geodesign/do_react
   git fetch origin master
   git log origin/master --oneline -5
   ```

2. **If remote has important content, pull and merge:**
   ```bash
   git pull origin master --no-rebase
   git push origin master
   ```

3. **If remote has old/unwanted content, force push:**
   ```bash
   git push --force-with-lease origin master
   ```

## Quick Fix (Most Common)

If you just want to push your do_react files and overwrite what's on remote:

```bash
cd /Users/naveen/Documents/Geodesign/do_react
git checkout master
git push --force-with-lease origin master
```

## Alternative: Use Main Branch Instead

Since you have `main` branch, you might want to use that instead:

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Switch to main
git checkout main

# Merge develop into main (if needed)
git merge develop

# Push main
git push origin main
```
