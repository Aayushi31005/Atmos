import { env } from "../../config/env";

const BASE_URL = "https://api.weatherapi.com/v1";

export async function getCurrentWeather(city: string) {
  const response = await fetch(
    `${BASE_URL}/current.json?key=${env.weatherApiKey}&q=${city}&aqi=yes`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather");
  }

  return response.json();
}
export async function getForecast(city: string) {
  const response = await fetch(
    `${BASE_URL}/forecast.json?key=${env.weatherApiKey}&q=${city}&days=1&aqi=yes`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch forecast");
  }

  return response.json();
}