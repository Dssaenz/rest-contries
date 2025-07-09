"use client";
import { FC } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

import { useDarkMode } from "@/hooks/useDarkMode";

import styles from "./navbar.module.css";

export const Navbar: FC = () => {
  const { isDark, toggleTheme } = useDarkMode();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Where in the world?</h1>
        <button className={styles.toggle} onClick={toggleTheme}>
          {isDark ? (
            <div className={styles.actionContainer}>
              <IoMoonOutline size={20} />
              <p>Light Mode</p>
            </div>
          ) : (
            <div className={styles.actionContainer}>
              <IoSunnyOutline size={20} />
              <p>Dark Mode</p>
            </div>
          )}
        </button>
      </div>
    </header>
  );
};
