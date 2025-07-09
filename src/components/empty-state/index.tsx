import { FC } from "react";
import styles from "./empty-state.module.css";

export const EmptyState: FC = () => (
  <div className={styles.emptyWrapper}>
    <p>No countries related to your search were found.</p>
  </div>
);
