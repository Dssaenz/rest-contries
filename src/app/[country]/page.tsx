import { notFound } from "next/navigation";

import { CountryDetail } from "@/components";

import { api } from "@/lib/api";

type PageProps = {
  params: { country: string };
};

async function CountryPage({ params }: PageProps) {
  const country = await api.fetchCountryByCode(params.country);

  if (!country) return notFound();

  return <CountryDetail country={country} />;
}

export default CountryPage;
