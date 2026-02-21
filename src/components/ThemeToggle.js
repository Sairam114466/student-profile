import React from "react";

export default function ThemeToggle({ theme, setTheme }) {
  const toggle = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <button className="miniBtn" onClick={toggle} title="Toggle theme">
      {theme === "light" ? "🌞" : "🌙"}
    </button>
  );
}