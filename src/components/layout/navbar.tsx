import { CloudSun } from "lucide-react";

export function Navbar() {
  return (
    <header className="border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CloudSun className="h-7 w-7 text-cyan-400" />
          <h1 className="text-xl font-bold">Atmos</h1>
        </div>

        <span className="text-slate-400 text-sm">
          Weather Intelligence Dashboard
        </span>
      </div>
    </header>
  );
}