// import dynamic from "next/dynamic";
import React from "react";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import {
  persistQueryClientRestore,
  persistQueryClientSave,
} from "@tanstack/react-query-persist-client";
import CountryInput from "../components/CountryInput";
import getUniversitiesInCountry from "../utils/getUniversities";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import RedisStorage from "../utils/redisStorage";

function Prefetched({ defaultCountry }) {
  return <CountryInput defaultCountry={defaultCountry} />;
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  const DEFAULT_COUNTRY = "armenia";

  const persister = createAsyncStoragePersister({
    storage: RedisStorage.getInstance(),
  });

  await persistQueryClientRestore({
    queryClient,
    persister,
    maxAge: 1000 * 60 * 60 * 24, // 24 hours
  });

  await queryClient.prefetchQuery(
    ["universities", DEFAULT_COUNTRY],
    () => getUniversitiesInCountry(DEFAULT_COUNTRY),
    {
      staleTime: 86400 * 1000,
    }
  );

  await persistQueryClientSave({ queryClient, persister });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      defaultCountry: DEFAULT_COUNTRY,
    },
  };
}

export default Prefetched;
