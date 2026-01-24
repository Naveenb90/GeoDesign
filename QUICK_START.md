# Quick Start - Setup All Branches

## 🚀 One-Command Setup

Run this to set up all branches to point to `do_react` folder:

```bash
cd /Users/naveen/Documents/Geodesign/do_react
./setup_branches.sh
```

Or manually:

```bash
cd /Users/naveen/Documents/Geodesign/do_react
bash setup_branches.sh
```

---

## 📋 Manual Setup (Step by Step)

### Step 1: Navigate to do_react
```bash
cd /Users/naveen/Documents/Geodesign/do_react
```

### Step 2: Fetch All Remote Branches
```bash
git fetch origin
```

### Step 3: Setup Each Branch

#### Master Branch
```bash
git checkout master
git pull origin master
git push origin master
```

#### Develop Branch
```bash
git checkout develop || git checkout -b develop origin/develop || git checkout -b develop
git merge master
git push origin develop
```

#### Main Branch
```bash
git checkout main || git checkout -b main origin/main || git checkout -b main
git merge master
git push origin main
```

#### Test Branch
```bash
git checkout test || git checkout -b test origin/test || git checkout -b test
git merge master
git push origin test
```

---

## 📤 Push Latest Code (Quick Reference)

### Push Current Branch
```bash
cd /Users/naveen/Documents/Geodesign/do_react
git add .
git commit -m "Your message"
git push origin $(git branch --show-current)
```

### Push to Specific Branch
```bash
cd /Users/naveen/Documents/Geodesign/do_react
git checkout master  # or develop, main, test
git add .
git commit -m "Your message"
git push origin master
```

### Push to All Branches
```bash
cd /Users/naveen/Documents/Geodesign/do_react
git checkout master && git add . && git commit -m "Update" && git push origin master
git checkout develop && git merge master && git push origin develop
git checkout main && git merge master && git push origin main
git checkout test && git merge master && git push origin test
git checkout master
```

---

## 📚 Documentation Files

- **`SETUP_ALL_BRANCHES.md`** - Detailed setup instructions
- **`PUSH_INSTRUCTIONS.md`** - Complete push guide
- **`QUICK_START.md`** - This file (quick reference)

---

## ✅ After Setup

All branches (`master`, `develop`, `main`, `test`) now work with:
```
/Users/naveen/Documents/Geodesign/do_react
```

**Always work from this folder for git operations!**
