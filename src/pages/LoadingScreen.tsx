import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 2500);

    const messages = [
        "Analyzing weather patterns...",
        "Tracking wind systems...",
        "Collecting forecast data...",
        "Generating insights..."
    ];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % messages.length;
      setCurrentMessage(messages[i]);
    }, 700);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const [currentMessage, setCurrentMessage] = useState(
    "Analyzing weather patterns..."
  );

  return (
    <div className="min-h-screen bg-[#020B2D] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-6">
          Atmos
        </h1>

        <div className="animate-pulse">
          <p className="text-cyan-400 text-xl">
            {currentMessage}
          </p>

          <p className="text-slate-400 mt-4">
            Gathering atmospheric intelligence
          </p>
        </div>
      </div>
    </div>
  );
}