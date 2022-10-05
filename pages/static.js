// import dynamic from "next/dynamic";
import React from "react";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import CountryInput from "../components/CountryInput";
import getUniversitiesInCountry from "../utils/getUniversities";

// const CountryInput = dynamic(() => import("../components/CountryInput"));

function Static({ defaultCountry }) {
  return <CountryInput defaultCountry={defaultCountry} />;
}

export async function getStaticProps() {
  const queryClient = new QueryClient();
  const DEFAULT_COUNTRY = "armenia";

  await queryClient.prefetchQuery(["universities", DEFAULT_COUNTRY], () =>
    getUniversitiesInCountry(DEFAULT_COUNTRY)
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      defaultCountry: DEFAULT_COUNTRY,
    },
  };
}

export default Static;
