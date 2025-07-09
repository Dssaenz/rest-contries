"use client";

import { FC } from "react";

import { useDarkMode } from "@/hooks/useDarkMode";

import styles from "./navbar.module.css";

export const Navbar: FC = () => {
  const { isDark, toggleTheme } = useDarkMode();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Where in the world?</h1>
        <button className={styles.toggle} onClick={toggleTheme}>
          {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </header>
  );
};
