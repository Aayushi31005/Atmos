import { useForecast } from "../hooks/use-forecast";
import { TemperatureChart } from "../../../components/charts/temperature-chart";

type Props = {
  city: string;
};

export function ForecastChart({
  city,
}: Props) {
  const { data, isLoading } =
    useForecast(city);

  if (isLoading || !data) {
    return null;
  }

  const chartData =
    data.forecast.forecastday[0].hour.map(
      (hour: any) => ({
        time: hour.time.split(" ")[1],
        temp: hour.temp_c,
      })
    );

  return (
    <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8">
      <h2 className="mb-6 text-2xl font-bold">
        24 Hour Temperature Trend
      </h2>

      <TemperatureChart data={chartData} />
    </div>
  );
}
