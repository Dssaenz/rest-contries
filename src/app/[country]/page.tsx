import { notFound } from "next/navigation";

import { CountryDetail } from "@/components";

import { api } from "@/lib/api";
import { use } from "react";

type CountryPageProps = {
  params: Promise<{ country: string }>;
};

function CountryPage({ params }: CountryPageProps) {
  const { country } = use(params);
  const responseCountry = use(api.fetchCountryByCode(country));

  if (!country || !responseCountry) return notFound();

  return <CountryDetail country={responseCountry} />;
}

export default CountryPage;
