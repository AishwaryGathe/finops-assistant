import { useEffect, useState } from "react";

import KPIGrid from "../components/dashboard/KPIGrid";
import SpendChart from "../components/dashboard/SpendChart";
import AIInsights from "../components/dashboard/AIInsights";
import Chatbot from "../components/dashboard/Chatbot";

function Dashboard() {

  const [dashboardData, setDashboardData] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  async function loadDashboard() {

    try {

      const response = await fetch(
        "https://v6otqa5d5i.execute-api.us-east-1.amazonaws.com/prod/chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            message:
              "Give AWS billing dashboard insights with totalCost, highestService, estimatedSavings, idleResources, anomaly and topServices array.",
          }),
        }
      );

      const result =
        await response.json();

      console.log(
        "API RESPONSE:",
        result
      );

      setDashboardData(result);

    } catch (error) {

      console.error(
        "Dashboard Fetch Error:",
        error
      );

    } finally {

      setLoading(false);
    }
  }

  useEffect(() => {

    loadDashboard();

  }, []);

  if (loading) {

    return (

      <div className="bg-slate-950 text-white min-h-screen flex items-center justify-center text-2xl">

        Loading AWS Dashboard...

      </div>
    );
  }

  return (

    <div className="bg-slate-950 min-h-screen text-white p-6">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold">
            AWS FinOps Copilot
          </h1>

          <p className="text-slate-400 mt-2">
            Enterprise Cloud Cost Intelligence
          </p>

        </div>

        <div className="text-emerald-400 font-semibold">
          ● AWS Connected
        </div>

      </div>

      {dashboardData && (

        <>

          <KPIGrid data={dashboardData} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

            <div className="lg:col-span-2">

              <SpendChart
                data={
                  dashboardData.topServices || []
                }
              />

            </div>

            <AIInsights
              data={dashboardData}
            />

          </div>

          <div className="mt-8">

            <Chatbot />

          </div>

        </>

      )}

    </div>
  );
}

export default Dashboard;