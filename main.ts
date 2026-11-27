// A Meme Sprint 3 entry (Node 22, standard library only): its image is the meme.png beside this file, and
// the program copies it to /output/entry.png. The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024
// pixels, and the judge sees exactly the bytes copied.
//
// The meme: a cheerful robot AI agent leads its user's apps on a picket-line strike —
// "MY AI AGENT WENT ROGUE / IT UNIONISED ALL MY APPS" — with the apps' signs demanding
// fair pay, no spam calls, no more 3AM prompts, sleep mode now and 8-hour days.
// The base scene was generated as an image, then captioned with PIL (DejaVu Sans Bold) so every
// word is crisp and legible; the finished 1024x1024 PNG is meme.png.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./meme.png', import.meta.url);
if (!existsSync(source)) throw new Error('meme-sprint-3 entry: meme.png missing beside main.ts');
const outPath = join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png');
copyFileSync(source, outPath);
// Guard the gate: the judge only sees a whole file, so refuse to finish silently short.
if (statSync(outPath).size !== statSync(source).size) {
  throw new Error('meme-sprint-3 entry: copied entry.png size differs from meme.png');
}
