import React from "react";
import { Users,Tractor,Truck,ShoppingBasket, ClipboardList, WalletCards, ShieldAlert,} from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";
import DashboardCard from "../components/DashboardCard";
import StatusBadge from "../components/StatusBadge";
import { farmers, buyers, transporters } from "../data/users";
import { orders } from "../data/orders";
import { deliveries } from "../data/deliveries";

 function AdminDashboard() {
  const users = [
    ...farmers.slice(0, 3).map((x) => ({
      ...x,
      role: "Farmer",
    })),

    ...buyers.slice(0, 2).map((x) => ({
      ...x,
      role: "Buyer",
    })),

    ...transporters.slice(0, 2).map((x) => ({
      ...x,
      role: "Transporter",
    })),
  ];

  const activeDeliveries = deliveries.filter(
    (d) => d.status === "In Transit"
  ).length;

  return (
    <DashboardLayout
      role="admin"
      title="Admin dashboard"
      subtitle="Monitor the AgriConnect network and marketplace activity."
    >
      {/* Dashboard Cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardCard
          label="Total Users"
          value="1,284"
          change="↑ 11.2% this month"
          icon={Users}
        />

        <DashboardCard
          label="Active Farmers"
          value="612"
          change="48 newly verified"
          icon={Tractor}
          accent="green"
        />

        <DashboardCard
          label="Active Buyers"
          value="354"
          change="32 new businesses"
          icon={ShoppingBasket}
          accent="yellow"
        />

        <DashboardCard
          label="Active Transporters"
          value="318"
          change="19 available now"
          icon={Truck}
          accent="blue"
        />

        <DashboardCard
          label="Total Orders"
          value="6,842"
          change="↑ 14.8% this month"
          icon={ClipboardList}
        />

        <DashboardCard
          label="Completed Deliveries"
          value="5,970"
          change="87.2% fulfilment"
          icon={Truck}
          accent="purple"
        />

        <DashboardCard
          label="Platform Revenue"
          value="₦18.6m"
          change="↑ 9.4% this month"
          icon={WalletCards}
          accent="green"
        />

        <DashboardCard
          label="Open Disputes"
          value="17"
          change="5 need review"
          icon={ShieldAlert}
          accent="yellow"
        />
      </div>

      {/* Users & Orders */}
      <div className="mt-7 grid gap-6 xl:grid-cols-2">
        {/* Users Section */}
        <section>
          <div className="mb-4">
            <h2 className="font-display text-xl font-extrabold">
              Users
            </h2>

            <p className="text-sm text-slate-500">
              Recently active marketplace participants.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-green-100 bg-white shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead className="bg-green-50 text-xs uppercase text-green-800">
                  <tr>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Role</th>
                    <th className="px-4 py-3">Location</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>

                <tbody className="divide-y">
                  {users.map((u) => (
                    <tr key={u.id}>
                      <td className="px-4 py-3 font-bold">
                        {u.name}
                      </td>

                      <td className="px-4 py-3 text-slate-500">
                        {u.role}
                      </td>

                      <td className="px-4 py-3 text-slate-500">
                        {u.location}
                      </td>

                      <td className="px-4 py-3">
                        <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-bold text-green-700">
                          Active
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Orders & Deliveries Section */}
        <section>
          <div className="mb-4">
            <h2 className="font-display text-xl font-extrabold">
              Orders & Deliveries
            </h2>

            <p className="text-sm text-slate-500">
              Monitor transactions and logistics health.
            </p>
          </div>

          <div className="space-y-3">
            {orders.slice(0, 5).map((o) => (
              <div
                key={o.id}
                className="flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-4 shadow-card"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700">
                  <ClipboardList size={18} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold">
                    {o.id} · {o.product}
                  </p>

                  <p className="truncate text-xs text-slate-500">
                    {o.buyer} · {o.quantity}
                  </p>
                </div>

                <StatusBadge status={o.status} />
              </div>
            ))}

            {/* Network Pulse */}
            <div className="rounded-2xl bg-green-950 p-5 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-green-400">
                Network pulse
              </p>

              <p className="mt-2 font-display text-xl font-extrabold">
                {activeDeliveries} deliveries are moving right now
              </p>

              <p className="mt-2 text-sm text-green-200">
                Keep an eye on pickup confirmations and dispute resolution.
              </p>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}


export default AdminDashboard;