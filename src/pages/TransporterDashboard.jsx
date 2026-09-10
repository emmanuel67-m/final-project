import React, { useState } from "react";
import {BriefcaseBusiness,Truck, WalletCards, CheckCircle2, MapPin, ArrowRight, CarFront,} from "lucide-react";
import{ Link } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import DashboardCard from "../components/DashboardCard";
import Button from "../components/Button";
import StatusBadge from "../components/StatusBadge";
import { deliveries } from "../data/deliveries";


function TransporterDashboard() {
  return (
    <DashboardLayout
      role="transporter"
      title="Transporter dashboard"
      subtitle="Find routes, move cargo and grow your earnings."
    >
      <div>
        <p className="text-sm font-semibold text-green-700">
          Good morning, Musa Logistics
        </p>

        <p className="mt-1 text-sm text-slate-500">
          There are delivery opportunities that match your vehicle today.
        </p>
      </div>

      {/* Dashboard Stats */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardCard
          label="Available Jobs"
          value="12"
          change="4 near Ilorin"
          icon={BriefcaseBusiness}
        />

        <DashboardCard
          label="Active Delivery"
          value="1"
          change="ETA 6:30 PM"
          icon={Truck}
          accent="yellow"
        />

        <DashboardCard
          label="Completed Deliveries"
          value="86"
          change="↑ 14 this month"
          icon={CheckCircle2}
          accent="blue"
        />

        <DashboardCard
          label="Total Earnings"
          value="₦1.26m"
          change="+16% this month"
          icon={WalletCards}
          accent="purple"
        />
      </div>

      {/* Available Delivery Jobs */}
      <section className="mt-7">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="font-display text-xl font-extrabold">
              Available Delivery Jobs
            </h2>

            <p className="text-sm text-slate-500">
              Matched to your service area and capacity.
            </p>
          </div>

          <Link
            to="/transporter/jobs"
            className="text-sm font-bold text-green-800"
          >
            See all jobs
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {deliveries
            .slice(0, 4)
            .map((d) => (
              <JobCard key={d.id} delivery={d} />
            ))}
        </div>
      </section>

      {/* Vehicle Profile */}
      <section className="mt-7 rounded-2xl border border-green-100 bg-white p-5 shadow-card">
        <div className="flex items-center gap-3">
          <CarFront className="text-green-700" />

          <div>
            <h2 className="font-display font-extrabold">
              Vehicle profile
            </h2>

            <p className="text-sm text-slate-500">
              Small Truck · 2,500 kg capacity · North Central
            </p>
          </div>

          <Link
            to="/transporter/dashboard?tab=vehicle"
            className="ml-auto text-sm font-bold text-green-800"
          >
            Update
          </Link>
        </div>
      </section>
    </DashboardLayout>
  );
}

function JobCard({ delivery }) {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-card">
      {/* Job Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-slate-400">
          {delivery.id}
        </span>

        <StatusBadge
          status={accepted ? "Confirmed" : delivery.status}
        />
      </div>

      {/* Route */}
      <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase text-slate-400">
            Pickup
          </p>

          <p className="mt-1 flex items-start gap-1 text-sm font-bold text-slate-800">
            <MapPin
              size={15}
              className="mt-0.5 text-green-600"
            />
            {delivery.pickup}
          </p>
        </div>

        <ArrowRight
          className="text-slate-300"
          size={18}
        />

        <div>
          <p className="text-[10px] font-bold uppercase text-slate-400">
            Destination
          </p>

          <p className="mt-1 flex items-start gap-1 text-sm font-bold text-slate-800">
            <MapPin
              size={15}
              className="mt-0.5 text-green-600"
            />
            {delivery.destination}
          </p>
        </div>
      </div>

      {/* Delivery Information */}
      <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-green-50 p-3 text-xs">
        <div>
          <span className="text-slate-500">Cargo</span>
          <p className="mt-1 font-bold">
            {delivery.cargo}
          </p>
        </div>

        <div>
          <span className="text-slate-500">Vehicle</span>
          <p className="mt-1 font-bold">
            {delivery.vehicle}
          </p>
        </div>

        <div>
          <span className="text-slate-500">Distance</span>
          <p className="mt-1 font-bold">
            {delivery.distance}
          </p>
        </div>

        <div>
          <span className="text-slate-500">Delivery fee</span>
          <p className="mt-1 font-extrabold text-green-800">
            ₦{delivery.fee.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Accept Job */}
      <Button
        onClick={() => setAccepted(true)}
        className="mt-4 w-full"
      >
        {accepted ? "Delivery accepted ✓" : "Accept Job"}
      </Button>
    </div>
  );
}

export function DeliveryJobs() {
  return (
    <DashboardLayout
      role="transporter"
      title="Available Jobs"
      subtitle="Choose deliveries that fit your route and vehicle."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {deliveries.map((d) => (
          <JobCard
            key={d.id}
            delivery={d}
          />
        ))}
      </div>
    </DashboardLayout>
  );
}


export default DeliveryJobs