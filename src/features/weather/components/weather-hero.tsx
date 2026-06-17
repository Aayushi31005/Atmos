import { useCurrentWeather } from "../hooks/use-current-weather";

type Props = {
  city: string;
};

export function WeatherHero({ city }: Props) {
  const {
    data,
    isLoading,
    error,
  } = useCurrentWeather(city);

  if (isLoading) {
    return (
      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
        Loading weather...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="rounded-3xl border border-red-500 bg-slate-900 p-8">
        Failed to load weather.
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8">
      <p className="text-slate-400">
        {data.location.country}
      </p>

      <h2 className="mt-2 text-4xl font-bold">
        {data.location.name}
      </h2>

      <p className="mt-4 text-6xl font-black">
        {Math.round(data.current.temp_c)}°
      </p>

      <p className="mt-2 text-slate-300">
        {data.current.condition.text}
      </p>
    </div>
  );
}