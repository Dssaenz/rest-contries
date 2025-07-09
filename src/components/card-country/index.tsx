import { FC, memo } from "react";
import Link from "next/link";
import Image from "next/image";

import { Country } from "@/types/country";

import styles from "./card-country.module.css";

type CardCountryProps = {
  country: Country;
};

const MemoizedCardCountry: FC<CardCountryProps> = ({ country }) => (
  <Link href={`/${country.cca3}`} className={styles.card}>
    <Image
      src={country.flags.png}
      alt={country.flags.alt || `Flag of ${country.name.common}`}
      width={320}
      height={180}
      className={styles.flag}
      priority
      draggable={false}
    />
    <div className={styles.info}>
      <p className={styles.title}>
        <strong>{country.name.common}</strong>
      </p>
      <p className={styles.text}>
        <strong>Population:</strong> {country.population.toLocaleString()}
      </p>
      <p className={styles.text}>
        <strong>Region:</strong> {country.region}
      </p>
      <p className={styles.text}>
        <strong>Capital:</strong> {country.capital?.[0]}
      </p>
    </div>
  </Link>
);

export const CardCountry = memo(MemoizedCardCountry);
