import KPICard from "./KPICard";

function KPIGrid({ data }) {

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      <KPICard
        title="Total AWS Spend"
        value={`$${data.totalCost}`}
      />

      <KPICard
        title="Estimated Savings"
        value={`$${data.estimatedSavings}`}
      />

      <KPICard
        title="Highest Service"
        value={data.highestService}
      />

      <KPICard
        title="Idle Resources"
        value={data.idleResources}
      />

    </div>
  );
}

export default KPIGrid;