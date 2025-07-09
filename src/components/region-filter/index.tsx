"use client";

import { FC } from "react";

import styles from "./region-filter.module.css";

type RegionFilterProps = {
  selected: string;
  onChange: (value: string) => void;
};

const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

const RegionFilter: FC<RegionFilterProps> = ({ selected, onChange }) => {
  return (
    <div className={styles.selectWrapper}>
      <select
        className={styles.select}
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        {regions.map((region) => (
          <option key={region} value={region === "All" ? "" : region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RegionFilter;
