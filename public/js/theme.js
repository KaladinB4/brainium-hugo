(() => {
  const storageKey = "aihackers-theme";
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");

  const setTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    if (toggle) {
      const next = theme === "dark" ? "light" : "dark";
      toggle.textContent = `[${next}]`;
      toggle.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
    }
  };

  const saved = localStorage.getItem(storageKey);
  const initial = saved || root.getAttribute("data-theme") || "dark";
  setTheme(initial);

  if (toggle) {
    toggle.addEventListener("click", () => {
      const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      localStorage.setItem(storageKey, nextTheme);
      setTheme(nextTheme);
    });
  }
})();
