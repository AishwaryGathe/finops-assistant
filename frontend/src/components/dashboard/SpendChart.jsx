import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function SpendChart({ data }) {

  return (

    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 h-[420px]">

      <h3 className="text-xl font-semibold mb-6">
        AWS Service Spend
      </h3>

      <ResponsiveContainer width="100%" height="90%">

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="service" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="amount"
            stroke="#3b82f6"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default SpendChart;