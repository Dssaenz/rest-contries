import { Suspense } from "react";

import { Loader } from "@/components";

import CountryWrapper from "./country-wrapper";

function CountryPage({ params }: { params: { country: string } }) {
  return (
    <Suspense fallback={<Loader />}>
      <CountryWrapper countryCode={params.country} />
    </Suspense>
  );
}

export default CountryPage;
