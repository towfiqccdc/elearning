/* ===================== Shared layout snippets ===================== */

function renderNavbar(active) {
  const links = [
    { href: "index.html", label: "Home", key: "home" },
    { href: "courses.html", label: "Courses", key: "courses" },
  ];
  return `
    <nav class="navbar">
      <div class="container">
        <a href="index.html" class="brand"><i class="bi bi-shield-check"></i> CCDC HSE Learning</a>
        <div class="nav-links">
          ${links.map(l => `<a href="${l.href}" class="${active === l.key ? 'active' : ''}">${l.label}</a>`).join('')}
          <a href="courses.html" class="nav-cta">Browse Courses</a>
        </div>
      </div>
    </nav>`;
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
  return `
    <a href="course.html?c=${course.slug}" class="course-card">
      <div class="thumb">
        <i class="bi ${course.icon}"></i>
        <span class="level-tag">${course.level}</span>
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
    </a>`;
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

/* ===================== Progress (localStorage, no backend) ===================== */

const PROGRESS_KEY = 'hse_lms_progress';

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
  } catch {
    return {};
  }
}

function isLessonDone(slug, lessonId) {
  const p = getProgress();
  return !!(p[slug] && p[slug][lessonId]);
}

function toggleLessonDone(slug, lessonId) {
  const p = getProgress();
  if (!p[slug]) p[slug] = {};
  p[slug][lessonId] = !p[slug][lessonId];
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
  return p[slug][lessonId];
}

function courseProgress(course) {
  const total = countLessons(course);
  let done = 0;
  const p = getProgress()[course.slug] || {};
  course.modules.forEach(m => m.lessons.forEach((l, i) => {
    const id = lessonId(course, m, l);
    if (p[id]) done++;
  }));
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
});
