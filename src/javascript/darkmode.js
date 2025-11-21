// js/night.js
export function initNightMode() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon   = document.getElementById("theme-icon");
  if (!themeToggle || !themeIcon) return;          // safety

  // initial
  if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    document.documentElement.classList.remove("dark");
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.theme = "light";
  }

  // toggle
  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.theme = isDark ? "dark" : "light";
    themeIcon.classList.replace(isDark ? "fa-moon" : "fa-sun",
                                isDark ? "fa-sun"  : "fa-moon");
  });
}