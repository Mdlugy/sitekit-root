export default function resolveThemeColor(themeColor, theme) {
    if (!themeColor || typeof themeColor !== "string") return "#ff0000"
    if (themeColor.startsWith("#")) return themeColor;
    return theme[themeColor] || theme["primary"] || "#ff0000";
}