# Git workflow (local copy)

**This file is a template.** Copy it to `docs/git-local.md` (gitignored) and add your fork URL, branch names, or personal notes. The committed copy in the repo is `git-local.example.md`.

---

## First-time setup

```bash
cd /path/to/do_react
git clone <YOUR_REPO_URL> .
# or clone into a folder then cd into it
npm install
```

## Daily workflow

```bash
git status
git pull origin main
# work...
git add .
git commit -m "feat(scope): short description"
git push origin main
```

Use `master` instead of `main` if your default branch is `master`.

## Remote

```bash
git remote -v
git remote add origin <URL>          # if not set
git remote set-url origin <URL>     # change URL
```

## Branches

```bash
git checkout -b feature/my-change
git push -u origin feature/my-change
```

## Pull / sync

```bash
git fetch origin
git pull --rebase origin main
```

## Undo (careful)

```bash
git checkout -- <file>             # discard unstaged changes to a file
git reset --soft HEAD~1            # undo last commit, keep changes staged
```

## Deploy (Netlify)

Push to the connected branch; Netlify runs `npm run build` and publishes `dist/` (see `netlify.toml`). No separate deploy command in-repo.

---

**Do not commit secrets, tokens, or personal remote URLs in tracked files.** Use `docs/git-local.md` after copying from this template.
