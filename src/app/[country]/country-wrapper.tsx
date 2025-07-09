import { notFound } from "next/navigation";

import { api } from "@/lib/api";

import { CountryDetail } from "@/components";

type CountryWrapperProps = {
  countryCode: string;
};

const CountryWrapper = async ({ countryCode }: CountryWrapperProps) => {
  const country = await api.fetchCountryByCode(countryCode);

  if (!country) return notFound();

  return <CountryDetail country={country} />;
};

export default CountryWrapper;
