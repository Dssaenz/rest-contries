"use client";
import { useCallback, useEffect, useMemo, useState } from "react";

import { api } from "@/lib/api";

import { ZERO } from "@/types/constants";
import { Country } from "@/types/country";

import { CardCountry, EmptyState, Loader, RegionFilter } from "@/components";
import { Search } from "../components/search";

import "./globals.css";

function Home() {
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  const filteredCountries = useMemo(() => {
    const searchText = search.toLowerCase();

    return countries.filter((country) => {
      const name = country.name.common.toLowerCase().includes(searchText);
      const regionMatch = selectedRegion
        ? country.region === selectedRegion
        : true;
      return name && regionMatch;
    });
  }, [search, selectedRegion, countries]);

  const renderLoader = isLoading ? <Loader /> : null;

  const renderEmptyState =
    isLoading && filteredCountries.length === ZERO ? <EmptyState /> : null;

  const getCountries = useCallback(async () => {
    try {
      const data = await api.fetchAllCountries();
      setCountries(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <main className="container">
      <div className="filters">
        <Search value={search} onChange={setSearch} />
        <RegionFilter selected={selectedRegion} onChange={setSelectedRegion} />
      </div>
      {renderLoader}
      {renderEmptyState}
      <div className="grid">
        {filteredCountries.map((country) => (
          <CardCountry key={country.cca3} country={country} />
        ))}
      </div>
    </main>
  );
}

export default Home;
