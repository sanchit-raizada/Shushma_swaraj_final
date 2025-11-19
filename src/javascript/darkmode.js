export function initNightMode() {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Initial setup - DEFAULT LIGHT MODE
    if (localStorage.theme === "dark") {
        // Only apply dark mode if explicitly set in localStorage
        document.documentElement.classList.add("dark");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
        // Default: light mode (remove dark class and set moon icon)
        document.documentElement.classList.remove("dark");
        themeIcon.classList.replace("fa-sun", "fa-moon");
        // Ensure theme is set to light in localStorage
        localStorage.theme = "light";
    }

    // Toggle handler
    themeToggle.addEventListener("click", () => {
        const html = document.documentElement;
        const isDark = html.classList.toggle("dark");

        if (isDark) {
            localStorage.theme = "dark";
            themeIcon.classList.replace("fa-moon", "fa-sun");
        } else {
            localStorage.theme = "light";
            themeIcon.classList.replace("fa-sun", "fa-moon");
        }
    });
}