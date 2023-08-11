"use client";

import { LuMoon, LuSun } from "react-icons/lu"
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="relative inline-flex"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <LuSun
        size="16"
        className="transition-all scale-100 rotate-0 dark:-rotate-90 dark:scale-0"
      />
      <LuMoon
        size="16"
        className="absolute transition-all scale-0 rotate-90 dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}