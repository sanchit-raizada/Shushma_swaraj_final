export function initNightMode() {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Initial setup
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
        document.documentElement.classList.remove("dark");
        themeIcon.classList.replace("fa-sun", "fa-moon");
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


