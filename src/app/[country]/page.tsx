import { use } from "react";
import { notFound } from "next/navigation";

import { api } from "@/lib/api";

import { CountryDetail } from "@/components";

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
