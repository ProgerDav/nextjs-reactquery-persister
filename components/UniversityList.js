import React from "react";
import useCountryUniversities from "../hooks/useCountryUniversities";

function UniversityList({ country }) {
  const { data, isLoading } = useCountryUniversities(country);

  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <div>
      {data.map((university) => (
        <p key={university.name + university.country}>
          {university.country} | {university.name}
        </p>
      ))}
    </div>
  );
}

export default UniversityList;
