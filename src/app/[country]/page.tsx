import { Suspense } from "react";

import { Loader } from "@/components";

import CountryWrapper from "./country-wrapper";

type CountryPageProps = {
  params: { country: string };
};

function CountryPage({ params }: CountryPageProps) {
  return (
    <Suspense fallback={<Loader />}>
      <CountryWrapper countryCode={params.country} />
    </Suspense>
  );
}

export default CountryPage;
