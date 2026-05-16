function KPICard({ title, value }) {

  return (

    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-lg">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-4">
        {value}
      </h2>

    </div>
  );
}

export default KPICard;