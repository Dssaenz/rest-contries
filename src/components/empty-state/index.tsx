import { FC } from "react";
import styles from "./empty-state.module.css";

const EmptyState: FC = () => (
  <div className={styles.emptyWrapper}>
    <p>No countries related to your search were found.</p>
  </div>
);

export default EmptyState;
