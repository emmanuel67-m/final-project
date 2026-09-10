import React from "react";

 function DashboardCard({
  label,
  value,
  change,
  icon: Icon,
  accent = "green",
}) {
  const cls =
    {
      green: "bg-green-100 text-green-800",
      yellow: "bg-yellow-100 text-yellow-800",
      blue: "bg-blue-100 text-blue-800",
      purple: "bg-purple-100 text-purple-800",
    }[accent] || "bg-green-100 text-green-800";

  return (
    <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-card">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-500">
            {label}
          </p>

          <p className="mt-2 font-display text-2xl font-extrabold text-slate-900">
            {value}
          </p>

          {change && (
            <p className="mt-2 text-xs font-semibold text-green-700">
              {change}
            </p>
          )}
        </div>

        {Icon && (
          <span className={`rounded-xl p-3 ${cls}`}>
            <Icon size={20} />
          </span>
        )}
      </div>
    </div>
  );
}


export default DashboardCard;