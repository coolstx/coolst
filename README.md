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
2. Under `Build and deployment`, choose `GitHub Actions`.
3. Push to the `main` branch.
4. Wait for the `Deploy static portfolio to GitHub Pages` action to finish.

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
