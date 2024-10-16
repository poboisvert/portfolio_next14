export default `
(function () {
    const setTheme = (newTheme) => {
        document.documentElement.className = newTheme;
        window.__theme = newTheme;
        window.__onThemeChange(newTheme);
    };

    window.__onThemeChange = () => { };

    window.__setPreferredTheme = (newTheme) => {
        setTheme(newTheme);
        try {
            localStorage.setItem("theme", JSON.stringify(newTheme));
        } catch { }
    };

    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    darkQuery.addEventListener("change", (event) => {
        window.__setPreferredTheme(event.matches ? "dark" : "light");
    });

    let preferredTheme;
    try {
        preferredTheme = JSON.parse(localStorage.getItem("theme"));
    } catch { }
    
    setTheme(preferredTheme || (darkQuery.matches ? "dark" : "light"));
})();
`;
