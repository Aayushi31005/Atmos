import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type Props = {
  data: {
    time: string;
    temp: number;
  }[];
};

export function TemperatureChart({
  data,
}: Props) {
  return (
    <ResponsiveContainer
      width="100%"
      height={350}
    >
      <LineChart data={data}>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="#1e293b"
        />

        <XAxis
          dataKey="time"
          interval={3}
          tick={{ fill: "#94a3b8" }}
        />

        <YAxis
          tick={{ fill: "#94a3b8" }}
        />

        <Tooltip
          contentStyle={{
            background: "#0f172a",
            border: "1px solid #1e293b",
            borderRadius: "12px",
          }}
        />

        <Line
          type="monotone"
          dataKey="temp"
          stroke="#22d3ee"
          strokeWidth={4}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}