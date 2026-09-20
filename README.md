# Abhishek Dhaulakhandi — AI/ML Portfolio

A responsive, data-driven personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide. It is designed to deploy automatically to GitHub Pages.

## How to Edit My Portfolio

Most content lives in one simple file: [src/data/portfolio.js](src/data/portfolio.js).

Open it and change the values near the top to update your name, title, biography, education, social links, experience, projects, skills, and research interests. The comments identify the main fields.

### Common edits

- **Change email, GitHub, or LinkedIn:** edit `social.email`, `social.github`, and `social.linkedin`. Replace all placeholder values before publishing.
- **Change the profile photo:** put your image at `public/images/profile.jpg`. The site automatically uses it; otherwise it displays the “Add your photo here” interface. A square, well-lit image works best.
- **Add a project:** copy an object in the `projects` array, update its text and technologies, then optionally set `image`, `github`, and `demo`. Empty GitHub/demo fields intentionally hide their buttons.
- **Add experience:** copy an object in the `experience` array. The timeline adds it automatically.
- **Update education:** change the `education` object.
- **Add skills:** edit the arrays inside `skills`; no proficiency percentages are required.

You generally should not need to edit the React components for content updates.

## Local development

```bash
npm install
npm run dev
```

Vite prints a local URL, usually `http://localhost:5173`.

## Production build

```bash
npm run build
```

The static, deployable site is generated in `dist/`. Preview it locally with:

```bash
npm run preview
```

## Contact form / Google Sheets

The form posts to a configurable Google Apps Script endpoint, not a backend. Follow the complete guide in [GOOGLE_SHEETS_SETUP.md](GOOGLE_SHEETS_SETUP.md).

Locally, create `.env` from `.env.example` and insert your endpoint URL. Never add credentials, API keys, or service-account files to this project.

## GitHub Pages deployment

1. Create a new GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. The included workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds and deploys automatically every time `main` receives a push.
5. Wait for the **Deploy portfolio to GitHub Pages** workflow to finish. The live site URL appears in its deployment summary and under **Settings → Pages**.

`vite.config.js` automatically uses the repository name as the Vite base path during GitHub Actions builds, so assets work on standard project Pages URLs such as `https://username.github.io/repository-name/`.

### Optional: contact endpoint in GitHub Actions

Add `VITE_GOOGLE_APPS_SCRIPT_URL` as a repository Actions secret. The included workflow already reads it at build time, without committing a local `.env` file.

## Project structure

```text
src/
  components/       reusable navigation, background, cursor, footer
  data/             one editable portfolio content file
  sections/         page sections
  styles/           global visual system and responsive rules
  App.jsx
  main.jsx
public/images/      place profile.jpg and optional project images here
```

## Accessibility and performance

The site uses semantic sections, labelled controls, alt text, responsive layouts, lightweight canvas particles, lazy project images, and `prefers-reduced-motion` support. Animations are intentionally restrained and have reduced-motion fallbacks.
