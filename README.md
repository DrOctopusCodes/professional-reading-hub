# Professional Reading Hub

A lightweight GitHub Pages dashboard for a curated professional reading list.

## Deploy
1. Create a GitHub repository named `professional-reading-hub`.
2. Upload `index.html`, `styles.css`, `app.js`, and this README.
3. GitHub: **Settings → Pages → Deploy from a branch → main → / (root)**.
4. Your site will appear at `https://YOUR-USERNAME.github.io/professional-reading-hub/`.

## Update
Edit `app.js` to add/remove sources. The current version intentionally uses direct official links rather than scraping sites. A future version can add RSS/API aggregation for sources that expose feeds.


## Newsletter reader

The site now has an embedded **Latest newsletter posts** section. GitHub Actions checks Lenny's public RSS feed every 6 hours and writes the latest titles/summaries to `newsletter.json`.

The page shows the RSS-provided title/summary and a link to the full post. It does not copy or republish the full text of subscription/paywalled posts.
