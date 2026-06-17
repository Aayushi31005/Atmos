import { useCurrentWeather } from "../hooks/use-current-weather";
import { MetricCard } from "../../../components/ui/metric-card";

type Props = {
  city: string;
};

export function WeatherMetrics({ city }: Props) {
  const { data, isLoading } =
    useCurrentWeather(city);

  if (isLoading || !data) {
    return null;
  }

  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <MetricCard
        title="Humidity"
        value={`${data.current.humidity}%`}
      />

      <MetricCard
        title="Wind Speed"
        value={`${data.current.wind_kph} km/h`}
      />

      <MetricCard
        title="Feels Like"
        value={`${data.current.feelslike_c}°`}
      />

      <MetricCard
        title="UV Index"
        value={data.current.uv}
      />
    </div>
  );
}