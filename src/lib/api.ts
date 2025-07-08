import { ZERO } from "@/types/constants";
import { Country } from "@/types/country";

const BASE_URL = "https://restcountries.com/v3.1";

/**
 * Find items by keyword and site
 * @return {*}  {Promise<Country[]>}
 */
const fetchAllCountries = async (): Promise<Country[]> => {
  const response = await fetch(
    `${BASE_URL}/all?fields=flags,name,region,population,cca3,capital`
  );

  if (!response.ok) throw new Error("Error to load list of countries");

  const data = await response.json();

  return data;
};

/**
 * Find items by keyword and site
 * @param {string} code
 * @return {*}  {Promise<Country>}
 */
const fetchCountryByCode = async (code: string): Promise<Country> => {
  const response = await fetch(`${BASE_URL}/alpha/${code}`);

  if (!response.ok)
    throw new Error(`Error to load country with the code ${code}`);

  const data = await response.json();
  return data[ZERO];
};

export const api = {
  fetchAllCountries,
  fetchCountryByCode,
};
