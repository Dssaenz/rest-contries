import { FC } from "react";
import styles from "./skeleton-country-detail.module.css";

export const SkeletonCountryDetail: FC = () => {
  return (
    <main className={styles.wrapper} data-testid="skeleton-main">
      <div className={styles.backButton} data-testid="skeleton-back-button">
        <div className={styles.backText} data-testid="skeleton-back-text" />
      </div>

      <div className={styles.container} data-testid="skeleton-container">
        <div className={styles.image} data-testid="skeleton-image" />

        <section className={styles.info} data-testid="skeleton-info">
          <div className={styles.title} data-testid="skeleton-title" />
          <div
            className={styles.textDetails}
            data-testid="skeleton-text-details"
          >
            <div className={styles.section} data-testid="skeleton-section">
              <div className={styles.line} />
              <div className={styles.line} />
              <div className={styles.line} />
              <div className={styles.line} />
            </div>
            <div className={styles.section}>
              <div className={styles.line} />
              <div className={styles.line} />
              <div className={styles.line} />
            </div>
          </div>
          <div className={styles.borderCountries}>
            <div className={styles.line} />
            <div className={styles.borderList}>
              <div className={styles.chip} />
              <div className={styles.chip} />
              <div className={styles.chip} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
