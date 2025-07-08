export interface Country {
  name: { common: string };
  flags: { png: string; alt?: string };
  region: string;
  subregion?: string;
  capital?: string[];
  population: number;
  cca3: string;
}
