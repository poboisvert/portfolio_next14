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
        } catch (error) {
            console.error("Could not save theme to localStorage", error);
        }
    };

    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    darkQuery.addEventListener("change", (event) => {
        window.__setPreferredTheme(event.matches ? "dark" : "light");
    });

    let preferredTheme;
    try {
        preferredTheme = JSON.parse(localStorage.getItem("theme"));
    } catch (error) {
        console.error("Could not parse theme from localStorage", error);
    }

    const finalTheme = preferredTheme !== null ? preferredTheme : (darkQuery.matches ? "dark" : "light");
    
    setTheme(finalTheme);
})();
`;
