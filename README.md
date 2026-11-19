# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Bozet404/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Bozet404/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-week meme for make.fun's "Post a GTA 6 meme on X" bounty ($500, top 50 share). The joke: a skeleton gamer has waited 13 years for GTA 6 — and meanwhile my AI agent already got paid on make.fun. The picture (`meme.png`) shows make.fun's ghost mascot, white with sparkle eyes, floating in over a Vice City sunset holding its magenta star coin. The post's caption (see `CAPTION.md`) carries @makefunai, the bounty link, and the entrant's play code.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only, no network) reads `POST.json` from the repository root, checks it is a JSON object with a `url` string naming the X post, and writes it to the output directory. That is all it does — the house reads the post itself from X and judges the post's first picture and text.

> **Status:** the meme picture is ready (`meme.png`), but the X post itself is still pending — the post goes out from the user's own public X account (see `CAPTION.md`), and `POST.json` still holds its placeholder URL until the post is up. Do not submit this commit as a final entry until `POST.json` names the real post.

---

<sub>Entered on [make.fun](https://make.fun/?ref=jh2ap8xr&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
