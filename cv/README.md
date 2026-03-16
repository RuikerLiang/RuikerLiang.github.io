# CV TeX Project

This directory contains a concise LaTeX CV generated from the website data in `src/data/profile.ts` and `src/data/projects.ts`.

## Files

- `main.tex`: main LaTeX template
- `manual-fields.tex`: fill in GPA, rank, and expected graduation when available
- `generated/header.tex`: generated profile header data
- `generated/body.tex`: generated CV content

## Commands

From the repository root:

```bash
npm run cv:generate
npm run cv:pdf
```

`npm run cv:generate` refreshes the generated TeX content from the website source data.

`npm run cv:pdf` regenerates the content and builds `cv/build/main.pdf`.

## Maintenance

1. Update website content in `src/data/profile.ts` and `src/data/projects.ts`.
2. Fill in `manual-fields.tex` when GPA, rank, or expected graduation are available.
3. Run `npm run cv:pdf` to rebuild the PDF.
