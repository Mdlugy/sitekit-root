export function flattenThemeToCssVars(theme = {}) {
    const cssVars = {};

    for (const category in theme) {
        const section = theme[category];
        if (typeof section === "object" && section !== null) {
            for (const key in section) {
                cssVars[`--${category}-${key}`] = section[key];
            }
        }
    }

    return cssVars;
}