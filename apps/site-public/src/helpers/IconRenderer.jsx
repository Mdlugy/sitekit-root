import { getLucideIcon } from "./lucide_static_registry";
export default function IconRenderer({
  name = "activity",
  size = 24,
  color = "#000000",
  title, // optional
  ariaHidden = true // default to decorative
}) {
  const Icon = getLucideIcon(name);   
  const a11yProps = ariaHidden 
    ? { "aria-hidden": true }
    : { role: "img", "aria-label": title || name };
// if ariaHidden is true, we assume the icon is decorative. The a11yProps is here so we can reuse this renderer for rich_text components. 
  return (
    <Icon
      size={size}
      color={color}
      className="LucideIcon"
      {...a11yProps}
    />
  );
}