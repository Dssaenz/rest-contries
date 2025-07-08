import { useEffect, useState } from "react";

import { THEME } from "@/types/enums";

type UseDarkModeResult = {
  isDark: boolean;
  toggleTheme: () => void;
};

export const useDarkMode = (): UseDarkModeResult => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldUseDark =
      storedTheme === THEME.DARK || (!storedTheme && prefersDark);

    if (shouldUseDark) {
      document.documentElement.classList.add(THEME.DARK);
      setIsDark(true);
    } else {
      document.documentElement.classList.remove(THEME.DARK);
      setIsDark(false);
    }
  }, []);

  const toggleTheme = (): void => {
    const newTheme = isDark ? THEME.LIGHT : THEME.DARK;
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle(THEME.DARK);
    setIsDark(!isDark);
  };

  return { isDark, toggleTheme };
};
