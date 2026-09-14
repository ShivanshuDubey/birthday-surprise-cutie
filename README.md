# Birthday Surprise 💕

A six-screen interactive birthday website:

1. **The Door** — locked until a date/time you set. Early taps show messages in order (not random): text on top, a gif below — either can be left out, and it adapts (text only, gif only, or both).
2. **Balloon → Teddy** — tap the balloon until it pops with a big animated "HAPPY BIRTHDAY" burst and ribbon/confetti fireworks, then a balloon-teddy-gif stack (connected by candy-striped hanging ribbons) appears and floats upward off-screen when she continues.
3. **The Question** — a big "Are You Excited To Marry Me?" screen. For the first 6 taps, **Yes** dodges her cursor (kept clear of **No** so they never overlap) while **No** shows a loving/funny reply, in order, with its own gif underneath. On the 7th round, it flips: **No** starts dodging and **Yes** becomes tappable — tapping it triggers confetti, ribbons, and a celebration gif (shown in order too).
4. **Catch the Hearts** — 20-second mini game, with a "Skip this game" link if she'd rather move on, and a "Play Again" button once it ends.
5. **Memory Lane** — a swipeable/tappable stack of polaroid-style photos. Each photo is cropped to fit its frame, so photos of any size or shape display cleanly without stretching.
6. **The Cake** — a detailed layered cake (sprinkles, drip icing, cherry on top, plate) with 3 glowing candles that puff smoke and vanish from the row when blown out, then the letter reveals itself with a typewriter effect, confetti, ribbons, and a closing gif.

Ribbons and confetti are clipped to the actual visible screen (recalculated live, not just a CSS `vh` guess), so they reliably disappear right at the screen edge instead of lingering while she scrolls.

It's plain HTML/CSS/JS — no build step, no server, no accounts.

## 1. Personalize it

Open **script.js** and edit the `birthdayConfig` object at the very
top of the file:

- `herName`, `myName`, `birthday`, `relationshipStart`
- `unlockDateTime` — the exact moment (format `"YYYY-MM-DDTHH:MM:SS"`) the site unlocks
- `lockedMessages` — array of `{ text, gif }` entries shown in order on early taps (loops back to the start if she taps more times than there are entries). Leave `text` or `gif` as `""` to show just the other one.
- `balloonPopClicks` — how many taps it takes to pop the balloon
- `revealGif` — the gif that hangs at the bottom of the balloon-teddy stack
- `proposalQuestion` — the exact wording shown on screen 3
- `noMessages` — `{ text, gif }` entries shown each time she taps "No", in order — add as many as you like, it loops if she taps more than 6 times
- `proposalSuccessGifs` — gifs shown in order after she taps "Yes"
- `photos` — file paths + captions for the memory stack
- `candleCount` — how many candles appear on the cake (defaults to 3)
- `letter` — each array entry is one paragraph of the final letter
- `psLine` — the closing P.S.
- `finalGif` — the gif shown at the very end, under the letter
- `music` — path to your song file

You don't need to touch `index.html` or `style.css` unless you want
to change the design itself.

## 2. Add your photos, gifs, and song

Put your files in these folders using the exact names referenced in
`birthdayConfig` (or update the paths in the config to match your
own filenames):

```
images/her-photo.jpg
images/photo1.jpg ... photo4.jpg   (any size/aspect ratio works)
images/gifs/locked-1.gif ... locked-12.gif
images/gifs/reveal.gif
images/gifs/no-1.gif ... no-8.gif
images/gifs/yes-1.gif ... yes-5.gif
images/gifs/final.gif
audio/our-song.mp3
```

If any file is missing, the site still works — photos and gifs fall
back gracefully (they just don't show), and the music button quietly
does nothing.

## 3. Preview it

Open `index.html` directly in a browser. Screen 1 is time-locked to
`unlockDateTime` — to preview the rest of the site before then,
temporarily set `unlockDateTime` to a date in the past, click
through, then set it back before sending the real link.

## 4. Deploy it for free

**Netlify (drag-and-drop, easiest):**
1. Go to https://app.netlify.com/drop
2. Drag the whole `birthday-surprise` folder onto the page.
3. You'll get a live link in seconds — share that.

**Vercel:**
1. Go to https://vercel.com/new
2. Import the folder as a project (or drag-and-drop, if offered).
3. Deploy — no configuration needed, it's a static site.

**GitHub Pages:**
1. Create a new GitHub repo and push this folder's contents to it.
2. In the repo, go to Settings → Pages.
3. Set the source branch to `main` (or `master`) and folder to `/root`.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

No API keys, no database, no login required anywhere in this project.
