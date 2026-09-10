import React from "react";

function StatusBadge({ status }) {
  const map = {
    Listed: "bg-slate-100 text-slate-700",
    Ordered: "bg-blue-50 text-blue-700",
    Confirmed: "bg-indigo-50 text-indigo-700",
    "Ready for Pickup": "bg-yellow-50 text-yellow-700",
    "Picked Up": "bg-orange-50 text-orange-700",
    "In Transit": "bg-purple-50 text-purple-700",
    Delivered: "bg-green-50 text-green-700",
    Paid: "bg-emerald-100 text-emerald-800",
    Pending: "bg-yellow-50 text-yellow-700",
  };

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${
        map[status] || "bg-slate-100 text-slate-700"
      }`}
    >
      {status}
    </span>
  );
}


export default StatusBadge;