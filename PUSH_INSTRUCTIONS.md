# Push Instructions - Latest Codebase

## Quick Push Guide

### Always Work From This Folder:
```bash
cd /Users/naveen/Documents/Geodesign/do_react
```

---

## Standard Push Workflow

### 1. Check Current Status
```bash
cd /Users/naveen/Documents/Geodesign/do_react
git status
git branch  # See current branch
```

### 2. Add All Changes
```bash
git add .
```

### 3. Commit Changes
```bash
git commit -m "Your descriptive commit message"
```

### 4. Push to Current Branch
```bash
git push origin $(git branch --show-current)
```

---

## Push to Specific Branch

### Push to `master` (Production)
```bash
cd /Users/naveen/Documents/Geodesign/do_react
git checkout master
git add .
git commit -m "Update production code"
git push origin master
```

### Push to `develop` (Development)
```bash
cd /Users/naveen/Documents/Geodesign/do_react
git checkout develop
git add .
git commit -m "Development updates"
git push origin develop
```

### Push to `main` (Alternative Production)
```bash
cd /Users/naveen/Documents/Geodesign/do_react
git checkout main
git add .
git commit -m "Update main branch"
git push origin main
```

### Push to `test` (Testing)
```bash
cd /Users/naveen/Documents/Geodesign/do_react
git checkout test
git add .
git commit -m "Test updates"
git push origin test
```

---

## Push Latest Code to All Branches

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# 1. Update master first
git checkout master
git add .
git commit -m "Latest React app updates"
git push origin master

# 2. Sync develop with master
git checkout develop
git merge master
git push origin develop

# 3. Sync main with master
git checkout main
git merge master
git push origin main

# 4. Sync test with master
git checkout test
git merge master
git push origin test

# 5. Return to master
git checkout master
```

---

## One-Liner Push Commands

### Push Current Branch
```bash
cd /Users/naveen/Documents/Geodesign/do_react && git add . && git commit -m "Update code" && git push origin $(git branch --show-current)
```

### Push to Master
```bash
cd /Users/naveen/Documents/Geodesign/do_react && git checkout master && git add . && git commit -m "Update" && git push origin master
```

### Push to Develop
```bash
cd /Users/naveen/Documents/Geodesign/do_react && git checkout develop && git add . && git commit -m "Update" && git push origin develop
```

---

## If Remote Has New Commits (Pull First)

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# Switch to your branch
git checkout develop  # or master, main, test

# Pull latest changes
git pull origin develop

# If you get "unrelated histories" error:
git pull origin develop --allow-unrelated-histories

# If you get "non-fast-forward" error:
git pull origin develop --no-rebase

# Then add, commit, and push
git add .
git commit -m "Your message"
git push origin develop
```

---

## Force Push (Use Carefully)

Only use if you're sure you want to overwrite remote:

```bash
cd /Users/naveen/Documents/Geodesign/do_react
git checkout master
git add .
git commit -m "Force update"
git push --force-with-lease origin master
```

---

## Check What Will Be Pushed

```bash
cd /Users/naveen/Documents/Geodesign/do_react

# See uncommitted changes
git status

# See what will be pushed
git diff origin/$(git branch --show-current)

# See commit history
git log --oneline -5
```

---

## Common Scenarios

### Scenario 1: First Time Push
```bash
cd /Users/naveen/Documents/Geodesign/do_react
git checkout master
git add .
git commit -m "Initial commit"
git push -u origin master
```

### Scenario 2: Regular Update
```bash
cd /Users/naveen/Documents/Geodesign/do_react
git add .
git commit -m "Regular update"
git push origin $(git branch --show-current)
```

### Scenario 3: After Pulling Remote Changes
```bash
cd /Users/naveen/Documents/Geodesign/do_react
git pull origin develop
git add .
git commit -m "Merge and update"
git push origin develop
```

### Scenario 4: Sync All Branches
```bash
cd /Users/naveen/Documents/Geodesign/do_react
git checkout master && git add . && git commit -m "Update" && git push origin master
git checkout develop && git merge master && git push origin develop
git checkout main && git merge master && git push origin main
git checkout test && git merge master && git push origin test
git checkout master
```

---

## Branch Strategy

- **`master`**: Production/Stable code
- **`develop`**: Development/Feature work
- **`main`**: Alternative production branch
- **`test`**: Testing/Experimental code

---

## Remember

1. ✅ Always work from `/Users/naveen/Documents/Geodesign/do_react`
2. ✅ Check current branch: `git branch`
3. ✅ Pull before push if working with team: `git pull origin branch-name`
4. ✅ Commit before push: `git add . && git commit -m "message"`
5. ✅ Push to current branch: `git push origin $(git branch --show-current)`
