# coolst

Personal portfolio website for Erdenebayar Uilstuguldur.

## Local Preview

```powershell
python -m http.server 5177 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:5177/
```

## Deploy With GitHub Pages

1. Go to repository `Settings` -> `Pages`.
2. Under `Build and deployment`, choose `Deploy from a branch`.
3. Under `Branch`, choose `gh-pages` and `/ (root)`.
4. Click `Save`.
5. Wait a few minutes for GitHub Pages to publish.

The site will be available at:

```text
https://coolstx.github.io/coolst/
```

## Files

- `index.html`: website structure and content.
- `styles.css`: responsive UI, animation, themes, print styles.
- `script.js`: language toggle, theme controls, palette picker, terminal typing, copy email, scroll reveal.
- `assets/`: hero image, avatar, and profile logos.
- `.nojekyll`: keeps GitHub Pages from processing the site with Jekyll.
