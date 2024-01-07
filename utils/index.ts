import { CarProps } from "@/app/types";

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "82f0fd48e8mshce6818996ecef8ap128f5cjsn510233156868",

    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera",
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

// URL IS INVALID NOW - SITE CHANGED POLICY SO IMAGES OF DIFFERENT CARS DONT WORK  2.09.10YT
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn-imagin.studio/getimage");

  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split("")[0]);

  url.searchParams.append("zoomType", "fullscreen");

  url.searchParams.append("angle", `${angle}`);

  url.searchParams.append("modelYear", `${year}`);
  return `${url}`;
};
