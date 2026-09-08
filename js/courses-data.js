/*
  ===========================================================================
  COURSE MANIFEST — this file no longer holds course content itself.

  Each course lives in its own file under js/courses/ (one file per course).
  This file just lists which files to load and provides the same helper
  functions the rest of the site already uses (getAllCourses, etc.) — those
  haven't changed at all.

  TO ADD A NEW COURSE:
    1. Copy any file in js/courses/ as a starting point, edit its content,
       give it a unique `slug`, and save it as js/courses/your-slug.js
    2. Add "your-slug" to the COURSE_FILES list below

  That's it — no other file needs to change. index.html, courses.html, and
  course.html all pick up new courses automatically once they're listed here.

  Each lesson has a `type`: "reading", "video", "slides", or "document".
  The type controls what shows above the lesson text:
    - "reading"  — text only, no media area
    - "video"    — fill in `video`. Paste any normal YouTube link (watch,
                   share, or embed format all work — it's auto-converted),
                   or a direct .mp4 file path. Leave "" for a "video coming
                   soon" placeholder.
    - "slides"   — fill in ONE of these three fields, in order of preference:

                   1. `slidesPdf` (RECOMMENDED) — path to a PDF exported
                      from PowerPoint (File > Save As > PDF, one click).
                      Renders as a proper in-page slideshow: full-size stage,
                      prev/next arrows, keyboard arrow-key navigation, and a
                      thumbnail strip to jump to any slide — with no
                      download link shown anywhere.
                      e.g. slidesPdf: "slides/ptw-overview.pdf"

                   2. `slides` — an embeddable link for a deck already
                      hosted online (Google Slides "Publish to web > Embed",
                      or PowerPoint Online's Embed option). Only useful if
                      the file is reachable at a public URL — won't work for
                      something purely local.

                   3. `slidesFile` — a fallback: a direct path to the raw
                      .pptx file. This shows a "Download" card instead of a
                      slideshow — use this only if you haven't converted to
                      PDF yet, since it lets people download the file.

                   Leave all three "" for a "slides coming soon" placeholder.

    - "document" — fill in `pdfDoc` with a path to a PDF. Shows it in a
                   normal, full document viewer (native browser controls —
                   scroll, zoom, print, download all available), unlike the
                   no-download slideshow above. Best for reference documents
                   and standards meant to be read/scrolled, not presented
                   slide-by-slide. e.g. pdfDoc: "documents/nfpa-10.pdf"

  IMPORTANT: this site (including course loading itself now) only works
  when served over http (e.g. `python3 -m http.server` — see README), not
  when index.html is opened by double-clicking it. This is a browser
  security restriction, not a bug.

  Each course needs a unique `slug` (used in the URL: course.html?c=slug).
  ===========================================================================
*/

const COURSE_FILES = [
  "fire-extinguisher-training",
  "h2s-safety",
  "induction",
  "hira"
];

// ---- Loading machinery — no need to edit below this line ----

const COURSES = [];

function registerCourse(course) {
  COURSES.push(course);
}

function loadCourseFile(name) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `js/courses/${name}.js`;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load course file: js/courses/${name}.js`));
    document.head.appendChild(script);
  });
}

// Every page that needs course data awaits this once before rendering
// anything. Resolves once every file in COURSE_FILES has loaded and
// called registerCourse().
const coursesReady = Promise.all(COURSE_FILES.map(loadCourseFile));

function getAllCourses() {
  return COURSES;
}

function getCourseBySlug(slug) {
  return COURSES.find(c => c.slug === slug);
}

function getAllCategories() {
  return [...new Set(COURSES.map(c => c.category))];
}

function countLessons(course) {
  return course.modules.reduce((sum, m) => sum + m.lessons.length, 0);
}
