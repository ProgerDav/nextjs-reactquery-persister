import React from "react";
import CountryInput from "../components/CountryInput";

function ClientOnly() {
  return <CountryInput defaultCountry="armenia" />;
}

export default ClientOnly;
