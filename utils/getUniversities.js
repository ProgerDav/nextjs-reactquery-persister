const getUniversitiesInCountry = async (country) => {
  await new Promise((r) => setTimeout(() => r(), 5000));

  const response = await fetch(
    `http://universities.hipolabs.com/search?country=${country}`,
    {
      method: "GET",
    }
  );

  const data = await response.json();

  return data;
};

export default getUniversitiesInCountry;
