import { useQuery } from "@tanstack/react-query";
import { getCurrentWeather } from "../../../services/api/weather-api";

export function useCurrentWeather(city: string) {
  return useQuery({
    queryKey: ["weather", city],
    queryFn: () => getCurrentWeather(city),
  });
}