import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const storedTheme = localStorage.getItem("theme");
    const isPrefersDark: boolean = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const enabled = storedTheme === "dark" || (!storedTheme && isPrefersDark);
    if (enabled) {
      root.classList.add("dark");
    } else {
      root.classList.add("light");
    }
    setIsDark(enabled);
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const newTheme = isDark ? "light" : "dark";
    if (isDark) {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
    }
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
    >
      {isDark ? "🌙 다크모드" : "☀️ 라이트모드"}
    </button>
  );
}
