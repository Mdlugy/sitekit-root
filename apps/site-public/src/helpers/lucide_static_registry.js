import * as LucideIcons from "lucide-react";

const ICON_MAP = Object.entries(LucideIcons).reduce((acc, [name, component]) => {
    acc[name.toLowerCase()] = component;
    return acc;
}, {});

export function getLucideIcon(name = "activity") {
    return ICON_MAP[name.toLowerCase()] || ICON_MAP["activity"];
}