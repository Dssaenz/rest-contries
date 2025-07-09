import { Suspense, use } from "react";

import { Loader } from "@/components";

import CountryWrapper from "./country-wrapper";

type CountryPageProps = {
  params: Promise<{ country: string }>;
};

function CountryPage({ params }: CountryPageProps) {
  const { country } = use(params);

  return (
    <Suspense fallback={<Loader />}>
      <CountryWrapper countryCode={country} />
    </Suspense>
  );
}

export default CountryPage;
