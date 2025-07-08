export interface Country {
  name: { common: string; official: string };
  flags: { png: string; alt?: string };
  region: string;
  subregion?: string;
  capital?: string[];
  population: number;
  cca3: string;
}

export interface ICountryDetail {
  flags: Flags;
  name: Name;
  tld: string[];
  cca3: string;
  currencies: Currencies;
  capital: string[];
  region: string;
  subregion: string;
  languages: Languages;
  borders: string[];
  population: number;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  ara: Ara;
}

interface Ara {
  official: string;
  common: string;
}

interface Currencies {
  AED: Aed;
}

interface Aed {
  name: string;
  symbol: string;
}

interface Languages {
  ara: string;
}
