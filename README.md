# Erdenebayar Uilstuguldur Portfolio

Static personal portfolio website ready for GitHub Pages.

## Local Preview

```powershell
python -m http.server 5177 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:5177/
```

## Deploy With GitHub Pages

1. Create a new GitHub repository.
2. Upload or push all files from this folder to the repository root.
3. Go to repository `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `GitHub Actions`.
5. Push to the `main` branch.
6. Wait for the `Deploy static portfolio to GitHub Pages` action to finish.

Your site will be available at:

```text
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/
```

## Files

- `index.html`: website structure and content.
- `styles.css`: responsive UI, animation, themes, print styles.
- `script.js`: language toggle, theme controls, palette picker, terminal typing, copy email, scroll reveal.
- `assets/`: hero image, avatar, and profile logos.
- `.nojekyll`: keeps GitHub Pages from processing the site with Jekyll.
