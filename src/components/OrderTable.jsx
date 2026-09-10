import React from "react";

import StatusBadge from "./StatusBadge";

 function OrderTable({ orders }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-green-100 bg-white shadow-card">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-green-50 text-xs uppercase tracking-wide text-green-800">
            <tr>
              <th className="px-5 py-4">
                Order ID
              </th>

              <th className="px-5 py-4">
                Buyer
              </th>

              <th className="px-5 py-4">
                Product
              </th>

              <th className="px-5 py-4">
                Quantity
              </th>

              <th className="px-5 py-4">
                Amount
              </th>

              <th className="px-5 py-4">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {orders.map((o) => (
              <tr
                key={o.id}
                className="hover:bg-green-50/40"
              >
                <td className="px-5 py-4 font-bold text-green-800">
                  {o.id}
                </td>

                <td className="px-5 py-4 font-semibold text-slate-700">
                  {o.buyer}
                </td>

                <td className="px-5 py-4 text-slate-600">
                  {o.product}
                </td>

                <td className="px-5 py-4 text-slate-600">
                  {o.quantity}
                </td>

                <td className="px-5 py-4 font-bold text-slate-800">
                  ₦{o.amount.toLocaleString()}
                </td>

                <td className="px-5 py-4">
                  <StatusBadge status={o.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default OrderTable;