"use client";

import { FC } from "react";

import styles from "./RegionFilter.module.css";

type RegionFilterProps = {
  selectedRegion: string;
  onChange: (region: string) => void;
};

const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

const RegionFilter: FC<RegionFilterProps> = ({ selectedRegion, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <select
        className={styles.select}
        value={selectedRegion}
        onChange={handleChange}
      >
        <option value="" disabled hidden>
          Filter by region
        </option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RegionFilter;
