# How to Push from Cursor

## Terminal (in Cursor)

1. Open Terminal: **View → Terminal** or `` Ctrl+` `` (backtick)
2. Run:

```bash
cd /Users/naveen/Documents/Geodesign/do_react
git add .
git commit -m "Your message"
git push origin master
```

## If Using SSH (run once per session if needed)

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/naveenb_git
```

Then push:

```bash
git push origin master
```

## Source Control Panel

1. Click the **branch icon** in the left sidebar (or **Ctrl+Shift+G** / **Cmd+Shift+G**)
2. Click **+** next to "Changes" to stage all
3. Type commit message, click **✓** to commit
4. Click **...** → **Push** (or the sync icon)

## One-Liner

```bash
cd /Users/naveen/Documents/Geodesign/do_react && git add . && git commit -m "Update" && git push origin master
```
