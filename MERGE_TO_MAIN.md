# Merge Develop Branch to Main Branch

## Step-by-Step Commands

### Step 1: Check if Main Branch Exists

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Check all branches (local and remote)
git branch -a

# Fetch latest from remote
git fetch origin
```

### Step 2: Create Main Branch (if it doesn't exist)

**Option A: Create main from develop (recommended if main doesn't exist)**

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Make sure develop is up to date
git checkout develop
git pull origin develop

# Create main branch from develop
git checkout -b main

# Push main branch to remote
git push -u origin main
```

**Option B: Create main from remote master (if master exists)**

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Fetch all branches
git fetch origin

# Create main from remote master
git checkout -b main origin/master

# Push main to remote
git push -u origin main
```

### Step 3: Merge Develop into Main

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Switch to main branch
git checkout main

# Make sure main is up to date (if it exists on remote)
git pull origin main

# Merge develop into main
git merge develop

# If there are conflicts, resolve them:
# 1. Fix conflicts in files
# 2. git add .
# 3. git commit -m "Merge develop into main"

# Push merged main to remote
git push origin main
```

### Step 4: Verify the Merge

```bash
# Check commit history
git log --oneline --graph --all --decorate -10

# Check current branch
git branch

# Verify files are merged
git status
```

## Complete Workflow (One Sequence)

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# 1. Update develop branch
git checkout develop
git pull origin develop

# 2. Create main branch from develop (if main doesn't exist)
git checkout -b main
git push -u origin main

# OR if main already exists, just switch to it
# git checkout main
# git pull origin main

# 3. Merge develop into main
git merge develop

# 4. Push to remote
git push origin main

# 5. Switch back to develop (optional)
git checkout develop
```

## Alternative: Merge via Pull Request (GitHub UI)

1. Go to GitHub: https://github.com/Naveenb90/GeoDesign
2. Click "Pull requests" → "New pull request"
3. Base: `main` ← Compare: `develop`
4. Review changes and click "Create pull request"
5. Merge the pull request on GitHub
6. Pull the updated main branch locally:
   ```bash
   git checkout main
   git pull origin main
   ```

## Quick One-Liner (If Main Doesn't Exist)

```bash
cd /Users/naveen/Documents/Geodesign/do_react && git checkout develop && git pull origin develop && git checkout -b main && git push -u origin main && git merge develop && git push origin main
```

## Troubleshooting

### If merge conflicts occur:

```bash
# See which files have conflicts
git status

# Open files and resolve conflicts manually
# Look for <<<<<<< HEAD markers

# After resolving conflicts:
git add .
git commit -m "Merge develop into main - resolve conflicts"
git push origin main
```

### If you want to abort the merge:

```bash
git merge --abort
```

### To see differences before merging:

```bash
git diff main..develop
```
