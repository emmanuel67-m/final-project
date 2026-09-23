import React, { useState } from "react";
import {ShieldCheck,MapPin,CalendarDays,PackageCheck,Edit3,Star,} from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";
import RatingStars from "../components/RatingStars";
import { farmers } from "../data/users";
import { getProducts } from "../data/products";


function Profile() {
  const [f, setF] = useState(false);
  const [products] = useState(() => getProducts());
  const session = JSON.parse(localStorage.getItem("easyeasy_session") || "null");
  const role = session?.role || "farmer";
  const farmer = farmers[0];

  if (role === "transporter") {
    return (
      <DashboardLayout
        role="transporter"
        title="Profile"
        subtitle="Manage your transporter profile and vehicle details."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <section className="rounded-3xl border border-green-100 bg-white p-6 shadow-card">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-green-100 text-3xl font-extrabold text-green-800">
              ML
            </div>
            <h1 className="font-display mt-5 text-2xl font-extrabold">
              Musa Logistics
            </h1>
            <p className="mt-1 text-sm text-slate-500">Transporter account</p>
            <div className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-sm">
              <p><span className="text-slate-500">Vehicle:</span> Small Truck</p>
              <p><span className="text-slate-500">Capacity:</span> 2,500 kg</p>
              <p><span className="text-slate-500">Service area:</span> North Central</p>
            </div>
          </section>

          <section className="rounded-3xl border border-green-100 bg-white p-6 shadow-card">
            <h2 className="font-display text-xl font-extrabold">Transport performance</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[["86", "Completed deliveries"], ["98%", "On-time rate"], ["4.9", "Average rating"]].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-green-50 p-4">
                  <p className="font-display text-2xl font-extrabold text-green-900">{value}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      role="farmer"
      title="Profile"
      subtitle="Build trust with a complete public profile."
    >
      <div className="overflow-hidden rounded-3xl border border-green-100 bg-white shadow-card">
        {/* Profile Header */}
        <div className="h-36 bg-green-950 sm:h-44" />

        <div className="relative px-5 pb-6 sm:px-8">
          <img
            src={farmer.image}
            alt={farmer.name}
            className="-mt-14 h-28 w-28 rounded-3xl border-4 border-white object-cover shadow-lg"
          />

          <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="font-display text-2xl font-extrabold">
                  {farmer.name}
                </h1>

                <span className="flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-1 text-xs font-bold text-green-800">
                  <ShieldCheck size={13} />
                  Verified Farmer
                </span>
              </div>

              <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                <MapPin size={15} />
                {farmer.location}
              </p>

              <div className="mt-2 flex items-center gap-3">
                <RatingStars
                  rating={farmer.rating}
                  showValue
                />

                <span className="text-xs text-slate-400">
                  {farmer.orders} completed orders
                </span>
              </div>
            </div>

            {/* Edit Profile */}
            <button
              onClick={() => setF(!f)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-200 px-4 py-2.5 text-sm font-bold text-green-800 hover:bg-green-50"
            >
              <Edit3 size={15} />
              {f ? "Editing..." : "Edit profile"}
            </button>
          </div>

          {/* Profile Content */}
          <div className="mt-7 grid gap-6 border-t border-slate-100 pt-6 lg:grid-cols-[1fr_1.4fr]">
            {/* About */}
            <div>
              <h2 className="font-display font-extrabold">
                About
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {farmer.about}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-green-50 p-3">
                  <CalendarDays
                    size={17}
                    className="text-green-700"
                  />

                  <p className="mt-2 text-xs text-slate-500">
                    Farming experience
                  </p>

                  <p className="font-bold">
                    {farmer.years} years
                  </p>
                </div>

                <div className="rounded-xl bg-green-50 p-3">
                  <PackageCheck
                    size={17}
                    className="text-green-700"
                  />

                  <p className="mt-2 text-xs text-slate-500">
                    Completed orders
                  </p>

                  <p className="font-bold">
                    {farmer.orders}
                  </p>
                </div>
              </div>
            </div>

            {/* Available Produce */}
            <div>
              <div className="flex items-center justify-between">
                <h2 className="font-display font-extrabold">
                  Available produce
                </h2>

                <span className="text-xs font-bold text-green-700">
                  {
                    products.filter(
                      (p) => p.farmerId === farmer.id
                    ).length
                  }{" "}
                  listings
                </span>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {products
                  .filter((p) => p.farmerId === farmer.id)
                  .map((p) => (
                    <div
                      key={p.id}
                      className="flex items-center gap-3 rounded-xl border border-slate-100 p-3"
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-14 w-14 rounded-lg object-cover"
                      />

                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold">
                          {p.name}
                        </p>

                        <p className="text-xs text-slate-500">
                          {p.quantity} {p.unit} · ₦
                          {p.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <section className="mt-7">
        <h2 className="font-display text-xl font-extrabold">
          Reviews
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            [
              "TasteBite Restaurants",
              "Great communication and fresh produce.",
              5,
            ],
            [
              "FreshMart Retail",
              "Reliable quantities every week.",
              5,
            ],
            [
              "NaijaFoods Processing",
              "Professional and easy to work with.",
              4,
            ],
          ].map(([n, t, r]) => (
            <div
              key={n}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-card"
            >
              <div className="flex items-center justify-between">
                <RatingStars rating={r} />

                <Star
                  size={16}
                  className="text-yellow-500"
                />
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                “{t}”
              </p>

              <p className="mt-3 text-xs font-bold">
                {n}
              </p>
            </div>
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Profile;