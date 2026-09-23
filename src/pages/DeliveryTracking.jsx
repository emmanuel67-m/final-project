import React from "react";
import {MapPin,Truck,Package,Clock3,} from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";
import StatusTracker from "../components/StatusTracker";
import StatusBadge from "../components/StatusBadge";
import { deliveries } from "../data/deliveries";


function DeliveryTracking() {
  const d = deliveries[0];
  const session = JSON.parse(localStorage.getItem("easyeasy_session") || "null");
  const role = session?.role || "farmer";

  return (
    <DashboardLayout
      role={role}
      title="Delivery Tracking"
      subtitle={
        role === "transporter"
          ? "Manage your active routes and delivery progress."
          : "Follow your produce from pickup to destination."
      }
    >
      <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        {/* Tracking Section */}
        <section>
          <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-card">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Order {d.orderId}
                </p>

                <h2 className="font-display mt-1 text-2xl font-extrabold">
                  {d.cargo}
                </h2>
              </div>

              <StatusBadge status={d.status} />
            </div>

            {/* Map */}
            <div className="mt-6 overflow-hidden rounded-2xl bg-green-50">
              <div className="relative h-72 bg-[linear-gradient(135deg,#ecfdf5,#fefce8)]">
                {/* Grid Background */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(#86efac 1px, transparent 1px), linear-gradient(90deg, #86efac 1px, transparent 1px)",
                    backgroundSize: "38px 38px",
                  }}
                />

                {/* Farm */}
                <div className="absolute left-[13%] top-[55%] flex -translate-y-1/2 items-center gap-2">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-800 text-white shadow-lg">
                    <Package size={19} />
                  </span>

                  <span className="rounded-lg bg-white px-2 py-1 text-xs font-bold shadow">
                    Pickup
                  </span>
                </div>

                {/* In Transit */}
                <div className="absolute left-[46%] top-[38%] flex -translate-y-1/2 items-center gap-2">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow-500 text-white shadow-lg">
                    <Truck size={19} />
                  </span>

                  <span className="rounded-lg bg-white px-2 py-1 text-xs font-bold shadow">
                    In transit
                  </span>
                </div>

                <div className="absolute right-[10%] top-[55%] flex -translate-y-1/2 items-center gap-2">
                  <span className="rounded-lg bg-white px-2 py-1 text-xs font-bold shadow">
                    Destination
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 text-white shadow-lg">
                    <MapPin size={19} />
                  </span>
                </div>

                {/* Route Line */}
                <svg
                  className="absolute inset-x-[17%] top-[43%] h-16 w-[68%]"
                  viewBox="0 0 600 80"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M10 58 C150 0 220 80 330 32 S480 15 590 58"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="4"
                    strokeDasharray="9 9"
                  />
                </svg>
              </div>
            </div>

            {/* Status Tracker */}
            <div className="mt-6">
              <StatusTracker current={d.status} />
            </div>
          </div>
        </section>

        {/* Delivery Details */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-card">
            <h3 className="font-display font-extrabold">
              Delivery details
            </h3>

            <div className="mt-5 space-y-4">
              {[
                ["Pickup", d.pickup, MapPin],
                ["Destination", d.destination, MapPin],
                ...(role === "transporter"
                  ? []
                  : [["Delivery fee", `₦${d.fee.toLocaleString()}`, WalletIcon]]),
                ["Estimated arrival", d.eta, Clock3],
              ].map(([l, v, Icon]) => (
                <div key={l} className="flex gap-3">
                  <span className="rounded-lg bg-green-50 p-2 text-green-700">
                    <Icon size={16} />
                  </span>

                  <div>
                    <p className="text-xs text-slate-400">
                      {l}
                    </p>

                    <p className="text-sm font-bold text-slate-800">
                      {v}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Route Information */}
          <div className="rounded-2xl border border-green-100 bg-green-950 p-5 text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-green-400">
              Route
            </p>

            <p className="mt-2 font-display text-xl font-extrabold">
              Pickup → In transit → Destination
            </p>

            <p className="mt-2 text-sm leading-6 text-green-200">
              Your shipment status is updated as it moves through each stage.
            </p>
          </div>
        </aside>
      </div>
    </DashboardLayout>
  );
}

function WalletIcon() {
  return (
    <span className="text-xs font-black">
      ₦
    </span>
  );
}

export default DeliveryTracking;