// gta6-meme-x-01 entry program (Node 22, standard library only, no network).
//
// The entry itself is the X post: a GTA 6 meme whose picture shows make.fun's
// ghost mascot holding its magenta star coin, posted from a public X account
// with make.fun / @makefunai and the entrant's play code in its text.
// POST.json at the repository root names that post, and this program's only
// job is to hand POST.json to the grader: read it, check it is a JSON object
// carrying a url string, and write it out to the output directory.
//
// The house reads the post itself from X (first picture + text) and judges
// that. Nothing this program writes about the post is judged.
//
// Local run (outside the grader's container, where MAKEFUN_BOT_DIR and
// MAKEFUN_OUTPUT_DIR stand in for /bot and /output):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const POST_FILE = "POST.json";

function loadPost(): { url: string } {
  const raw = readFileSync(join(BOT_DIR, POST_FILE), "utf8");
  const parsed: unknown = JSON.parse(raw);
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new Error(`${POST_FILE} must hold a JSON object, not an array or scalar`);
  }
  const url = (parsed as Record<string, unknown>).url;
  if (typeof url !== "string" || url.length === 0) {
    throw new Error(`${POST_FILE} must hold a "url" string naming the X post`);
  }
  return { url };
}

const post = loadPost();
if (!/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+/.test(post.url)) {
  console.error(
    `Warning: ${post.url} does not look like an X post address ` +
      `(https://x.com/<handle>/status/<id>); the gate will refuse it. ` +
      `Update POST.json with the real post link before submitting.`,
  );
}
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, POST_FILE), JSON.stringify(post) + "\n", "utf8");
console.log(`Wrote ${POST_FILE} for ${post.url} to ${OUTPUT_DIR}`);
