import { useState } from "react";

import { DashboardLayout } from "../components/layout/dashboard-layout";
import { Navbar } from "../components/layout/navbar";

import { WeatherHero } from "../features/weather/components/weather-hero";
import { CitySearch } from "../features/search/components/city-search";
import { WeatherMetrics } from "../features/weather/components/weather-metric";
import { ForecastChart } from "../features/forecast/components/forecast-chart";

export default function Dashboard() {
  const [city, setCity] = useState("New Delhi");

  return (
    <>
      <Navbar />

      <DashboardLayout>
        <CitySearch onSearch={setCity} />
        <WeatherHero city={city} />
        <WeatherMetrics city={city} />
        <ForecastChart city={city} />
      </DashboardLayout>
    </>
  );
}