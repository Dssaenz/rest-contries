import { FC } from "react";

import styles from "./skeleton-card.module.css";

export const SkeletonCard: FC = () => (
  <div className={styles.card} data-testid="skeleton-flag">
    <div className={styles.flag} />
    <div className={styles.textLineTitle} data-testid="skeleton-title" />
    <div className={styles.textLine} data-testid="skeleton-line" />
    <div className={styles.textLine} data-testid="skeleton-line" />
    <div className={styles.textLine} data-testid="skeleton-line" />
  </div>
);
