# Academic Homepage (Astro + TypeScript + Tailwind)

A lightweight, static, and maintainable personal academic homepage for graduate school / PhD / RA / summer research applications.

## Tech Stack

- Astro
- TypeScript
- Tailwind CSS
- Pure static output (no backend, no database)

## Project Structure

```text
.
├─ astro.config.mjs
├─ package.json
├─ postcss.config.cjs
├─ tailwind.config.mjs
├─ tsconfig.json
├─ public/
│  ├─ cv.pdf
│  ├─ favicon.svg
│  └─ og-cover.svg
└─ src/
   ├─ components/
   │  ├─ ContactList.astro
   │  ├─ Footer.astro
   │  ├─ Navbar.astro
   │  ├─ NewsList.astro
   │  ├─ ProfileHero.astro
   │  ├─ ProjectCard.astro
   │  ├─ PublicationItem.astro
   │  ├─ ResearchCard.astro
   │  └─ SectionTitle.astro
   ├─ data/
   │  ├─ news.ts
   │  ├─ profile.ts
   │  ├─ projects.ts
   │  └─ publications.ts
   ├─ layouts/
   │  └─ Layout.astro
   ├─ pages/
   │  ├─ about.astro
   │  ├─ contact.astro
   │  ├─ cv.astro
   │  ├─ index.astro
   │  ├─ projects.astro
   │  ├─ publications.astro
   │  └─ research.astro
   ├─ styles/
   │  └─ global.css
   └─ env.d.ts
```

## Content Maintenance

Edit only these files to update your profile content:

- `src/data/profile.ts`
- `src/data/projects.ts`
- `src/data/publications.ts`
- `src/data/news.ts`

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

Production files are generated in `dist/`.

## Deploy to GitHub Pages

### Option A: GitHub Actions (Recommended)

1. Push this project to GitHub.
2. In repository settings, open **Pages** and choose **GitHub Actions** as the source.
3. This step is mandatory before the first successful workflow run. If it is not enabled yet, `actions/configure-pages` will fail with a "not enabled and configured to build using GitHub Actions" error.
4. This repository already includes [deploy.yml](.github/workflows/deploy.yml), which will:
   - install dependencies
   - build the Astro site
   - deploy `dist/` to GitHub Pages automatically on every push to `main`
5. This workflow is configured for this repository with:
   - `PUBLIC_SITE_URL=https://ruikerliang.github.io`
   - `PUBLIC_BASE_PATH=/`

### Option B: Manual Deploy

1. Build locally: `PUBLIC_SITE_URL=https://ruikerliang.github.io PUBLIC_BASE_PATH=/ npm run build`
2. Upload `dist/` to your Pages branch / hosting target.
3. Keep the same environment variables if you want canonical links and static asset paths to match the deployed site.

## Notes

- `public/cv.pdf` is currently a placeholder PDF. Replace it with your real CV file.
- Current Pages site is configured with `PUBLIC_SITE_URL=https://ruikerliang.github.io` and `PUBLIC_BASE_PATH=/`.
- The site is fully static and suitable for fast deployment and maintenance.
