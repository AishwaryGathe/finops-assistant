function AIInsights({ data }) {

  if (!data) return null;

  return (

    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">

      <h3 className="text-xl font-semibold mb-6">
        AI Insights
      </h3>

      <div className="space-y-4 text-slate-300 leading-7">

        <p>
          ⚠ {data.anomaly}
        </p>

        <p>
          💰 Estimated savings opportunity: ${data.estimatedSavings}
        </p>

        <p>
          ☁ Highest AWS spend: {data.highestService}
        </p>

        <p>
          🖥 Idle resources detected: {data.idleResources}
        </p>

      </div>

    </div>
  );
}

export default AIInsights;