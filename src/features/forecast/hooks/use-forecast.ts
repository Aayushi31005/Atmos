import { useQuery } from "@tanstack/react-query";
import { getForecast } from "../../../services/api/weather-api";

export function useForecast(city: string) {
  return useQuery({
    queryKey: ["forecast", city],
    queryFn: () => getForecast(city),
  });
}