# Setup All Branches to Point to do_react Folder

## Current Situation
- **Parent repo** (`/Users/naveen/Documents/Geodesign`): has `develop`, `test` branches
- **do_react repo** (`/Users/naveen/Documents/Geodesign/do_react`): has `develop`, `main`, `master` branches
- **Remote**: `git@github.com:Naveenb90/GeoDesign.git` has `master`, `develop`, `main`, `test`

## Goal
Make all branches (`master`, `develop`, `main`, `test`) work with `/Users/naveen/Documents/Geodesign/do_react` folder.

---

## Step 1: Setup do_react as Main Repository

```bash
# Navigate to do_react folder
cd /Users/naveen/Documents/Geodesign/do_react

# Fetch all remote branches
git fetch origin

# Check current branches
git branch -a
```

---

## Step 2: Create/Fetch All Branches in do_react

### Create/Fetch `test` branch (if it doesn't exist locally)

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Check if test branch exists on remote
git fetch origin test

# Create local test branch tracking remote
git checkout -b test origin/test

# If test branch doesn't exist on remote, create it from master
# git checkout -b test
# git push -u origin test
```

### Verify All Branches Exist

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# List all branches
git branch -a

# You should see:
# - master (local)
# - develop (local)
# - main (local)
# - test (local or remote)
```

---

## Step 3: Update All Branches with Latest Code

### Update `master` branch (main production branch)

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Switch to master
git checkout master

# Pull latest from remote
git pull origin master

# Make sure all files are committed
git add .
git commit -m "Update master with latest React app code" || echo "Nothing to commit"

# Push to remote
git push origin master
```

### Update `develop` branch

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Switch to develop
git checkout develop

# Pull latest from remote (if it exists)
git pull origin develop --allow-unrelated-histories 2>/dev/null || echo "No remote develop or unrelated histories"

# Merge master into develop (to sync)
git merge master

# If conflicts, resolve them, then:
# git add .
# git commit -m "Merge master into develop"

# Push to remote
git push origin develop
```

### Update `main` branch

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Switch to main
git checkout main

# Pull latest from remote (if it exists)
git pull origin main --allow-unrelated-histories 2>/dev/null || echo "No remote main"

# Merge master into main (to sync)
git merge master

# Push to remote
git push origin main
```

### Update `test` branch

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Switch to test
git checkout test

# Pull latest from remote (if it exists)
git pull origin test --allow-unrelated-histories 2>/dev/null || echo "No remote test"

# Merge master into test (to sync)
git merge master

# Push to remote
git push origin test
```

---

## Step 4: Complete Setup Script

Run this complete script to set up all branches:

```bash
#!/bin/bash

# Navigate to do_react
cd /Users/naveen/Documents/Geodesign/do_react

# Fetch all remote branches
git fetch origin

# Function to setup branch
setup_branch() {
    local branch=$1
    echo "Setting up branch: $branch"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$branch; then
        git checkout $branch
    else
        # Check if branch exists on remote
        if git show-ref --verify --quiet refs/remotes/origin/$branch; then
            git checkout -b $branch origin/$branch
        else
            # Create new branch from master
            git checkout master
            git checkout -b $branch
        fi
    fi
    
    # Merge master to sync (if not already on master)
    if [ "$branch" != "master" ]; then
        git merge master --no-edit || echo "Merge conflicts - resolve manually"
    fi
    
    # Push to remote
    git push -u origin $branch 2>/dev/null || git push origin $branch
}

# Setup all branches
setup_branch "master"
setup_branch "develop"
setup_branch "main"
setup_branch "test"

# Return to master
git checkout master

echo "All branches are now set up!"
```

---

## Step 5: Daily Push Instructions

### Push Latest Code to Any Branch

```bash
# Always work from do_react folder
cd /Users/naveen/Documents/Geodesign/do_react

# 1. Check current branch
git branch

# 2. Switch to your working branch (e.g., develop)
git checkout develop

# 3. Pull latest changes (if working with team)
git pull origin develop

# 4. Add your changes
git add .

# 5. Commit
git commit -m "Your commit message"

# 6. Push
git push origin develop
```

### Push to Multiple Branches

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Make changes and commit on current branch
git add .
git commit -m "Update React app"

# Push to current branch
git push origin $(git branch --show-current)

# If you want to sync to other branches:
git checkout develop
git merge master
git push origin develop

git checkout main
git merge master
git push origin main

git checkout test
git merge master
git push origin test

# Return to master
git checkout master
```

---

## Quick Reference Commands

### Switch Between Branches
```bash
cd /Users/naveen/Documents/Geodesign/do_react
git checkout master    # Switch to master
git checkout develop   # Switch to develop
git checkout main      # Switch to main
git checkout test      # Switch to test
```

### Push Current Branch
```bash
cd /Users/naveen/Documents/Geodesign/do_react
git add .
git commit -m "Your message"
git push origin $(git branch --show-current)
```

### Sync All Branches with Master
```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Update master first
git checkout master
git add .
git commit -m "Latest updates"
git push origin master

# Sync other branches
for branch in develop main test; do
    git checkout $branch
    git merge master
    git push origin $branch
done

git checkout master
```

---

## Important Notes

1. **Always work from `/Users/naveen/Documents/Geodesign/do_react` folder**
2. **All branches now track files in `do_react` folder only**
3. **Parent folder (`/Users/naveen/Documents/Geodesign`) is no longer used for git**
4. **Use `master` as your main production branch**
5. **Use `develop` for development work**
6. **Use `test` for testing**
7. **Use `main` as alternative production branch (if needed)**

---

## Troubleshooting

### If branch doesn't exist on remote:
```bash
git checkout -b branch-name
git push -u origin branch-name
```

### If you get "unrelated histories" error:
```bash
git pull origin branch-name --allow-unrelated-histories
```

### If you need to force push (use carefully):
```bash
git push --force-with-lease origin branch-name
```
