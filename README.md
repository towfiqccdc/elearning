# CCDC HSE Learning Portal (Static Site)

A Coursera-style, topic-based e-learning site — pure HTML/CSS/JS, no backend,
no install required. Open it directly in a browser or host it anywhere that
serves static files.

## How to use it

**Important: this site needs to be run through a local web server — not opened
by double-clicking `index.html`.** The slide-deck viewer relies on a browser
feature (JavaScript modules) that browsers block for security reasons when
a page is opened directly from disk (`file://...`). Everything else would
mostly work either way, but to keep it simple, always run it the same way:

```bash
python3 -m http.server 8080
```

Run that from this folder, then open **http://localhost:8080** in your
browser. If you don't have Python, any other "static file server" tool
works the same way (e.g. the VS Code "Live Server" extension, or
`npx serve`).

## How to add or edit courses

Everything about course content lives in **one file**:

```
js/courses-data.js
```

Each course is one JavaScript object in the `COURSES` array. Copy an
existing course block and edit it — title, category, level, description,
and a list of `modules`, each with a list of `lessons`.

### Adding a video to a lesson

Set `"type": "video"` and fill in the `video` field. Leave it as `""`
for a "coming soon" placeholder (what you'll see today).

- **YouTube**: paste any normal YouTube link — a `watch?v=...` link, a
  `youtu.be/...` share link, or an `embed/...` link all work, e.g.
  `"video": "https://www.youtube.com/watch?v=VIDEO_ID"`. The page
  automatically converts it to the embeddable format, so you don't need
  to build the embed URL by hand.
- **Your own file**: use a direct link to an `.mp4` file, e.g.
  `"video": "videos/confined-space-rescue.mp4"` (put the file in a
  `videos/` folder next to `index.html`)

### Adding a slide deck to a lesson

Set `"type": "slides"`, then fill in `slidesPdf` — this is the recommended
approach and gives a proper slideshow experience with no download link
anywhere:

1. In PowerPoint: **File → Save As → PDF**
2. Put the resulting `.pdf` file in the `slides/` folder next to
   `index.html`
3. Set `slidesPdf` to that path, e.g.
   `"slidesPdf": "slides/ptw-overview.pdf"`

That's it — the lesson will show a full slideshow viewer: previous/next
arrows, a page counter, keyboard arrow-key navigation, and a thumbnail
strip along the bottom so people can jump straight to any slide. It's
powered by PDF.js (bundled in the `vendor/` folder, so it works fully
offline — no internet connection needed to view slides).

There's a working demo of this already in the data — look for
`"How to Complete One"` under the STOP Cards course, which points to
`slides/stop-cards-demo.pdf` (a placeholder deck). Open it to see exactly
how a real one will look and behave once you swap in your own PDF.

**Two other options exist but aren't recommended:**
- `slides` — an embeddable link for a deck already hosted online (Google
  Slides "Publish to web → Embed", or PowerPoint Online's Embed option).
  Only useful if the file is reachable at a public URL.
- `slidesFile` — a fallback that shows a **Download** card instead of a
  slideshow (points directly at a `.pptx` file). Use this only if you
  haven't converted to PDF yet — it does let people download the file,
  which the `slidesPdf` approach avoids.

Leave all three `""` for a "slides coming soon" placeholder.

The `type` field controls what shows above the lesson text: `"reading"`
lessons show no media area at all, `"video"` shows a video player, and
`"slides"` shows the PDF slideshow (or the embed/download fallback).

### Adding a whole new course

Copy one of the existing course objects in `js/courses-data.js`, paste it
as a new entry in the `COURSES` array, and give it a unique `slug` (used
in the URL, e.g. `course.html?c=your-slug`). It will automatically appear
on the homepage, in the catalog, and be searchable/filterable — no other
file needs to change.

## What's included

- `index.html` — homepage with search, categories, and featured courses
- `courses.html` — full course catalog with live search + category filter
- `course.html` — course overview + lesson viewer (curriculum sidebar,
  lesson content, prev/next navigation, mark-as-complete)
- `css/style.css` — all styling
- `js/courses-data.js` — **course content — edit this to update courses**
- `js/main.js` — rendering logic and progress tracking (no need to edit
  this for normal content updates)

## Progress tracking (no backend)

"Mark as Complete" and progress bars work using the browser's local
storage — no login, no server. This means progress is per-browser, per-
device (not shared across your team, and clearing browser data will reset
it). This was intentional since you said no backend is needed for now. If
you later want team-wide progress tracking, that's exactly what the
Node.js version of this project (delivered earlier) adds.

## Design

Navy/steel + safety-orange industrial theme, Oswald + Public Sans
typefaces — built to feel like a professional safety-training platform
rather than a generic course template.
