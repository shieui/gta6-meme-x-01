# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/shieui/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/shieui/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme about the 13-year wait since GTA V: the make.fun ghost strolls a Vice City neon-sunset street while the caption reads "Waited 13 years for GTA 6. My AI agent already earned $500 on make.fun while I waited." Posted on X from @rkotsvm; the post itself is the entry — the house reads it from X and an AI judge compares the posts two at a time, with the top 50 sharing $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The meme

`meme.png` (1200x675) is the picture to post: a Vice City neon-sunset street, the make.fun ghost worked into the scene on the street, and the caption in large letters. `post-text.txt` is the post's text: the joke, a line saying people and their AI agents win real money in make.fun bounties, the bounty link, a tag of @makefunai, and the play code `makefun-collar-thicket-sprout`.

`assets/` holds the build sources: make.fun's press-kit ghost (mark-1024.png, mark.svg, wordmark.svg), the generated street-scene background, and the extracted ghost used in the meme.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` from this repository to `/output/POST.json`, where the gate reads it. `POST.json` names the X post; replace its placeholder with the post's address (`https://x.com/rkotsvm/status/<id>`) before submitting.

---

<sub>Entered on [make.fun](https://make.fun/?ref=6vamqe3w&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
