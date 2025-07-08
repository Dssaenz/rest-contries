"use client";

import { ChangeEvent, FC } from "react";

import styles from "./Search.module.css";

type SearchProps = {
  value: string;
  onChange: (value: string) => void;
};

const Search: FC<SearchProps> = ({ value, onChange }) => {
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.75 3.75a7.5 7.5 0 0012.9 12.9z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        type="text"
        value={value}
        onChange={handleInput}
        className={styles.input}
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Search;
