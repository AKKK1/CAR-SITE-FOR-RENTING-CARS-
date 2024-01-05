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

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;

  const milieageFactor = 0.1;

  const ageFactor = 0.05;

  // calculate  additional rate based on mileage and age
  const milieageRate = city_mpg * milieageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day

  const rentalRatePerDay = basePricePerDay + milieageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
