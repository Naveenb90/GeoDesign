# Fix: "src refspec main does not match any" Error

## Problem
You tried to push `main` branch but it doesn't exist locally yet.

## Solution: Create Main Branch First

### Step-by-Step Fix

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# 1. Make sure you're on develop and it's up to date
git checkout develop
git pull origin develop

# 2. Create main branch from develop
git checkout -b main

# 3. Now push main to remote (this will create it on remote)
git push -u origin main
```

### One-Liner Fix

```bash
cd /Users/naveen/Documents/Geodesign/do_react && git checkout develop && git pull origin develop && git checkout -b main && git push -u origin main
```

## Alternative: If You Want Main to Match Remote Master

If `master` branch exists on remote and you want `main` to be the same:

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Fetch all branches
git fetch origin

# Create main from remote master (if master exists)
git checkout -b main origin/master

# Push main to remote
git push -u origin main
```

## After Creating Main, Merge Develop

Once `main` branch exists:

```bash
# You're already on main after creating it
# Merge develop into main
git merge develop

# Push merged main
git push origin main
```

## Complete Workflow

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# 1. Update develop
git checkout develop
git pull origin develop

# 2. Create main from develop
git checkout -b main

# 3. Push main to remote (creates it on GitHub)
git push -u origin main

# 4. Merge develop into main
git merge develop

# 5. Push merged main
git push origin main
```
