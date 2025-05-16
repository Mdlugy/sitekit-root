import React from "react";
import styles from "./single-scroll.module.css";
export default function SingleScrollLayout({ children, theme }) {
   
const cssVars = {
  "--color-Primary": theme?.color?.primary || "#000000",        // black
  "--color-Secondary": theme?.color?.secondary || "#444444",    // dark gray
  "--color-Accent": theme?.color?.accent || "#888888",          // medium gray
  "--color-Background": theme?.color?.background || "#ffffff",  // white
  "--color-Text": theme?.color?.text || "#000000",              // black
  "--color-Link": theme?.color?.link || "#0000ee",              // classic blue link
  "--color-Border": theme?.color?.border || "#cccccc",          // light gray

  "--font-Heading": theme?.font?.heading || "sans-serif",       // unstyled system sans
  "--font-Body": theme?.font?.body || "serif",                  // default serif
  "--font-Mono": theme?.font?.mono || "monospace",              // browser monospace
};

console.log("theme", theme);    

console.log("cssVars", cssVars);
  return (
    <main style = {cssVars} >
      {children}
    </main>
  );
}