# A Story Called Srija — Chapter 18

A small interactive universe, built for one person's 18th birthday.
Static site: **HTML + CSS + vanilla JavaScript**. No build step, no backend, no dependencies.

---

## 1. Run it locally

Any static server works. Pick one:

```bash
# Python (already on most machines)
cd a-story-called-srija-18
python3 -m http.server 8000
# open http://localhost:8000

# or Node
npx serve .
```

> Opening `index.html` directly by double-click mostly works, but audio and some
> browsers behave better over `http://`, so use a server if you can.

---

## 2. Where everything lives

```
a-story-called-srija-18/
├── index.html      structure only
├── style.css       design system + all visuals
├── script.js       content + behaviour
├── assets/
│   ├── images/
│   │   ├── srija/         her photos
│   │   ├── memories/      the two polaroids
│   │   └── decorations/   anything extra
│   └── music/             song-01.mp3 … song-06.mp3
└── README.md
```

**All words she reads are in one place**: the `CONTENT` object at the top of
`script.js`, marked with

```js
/* === EDIT SRIJA CONTENT HERE === */
```

Nothing below that object depends on the wording — rewrite freely.

---

## 3. Adding photos

1. Drop the file into `assets/images/memories/` (e.g. `memory-01.jpg`).
2. In `script.js` → `CONTENT.memories.cards`, the `photo` field holds the
   placeholder text. To use a real photo, replace the placeholder span in the
   polaroid renderer (marked with a comment in `Chapters.memories`) with:

```html
<img src="assets/images/memories/memory-01.jpg" alt="" class="polaroid__img">
```

3. The hidden 🎁 **Secret** section has the same swap point in `Chapters.secret`
   — an `<img>` or `<video>` both work there.

Square-ish images look best in the polaroid frames.

---

## 4. Adding music

1. Put your files in `assets/music/` as `song-01.mp3`, `song-02.mp3`, …
2. In `script.js` → `CONTENT.radio`, edit each track's `title`, `note` and `src`.
3. Categories (Happy Srija, 2 AM Srija, Reading Srija, Horror Night, For You)
   can hold as many tracks as you like — just add more objects to the array.

Music never autoplays. It starts only after she taps **Open Chapter 18** and
picks a track, and then keeps playing through the rest of the experience via the
small player at the bottom.

---

## 5. Editing the personal messages

| What                      | Where in `script.js`            |
|---------------------------|---------------------------------|
| Sunflower cards           | `CONTENT.herWorld.flowers`      |
| Book pages                | `CONTENT.herStory`              |
| The eye scene             | `CONTENT.firstLook`             |
| Memory descriptions       | `CONTENT.memories`              |
| Things I love about you   | `CONTENT.thingsILove`           |
| Map destinations          | `CONTENT.places` (`x`/`y` are % positions) |
| Letters / locked letters  | `CONTENT.letters`               |
| The 18 wishes             | `CONTENT.wishes` (keep exactly 18) |
| Future chapters           | `CONTENT.unwritten`             |
| Hidden surprise           | `CONTENT.secret`                |
| **The final letter**      | `CONTENT.finalLetter`           |

Anything still written as `[ADD … HERE]` renders as a soft placeholder — it
looks intentional, so the site is presentable even before you finish writing.

### Colours

All theming is CSS variables at the top of `style.css`:

```css
--ink    /* midnight black  */
--ivory  /* warm ivory      */
--sun    /* sunflower yellow*/
--rose   /* subtle romantic red */
```

---

## 6. The entrance

The site opens on a small date gate. It is **an experience, not security** — it
just makes the first moment feel like a door rather than a page. The expected
answer is checked as a numeric hash, so it isn't sitting in plain text anywhere.

If you ever need to change it, replace the `KEY` constant in the `gate()` module
with the hash of your new `DDMMYYYY` string using the same `hash()` function
already defined there.

---

## 7. Deploying to GitHub Pages

```bash
cd a-story-called-srija-18
git init
git add .
git commit -m "Chapter 18"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

Then: **repo → Settings → Pages → Source: Deploy from a branch → `main` / `root` → Save.**

It goes live at `https://<you>.github.io/<repo>/` in a minute or two.

Tips:
- Keep file names lowercase — GitHub Pages is case-sensitive.
- Large audio files slow the first load; 3–4 MB per track is plenty.
- Add a `.nojekyll` file if you ever add folders starting with `_`.

---

## 8. Notes

- Mobile-first: laid out for 360 / 390 / 430 px screens, scales up to desktop.
- Nothing depends on hover; every interaction is tap-friendly with 44 px+ targets.
- Respects `prefers-reduced-motion`.
- No analytics, no tracking, no external APIs — only Google Fonts.
- Works offline once fonts are cached (or swap in local fonts if you prefer).

Made to be read slowly. 🌻
