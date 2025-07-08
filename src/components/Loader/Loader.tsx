import { FC } from "react";
import styles from "./Loader.module.css";

const Loader: FC = () => (
  <div className={styles.loaderWrapper}>
    <div className={styles.spinner}></div>
    <p>Loading countries...</p>
  </div>
);

export default Loader;
