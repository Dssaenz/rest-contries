"use client";
import { FC } from "react";
import Image from "next/image";

import { NA, ZERO } from "@/types/constants";
import { ICountryDetail } from "@/types/country";

import styles from "./country-detail.module.css";

type CountryDetailProps = {
  country: ICountryDetail;
};

export const CountryDetail: FC<CountryDetailProps> = ({ country }) => {
  const formatCurrencies = () =>
    country.currencies
      ? Object.values(country.currencies)
          .map((currency) => `${currency.name} (${currency.symbol})`)
          .join(", ")
      : NA;

  const formatLanguages = () =>
    country.languages ? Object.values(country.languages).join(", ") : NA;

  const formatBorders = () =>
    country.borders && country.borders.length > ZERO ? (
      country.borders.map((code) => (
        <div key={code} className={styles.languages}>
          <p>{code}</p>
        </div>
      ))
    ) : (
      <p>No border countries</p>
    );

  return (
    <main className={styles.wrapper}>
      <button className={styles.backButton} onClick={() => history.back()}>
        <p>←</p> Back
      </button>

      <div className={styles.container}>
        <Image
          src={country.flags.png}
          alt={country.flags.alt || `Flag of ${country.name.common}`}
          width={570}
          height={410}
          style={{ width: "100%", height: "auto", maxWidth: "570px" }}
          priority
          draggable={false}
        />

        <section className={styles.info}>
          <h1>{country.name.common}</h1>
          <div className={styles.textDetails}>
            <div className={styles.sectionDetails}>
              <p>
                <strong>Native Name:</strong> {country.name.official || ""}
              </p>
              <p>
                <strong>Population:</strong> {country.population}
              </p>

              <p>
                <strong>Region:</strong> {country.region}
              </p>

              <p>
                <strong>Sub Region:</strong> {country.subregion}
              </p>

              <p>
                <strong>Capital:</strong> {country.capital}
              </p>
            </div>
            <div className={styles.sectionLastDetails}>
              <p>
                <strong>Top Level Domain: </strong>
                {country.tld?.join(", ") || NA}
              </p>
              <p>
                <strong>Currencies:</strong> {formatCurrencies()}
              </p>
              {country.languages && (
                <p>
                  <strong>Languages:</strong> {formatLanguages()}
                </p>
              )}
            </div>
          </div>
          <div className={styles.borderCountries}>
            <strong>Border Countries:</strong>
            <div className={styles.borderList}>{formatBorders()}</div>
          </div>
        </section>
      </div>
    </main>
  );
};
