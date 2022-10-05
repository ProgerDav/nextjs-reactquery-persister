import { useQuery } from "@tanstack/react-query";
import getUniversitiesInCountry from "../utils/getUniversities";

const useCountryUniversities = (country) => {
  return useQuery(
    ["universities", country],
    () => getUniversitiesInCountry(country),
    {
      enabled: Boolean(country),
    }
  );
};

export default useCountryUniversities;
