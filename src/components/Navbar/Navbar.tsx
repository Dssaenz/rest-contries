"use client";

import { useState, FC } from "react";

import styles from "./Navbar.module.css";

const Navbar: FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const toggleDarkMode = (): void => setDarkMode((prev) => !prev);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Where in the world?</h1>
        <button className={styles.toggle} onClick={toggleDarkMode}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
