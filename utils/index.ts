export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "82f0fd48e8mshce6818996ecef8ap128f5cjsn510233156868",

    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await response.json();
  return result;
}
