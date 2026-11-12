import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

function getInitialTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "dark";
  } catch {
    return false;
  }
}

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    try {
      localStorage.setItem(STORAGE_KEY, isDarkMode ? "dark" : "light");
    } catch {
      // ignore storage errors
    }
  }, [isDarkMode]);

  const toggleTheme = useCallback(() => setIsDarkMode((value) => !value), []);

  return { isDarkMode, toggleTheme };
}
