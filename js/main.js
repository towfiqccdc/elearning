/* ===================== Shared layout snippets ===================== */

function renderNavbar(active) {
  const links = [
    { href: "index.html", label: "Home", key: "home", icon: "bi-house" },
    { href: "courses.html", label: "Courses", key: "courses", icon: "bi-collection-play" },
  ];
  return `
    <nav class="navbar">
      <div class="container">
        <a href="index.html" class="brand"><i class="bi bi-shield-check"></i> CCDC HSE Learning</a>
        <button type="button" class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
          <i class="bi bi-list"></i>
        </button>
        <div class="nav-links">
          ${links.map(l => `<a href="${l.href}" class="${active === l.key ? 'active' : ''}">${l.label}</a>`).join('')}
          <a href="#" class="nav-logout" onclick="logout(); return false;">Log out</a>
        </div>
      </div>
    </nav>
    <nav class="bottom-tabbar">
      ${links.map(l => `<a href="${l.href}" class="${active === l.key ? 'active' : ''}"><i class="bi ${l.icon}"></i><span>${l.label}</span></a>`).join('')}
    </nav>`;
}

function initNavToggle() {
  document.querySelectorAll('.navbar').forEach(nav => {
    const btn = nav.querySelector('.nav-toggle');
    const links = nav.querySelector('.nav-links');
    if (!btn || !links) return;
    btn.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      btn.innerHTML = isOpen ? '<i class="bi bi-x-lg"></i>' : '<i class="bi bi-list"></i>';
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = '<i class="bi bi-list"></i>';
      });
    });
  });
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">
          <div>
            <div class="brand"><i class="bi bi-shield-check"></i> CCDC HSE Learning</div>
            <p>A topic-based training portal for the CCDC HSE team — built to make site safety knowledge easy to find, learn, and revisit.</p>
          </div>
          <div class="footer-cols">
            <div class="footer-col">
              <h4>Learn</h4>
              <a href="courses.html">All Courses</a>
              <a href="index.html#categories">Categories</a>
            </div>
            <div class="footer-col">
              <h4>About</h4>
              <a href="index.html">Home</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          &copy; ${new Date().getFullYear()} CCDC HSE Learning Portal. Internal training use.
        </div>
      </div>
    </footer>`;
}

/* ===================== Course card rendering ===================== */

function courseCardHTML(course) {
  const lessonCount = countLessons(course);
  const tag = course.locked ? 'div' : 'a';
  const href = course.locked ? '' : ` href="course.html?c=${course.slug}"`;
  return `
    <${tag}${href} class="course-card${course.locked ? ' locked' : ''}">
        <div class="thumb" ${course.thumbImage ? `style="background-image:url('${course.thumbImage}')"` : ''}>
        ${course.thumbImage ? '' : `<i class="bi ${course.icon}"></i>`}
        <span class="level-tag">${course.level}</span>
        ${course.locked ? '<div class="lock-overlay"><i class="bi bi-lock-fill"></i></div>' : ''}
      </div>
      <div class="body">
        <div class="cat">${course.category}</div>
        <h3>${course.title}</h3>
        <p>${course.summary}</p>
        <div class="meta-row">
          <span><i class="bi bi-collection-play"></i> ${lessonCount} lessons</span>
          <span><i class="bi bi-clock"></i> ${course.duration}</span>
        </div>
      </div>
    </${tag}>`;
}

function renderCourseGrid(containerId, courseList) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!courseList.length) {
    el.innerHTML = `<p style="color: var(--ink-soft); grid-column: 1/-1;">No courses match your search.</p>`;
    return;
  }
  el.innerHTML = courseList.map(courseCardHTML).join('');
}

/* ===================== Progress (Supabase-backed) ===================== */
// Completion is recorded in the "lesson_progress" table, per signed-in user.
// Only "video" (≥70% watched) and "slides" (every page viewed) lessons are
// trackable right now — "document" and "reading" lessons are intentionally
// left out of both the count and the percentage (not silently included as
// "incomplete forever").

async function currentUserId() {
  const { data } = await sb.auth.getSession();
  return data.session ? data.session.user.id : null;
}

// Returns { lessonId: true, ... } for every lesson the current user has
// completed in this course. Call once per course-page load and cache the
// result (course.html keeps it in a module-level `progressMap` variable) —
// this stays a plain synchronous lookup everywhere else.
async function fetchCourseProgress(courseSlug) {
  const uid = await currentUserId();
  if (!uid) return {};
  const { data, error } = await sb
    .from('lesson_progress')
    .select('lesson_id')
    .eq('user_id', uid)
    .eq('course_slug', courseSlug);
  if (error) {
    console.error('fetchCourseProgress failed:', error);
    return {};
  }
  const map = {};
  data.forEach(row => { map[row.lesson_id] = true; });
  return map;
}

// Records one completed lesson. Safe to call more than once for the same
// lesson — the table's unique constraint means repeats are just ignored.
async function saveLessonComplete(courseSlug, lessonIdValue) {
  const uid = await currentUserId();
  if (!uid) return;
  const { error } = await sb
    .from('lesson_progress')
    .upsert(
      { user_id: uid, course_slug: courseSlug, lesson_id: lessonIdValue },
      { onConflict: 'user_id,course_slug,lesson_id', ignoreDuplicates: true }
    );
  if (error) console.error('saveLessonComplete failed:', error);
}

function trackableLessonIds(course) {
  const ids = [];
  course.modules.forEach(m => m.lessons.forEach(l => {
    if (l.type === 'video' || l.type === 'slides') {
      ids.push(lessonId(course, m, l));
    }
  }));
  return ids;
}

// progressMap: the cached result of fetchCourseProgress() — kept
// synchronous so it can be called during rendering.
function courseProgressFromMap(course, progressMap) {
  const trackable = trackableLessonIds(course);
  const done = trackable.filter(id => progressMap[id]).length;
  const total = trackable.length;
  return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
}

function lessonId(course, module, lesson) {
  return `${module.title}::${lesson.title}`.replace(/\s+/g, '-').toLowerCase();
}

/* ===================== Init on load ===================== */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-navbar]').forEach(el => {
    el.outerHTML = renderNavbar(el.dataset.navbar);
  });
  document.querySelectorAll('[data-footer]').forEach(el => {
    el.outerHTML = renderFooter();
  });
  initNavToggle();
});
