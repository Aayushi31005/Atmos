import { useState } from "react";

type Props = {
  onSearch: (city: string) => void;
};

export function CitySearch({ onSearch }: Props) {
  const [city, setCity] = useState("");

  return (
    <div className="mb-6 flex gap-3">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search city..."
        className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none"
      />

      <button
        onClick={() => onSearch(city)}
        className="rounded-xl bg-cyan-500 px-6 py-3 font-medium text-black"
      >
        Search
      </button>
    </div>
  );
}