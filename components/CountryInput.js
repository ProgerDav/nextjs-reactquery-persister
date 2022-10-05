import React, { useState } from "react";
import UniversityList from "./UniversityList";

function CountryInput({ defaultCountry }) {
  const [country, setCountry] = useState(defaultCountry);

  return (
    <div>
      <div>
        <label>Country: </label>
        <input value={country} onChange={(e) => setCountry(e.target.value)} />
      </div>
      <UniversityList country={country} />
    </div>
  );
}

export default CountryInput;
