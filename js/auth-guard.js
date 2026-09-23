// Runs on every protected page (index, courses, course).
// 1) Sends visitors who are not logged in to login.html.
// 2) Blocks accounts the admin has not approved yet.
// 3) Logs users out automatically (fixed session length and/or inactivity).

// ===== Settings: change these numbers (0 turns a rule off) =====
const MAX_SESSION_HOURS = 8;  // log out this long after signing in
const IDLE_MINUTES = 60;      // log out after this long with no activity
// ================================================================

const ACTIVITY_KEY = "ccdc_last_activity";

function getActivity() {
  try { return parseInt(localStorage.getItem(ACTIVITY_KEY) || "0", 10); }
  catch (e) { return 0; }
}
function setActivity() {
  try { localStorage.setItem(ACTIVITY_KEY, String(Date.now())); } catch (e) {}
}

// Returns "expired", "idle", or null (session is still fine).
function timeoutReason(session) {
  const now = Date.now();
  const signedInAt = new Date(session.user.last_sign_in_at || now).getTime();

  if (MAX_SESSION_HOURS > 0 && now - signedInAt > MAX_SESSION_HOURS * 3600 * 1000) {
    return "expired";
  }
  if (IDLE_MINUTES > 0) {
    const lastActive = Math.max(getActivity(), signedInAt);
    if (now - lastActive > IDLE_MINUTES * 60 * 1000) return "idle";
  }
  return null;
}

// Returns "yes", "no", or "error" (could not check, e.g. network problem).
async function approvalStatus(session) {
  const { data, error } = await sb
    .from("profiles")
    .select("approved")
    .eq("id", session.user.id)
    .maybeSingle();
  if (error) {
    console.error("Approval check failed:", error);
    return "error";
  }
  return data && data.approved ? "yes" : "no";
}

async function forceLogout(reason) {
  try { await sb.auth.signOut(); } catch (e) { console.error(e); }
  location.replace("login.html" + (reason ? "?reason=" + reason : ""));
}

// Call this from the navbar logout link: onclick="logout()"
async function logout() {
  await forceLogout("");
}

// firstLoad = true: if approval cannot be checked, play safe and sign out.
// firstLoad = false (background re-check): ignore a brief network error.
async function checkSession(firstLoad) {
  const { data } = await sb.auth.getSession();
  if (!data.session) {
    location.replace("login.html");
    return false;
  }
  const reason = timeoutReason(data.session);
  if (reason) {
    await forceLogout(reason);
    return false;
  }
  const status = await approvalStatus(data.session);
  if (status === "no") {
    await forceLogout("pending");
    return false;
  }
  if (status === "error" && firstLoad) {
    await forceLogout("error");
    return false;
  }
  return true;
}

(async () => {
  try {
    if (!(await checkSession(true))) return;

    // Logged in and approved: reveal the page (hidden by the <style> tag in <head>).
    document.documentElement.style.visibility = "visible";
    setActivity();

    // Record activity, at most once every 30 seconds.
    let lastWrite = Date.now();
    ["mousemove", "keydown", "click", "scroll", "touchstart"].forEach((evt) => {
      window.addEventListener(evt, () => {
        if (Date.now() - lastWrite > 30000) {
          lastWrite = Date.now();
          setActivity();
        }
      }, { passive: true });
    });

    // Re-check every 30 seconds and when the tab becomes visible again.
    // (If you remove someone's approval, they are signed out within about 30 seconds.)
    setInterval(() => { checkSession(false).catch(() => {}); }, 30000);
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) checkSession(false).catch(() => {});
    });

    // Logged out in another tab? Follow along.
    sb.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") location.replace("login.html");
    });
  } catch (err) {
    console.error("Auth check failed:", err);
    location.replace("login.html");
  }
})();
