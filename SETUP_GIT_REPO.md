# Setup do_react as Separate Git Repository

## Option 1: Initialize New Git Repo in do_react (Recommended)

This makes `do_react` its own git repository, completely separate from the parent folder.

```bash
# Navigate to do_react folder
cd /Users/naveen/Documents/Geodesign/do_react

# Initialize new git repository (only tracks do_react folder)
git init

# Add remote repository
git remote add origin git@github.com:Naveenb90/GeoDesign.git

# Create and switch to develop branch
git checkout -b develop

# Add all files in do_react folder
git add .

# Commit
git commit -m "Initial commit: React app for GeoDesign"

# Push to develop branch
git push -u origin develop
```

## Option 2: Use Git Sparse-Checkout (Keep Parent Repo)

If you want to keep the parent repo but only track do_react files:

```bash
# Navigate to parent directory
cd /Users/naveen/Documents/Geodesign

# Enable sparse-checkout
git sparse-checkout init --cone

# Set sparse-checkout to only do_react folder
git sparse-checkout set do_react

# Add only do_react folder
git add do_react/

# Commit
git commit -m "Add do_react React app"

# Push to develop branch
git push origin develop
```

## Option 3: Use .gitignore in Parent to Exclude Everything Except do_react

```bash
# Navigate to parent directory
cd /Users/naveen/Documents/Geodesign

# Create/update .gitignore to exclude everything except do_react
cat > .gitignore << 'EOF'
# Ignore everything
/*

# Except do_react folder
!do_react/
!do_react/**

# But ignore node_modules and dist inside do_react
do_react/node_modules/
do_react/dist/
do_react/.DS_Store
EOF

# Add do_react folder
git add do_react/
git add .gitignore

# Commit
git commit -m "Track only do_react folder in repository"

# Push to develop branch
git push origin develop
```

## Recommended: Option 1 (Separate Repo)

This is the cleanest approach for CI/CD with Netlify.
