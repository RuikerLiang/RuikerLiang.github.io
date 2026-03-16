import { mkdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { generateCv } from './generate-cv.mjs';

const scriptPath = fileURLToPath(import.meta.url);
const scriptDir = path.dirname(scriptPath);
const repoRoot = path.resolve(scriptDir, '..');
const cvDir = path.join(repoRoot, 'cv');
const texmfVarDir = path.join(cvDir, 'build', '.texmf-var');
const varTexFontsDir = path.join(cvDir, 'build', '.texfonts');

generateCv();
mkdirSync(texmfVarDir, { recursive: true });
mkdirSync(varTexFontsDir, { recursive: true });

const result = spawnSync(
  'latexmk',
  ['-pdf', '-interaction=nonstopmode', '-halt-on-error', '-outdir=build', 'main.tex'],
  {
    cwd: cvDir,
    env: {
      ...process.env,
      TEXMFVAR: texmfVarDir,
      VARTEXFONTS: varTexFontsDir,
    },
    stdio: 'inherit',
  }
);

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}
