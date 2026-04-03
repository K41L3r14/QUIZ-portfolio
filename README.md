# React Portfolio (Single Page)

Mobile-first portfolio website built with React + Tailwind CSS.

## Features

- Single-page layout: Hero, About, Projects, Skills, Contact
- Informative section content (no placeholder text)
- Interactive cards and buttons with hover lift effects
- Responsive design for phone, tablet, and desktop

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Deploy to GitHub Pages

1. Create a GitHub repo and push this project.
2. In `vite.config.js`, set `base: "/<your-repo-name>/"`.
3. Install deploy package:
```bash
npm install --save-dev gh-pages
```
4. Add scripts in `package.json`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
5. Run:
```bash
npm run deploy
```
6. In GitHub repo settings, set Pages source to `gh-pages` branch.
# QUIZ-portfolio
