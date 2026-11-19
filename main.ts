// gta6-meme-x-01 entry (Node 22, standard library only): it copies POST.json
// from the repository root to /output/POST.json, where the gate reads it.
// That is all the program has to do. The entry is the post itself: the meme
// (meme.png) is posted on X from a public account with make.fun and the play
// code in its text, POST.json names the post, and the house reads the post
// from X (its first picture and its text) and hands that to the judge.
// Nothing this program writes about the post is judged.
//
// POST.json holds a placeholder address until the post is made; replace it
// with the post's address (https://x.com/<handle>/status/<id>) before you
// submit, or the gate refuses the entry.
//
// Before copying, the program validates POST.json: it must parse as JSON and
// carry a url that looks like an X post address, so a bad file fails here
// with a clear message instead of silently reaching the gate.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_PATH = join(BOT_DIR, 'POST.json');

const raw = readFileSync(POST_PATH, 'utf8');
let post: unknown;
try {
  post = JSON.parse(raw);
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
const url = (post as { url?: unknown } | null)?.url;
if (typeof url !== 'string' || !/^https?:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/\w+\/status\/\d+/.test(url)) {
  console.error('POST.json must carry a url like https://x.com/<handle>/status/<id>');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(POST_PATH, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`POST.json copied to ${OUTPUT_DIR} (post: ${url})`);
