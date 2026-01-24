#!/bin/bash

# Setup All Branches to Point to do_react Folder
# This script consolidates all branches to work with /Users/naveen/Documents/Geodesign/do_react

echo "========================================="
echo "Setting up all branches for do_react"
echo "========================================="

# Navigate to do_react folder
cd /Users/naveen/Documents/Geodesign/do_react || exit 1

# Fetch all remote branches
echo ""
echo "Step 1: Fetching all remote branches..."
git fetch origin

# Function to setup branch
setup_branch() {
    local branch=$1
    echo ""
    echo "----------------------------------------"
    echo "Setting up branch: $branch"
    echo "----------------------------------------"
    
    # Check if branch exists locally
    if git show-ref --verify --quiet refs/heads/$branch; then
        echo "✓ Local branch '$branch' exists"
        git checkout $branch
    else
        # Check if branch exists on remote
        if git show-ref --verify --quiet refs/remotes/origin/$branch; then
            echo "✓ Creating local '$branch' from remote"
            git checkout -b $branch origin/$branch
        else
            # Create new branch from master
            echo "✓ Creating new branch '$branch' from master"
            git checkout master
            git checkout -b $branch
        fi
    fi
    
    # Merge master to sync (if not already on master)
    if [ "$branch" != "master" ]; then
        echo "Merging master into $branch..."
        git merge master --no-edit 2>/dev/null || echo "  (Merge conflicts may need manual resolution)"
    fi
    
    # Push to remote
    echo "Pushing $branch to remote..."
    git push -u origin $branch 2>/dev/null || git push origin $branch 2>/dev/null || echo "  (Push may need manual intervention)"
}

# Setup all branches
echo ""
echo "Step 2: Setting up all branches..."
setup_branch "master"
setup_branch "develop"
setup_branch "main"
setup_branch "test"

# Return to master
echo ""
echo "Step 3: Returning to master branch..."
git checkout master

echo ""
echo "========================================="
echo "Setup Complete!"
echo "========================================="
echo ""
echo "All branches are now configured to work with:"
echo "  /Users/naveen/Documents/Geodesign/do_react"
echo ""
echo "Available branches:"
git branch -a
echo ""
echo "Current branch:"
git branch --show-current
echo ""
echo "To push latest code, see: PUSH_INSTRUCTIONS.md"
echo ""
