import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <h1 className="text-7xl font-black">Atmos</h1>

        <p className="mt-4 text-xl text-slate-400">
          Weather Intelligence Dashboard
        </p>

        <p className="mt-2 text-slate-500">
          Real-time weather insights from cities around the world
        </p>

        <Link
          to="/LoadingScreen"
          className="mt-8 inline-block rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}