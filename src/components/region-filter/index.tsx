"use client";
import { FC, memo } from "react";

import { regions } from "@/types/constants";

import styles from "./region-filter.module.css";

type RegionFilterProps = {
  selected: string;
  onChange: (value: string) => void;
};

const MemoizedRegionFilter: FC<RegionFilterProps> = ({
  selected,
  onChange,
}) => (
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

export const RegionFilter = memo(MemoizedRegionFilter);
