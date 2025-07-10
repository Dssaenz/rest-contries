import { Suspense, use } from "react";

import { SkeletonCountryDetail } from "@/components";

import CountryWrapper from "./country-wrapper";

type CountryPageProps = {
  params: Promise<{ country: string }>;
};

function CountryPage({ params }: CountryPageProps) {
  const { country } = use(params);

  return (
    <Suspense fallback={<SkeletonCountryDetail />}>
      <CountryWrapper countryCode={country} />
    </Suspense>
  );
}

export default CountryPage;
