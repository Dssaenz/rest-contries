import { api } from "@/lib/api";

const mockCountries = [
  {
    name: { common: "Colombia" },
    flags: { png: "/colombia.png", alt: "Flag of Colombia" },
    region: "Americas",
    population: 50000000,
    cca3: "COL",
    capital: ["Bogotá"],
  },
];

const mockCountryDetail = {
  name: { common: "Colombia", official: "Republic of Colombia" },
  flags: { png: "/colombia.png", alt: "Flag of Colombia" },
  region: "Americas",
  subregion: "South America",
  population: 50000000,
  cca3: "COL",
  capital: ["Bogotá"],
  tld: [".co"],
  currencies: { COP: { name: "Colombian peso", symbol: "$" } },
  languages: { spa: "Spanish" },
  borders: ["BRA", "ECU", "VEN"],
};

describe("Test for api service.", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe("Test for 'fetchAllCountries' function.", () => {
    it("Returns list of countries successful", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockCountries),
      });

      const result = await api.fetchAllCountries();
      expect(result).toEqual(mockCountries);
      expect(fetch).toHaveBeenCalledWith(
        "https://restcountries.com/v3.1/all?fields=flags,name,region,population,cca3,capital"
      );
    });

    it("Throws an error if the response is not valid", async () => {
      global.fetch = jest.fn().mockResolvedValue({ ok: false });

      await expect(api.fetchAllCountries()).rejects.toThrow(
        "Error to load list of countries"
      );
    });
  });

  describe("Test for 'fetchCountryByCode' function.", () => {
    it("Returns the country details successful", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve([mockCountryDetail]),
      });

      const result = await api.fetchCountryByCode("COL");
      expect(result).toEqual(mockCountryDetail);
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining(
          "https://restcountries.com/v3.1/alpha?codes=COL"
        )
      );
    });

    it("Returns null if an error occurs", async () => {
      jest.spyOn(console, "error").mockImplementation(() => {});

      global.fetch = jest.fn().mockRejectedValue(new Error("API error"));

      const result = await api.fetchCountryByCode("COL");
      expect(result).toBeNull();

      (console.error as jest.Mock).mockRestore();
    });

    it("Returns null if the response is invalid", async () => {
      jest.spyOn(console, "error").mockImplementation(() => {});

      global.fetch = jest.fn().mockResolvedValue({ ok: false });

      const result = await api.fetchCountryByCode("COL");
      expect(result).toBeNull();

      (console.error as jest.Mock).mockRestore();
    });
  });
});
