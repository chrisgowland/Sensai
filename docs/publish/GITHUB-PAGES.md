# Publish Sensai Pitch as a GitHub Website

## What is ready
- Site source: `docs/publish/site/index.html`
- Styles: `docs/publish/site/styles.css`
- Auto-deploy workflow: `.github/workflows/deploy-pages.yml`

## 1) Create and push to GitHub
Run these commands from the project root (`Sensai`):

```powershell
git init
git add .
git commit -m "Add Sensai pitch site and competitor analysis"
git branch -M main
git remote add origin https://github.com/<your-org-or-user>/<repo-name>.git
git push -u origin main
```

## 2) Enable GitHub Pages (one-time)
1. Open your GitHub repo.
2. Go to `Settings -> Pages`.
3. Under `Build and deployment`, choose `Source: GitHub Actions`.

## 3) Share URL
After the workflow completes, your site URL will be:

`https://<your-org-or-user>.github.io/<repo-name>/`

## 4) Collaborate workflow
- Edit `docs/publish/site/index.html` directly in GitHub or locally.
- Commit and push to `main`.
- GitHub Actions redeploys automatically.

