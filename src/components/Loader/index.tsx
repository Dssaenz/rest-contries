import { FC } from "react";
import styles from "./loader.module.css";

export const Loader: FC = () => (
  <div className={styles.loaderWrapper}>
    <div className={styles.spinner} />
    <p>Loading countries...</p>
  </div>
);
