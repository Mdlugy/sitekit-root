export function overrideTheme(cssVarTheme = {}, override = {}) {
    const result = { ...cssVarTheme };

    for (const category in override) {
        const section = override[category];
        if (typeof section === "object" && section !== null) {
            for (const key in section) {
                result[`--${category}-${key}`] = section[key];
            }
        }
    }

    return result;
}