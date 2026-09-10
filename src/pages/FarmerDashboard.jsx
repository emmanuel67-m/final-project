import React from "react";
import {Plus,ShoppingBasket,ClipboardList,WalletCards,TrendingUp,ArrowUpRight,Edit3,} from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import DashboardCard from "../components/DashboardCard";
import OrderTable from "../components/OrderTable";
import StatusBadge from "../components/StatusBadge";
import Button from "../components/Button";
import { orders } from "../data/orders";
import { products } from "../data/products";

 function FarmerDashboard() {
  return (
    <DashboardLayout
      role="farmer"
      title="Farmer dashboard"
      subtitle="Keep your produce, orders and earnings moving."
    >
      {/* Welcome */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold text-green-700">
            Good morning, Abdulrahman Farms
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Here’s what’s happening with your farm today.
          </p>
        </div>

        <Link to="/farmer/add-produce">
          <Button>
            <Plus size={17} />
            Add Produce
          </Button>
        </Link>
      </div>

      {/* Dashboard Cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardCard
          label="Total Sales"
          value="₦3.84m"
          change="↑ 12.4% this month"
          icon={TrendingUp}
        />

        <DashboardCard
          label="Pending Orders"
          value="8"
          change="3 need your action"
          icon={ClipboardList}
          accent="yellow"
        />

        <DashboardCard
          label="Active Listings"
          value="12"
          change="4 low stock"
          icon={ShoppingBasket}
          accent="blue"
        />

        <DashboardCard
          label="Available Balance"
          value="₦486,200"
          change="Next payout Sep 12"
          icon={WalletCards}
          accent="purple"
        />
      </div>

      {/* Earnings & Performance */}
      <div className="mt-6 grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        {/* Earnings Overview */}
        <section className="rounded-2xl border border-green-100 bg-white p-5 shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-display font-extrabold">
                Earnings overview
              </h2>

              <p className="text-xs text-slate-500">
                Last 7 months
              </p>
            </div>

            <span className="rounded-lg bg-green-50 px-2 py-1 text-xs font-bold text-green-700">
              +18.6%
            </span>
          </div>

          <div className="mt-7 flex h-52 items-end gap-2 sm:gap-4">
            {[
              38,
              48,
              44,
              62,
              58,
              76,
              68,
              92,
              81,
              100,
              88,
              96,
            ].map((h, i) => (
              <div
                key={i}
                className="flex flex-1 flex-col items-center gap-2"
              >
                <div
                  className="w-full max-w-8 rounded-t-lg bg-green-200 transition hover:bg-green-500"
                  style={{ height: `${h}%` }}
                />

                <span className="text-[10px] text-slate-400">
                  {
                    [
                      "Oct",
                      "Nov",
                      "Dec",
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                    ][i]
                  }
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Farm Performance */}
        <section className="rounded-2xl border border-green-100 bg-green-950 p-6 text-white shadow-card">
          <p className="text-xs font-bold uppercase tracking-widest text-green-400">
            Farm performance
          </p>

          <h2 className="font-display mt-2 text-2xl font-extrabold">
            98% order fulfilment
          </h2>

          <p className="mt-3 text-sm leading-6 text-green-200">
            You’re among the most reliable farms in your area.
            Keep response times low to maintain your badge.
          </p>

          <div className="mt-7 h-2 rounded-full bg-green-900">
            <div className="h-2 w-[98%] rounded-full bg-green-400" />
          </div>

          <div className="mt-4 flex justify-between text-xs text-green-300">
            <span>Reliability</span>
            <span>98%</span>
          </div>
        </section>
      </div>

      {/* Recent Orders */}
      <section className="mt-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="font-display text-xl font-extrabold">
              Recent Orders
            </h2>

            <p className="text-sm text-slate-500">
              Latest buyer activity
            </p>
          </div>

          <Link
            to="/farmer/dashboard?tab=orders"
            className="text-sm font-bold text-green-800"
          >
            View all
          </Link>
        </div>

        <OrderTable orders={orders.slice(0, 5)} />
      </section>

      {/* My Listings */}
      <section className="mt-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="font-display text-xl font-extrabold">
              My Listings
            </h2>

            <p className="text-sm text-slate-500">
              Your active produce
            </p>
          </div>

          <Link
            to="/farmer/listings"
            className="text-sm font-bold text-green-800"
          >
            Manage listings
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((p) => (
            <div
              key={p.id}
              className="overflow-hidden rounded-2xl border border-green-100 bg-white shadow-card"
            >
              <img
                src={p.image}
                alt={p.name}
                className="h-32 w-full object-cover"
              />

              <div className="p-4">
                <div className="flex justify-between">
                  <h3 className="font-bold">{p.name}</h3>

                  <button className="text-slate-400">
                    <Edit3 size={15} />
                  </button>
                </div>

                <p className="mt-1 text-xs text-slate-500">
                  {p.quantity} {p.unit} · ₦
                  {p.price.toLocaleString()}/{p.unit}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <StatusBadge status="Listed" />

                  <span className="text-xs font-bold text-green-700">
                    Live
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
}

 function FarmerListings() {
  return (
    <DashboardLayout
      role="farmer"
      title="My Listings"
      subtitle="Manage what buyers can source from your farm."
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            12 active listings · 2 drafts
          </p>
        </div>

        <Link to="/farmer/add-produce">
          <Button>
            <Plus size={17} />
            Add Produce
          </Button>
        </Link>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="overflow-hidden rounded-2xl border border-green-100 bg-white shadow-card"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-44 w-full object-cover"
            />

            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display font-extrabold">
                    {p.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {p.quantity} {p.unit} available
                  </p>
                </div>

                <StatusBadge status="Listed" />
              </div>

              <div className="mt-3 flex justify-between text-sm">
                <span className="text-slate-500">
                  Price
                </span>

                <strong>
                  ₦{p.price.toLocaleString()}/{p.unit}
                </strong>
              </div>

              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-green-200 py-2.5 text-sm font-bold text-green-800 hover:bg-green-50">
                <Edit3 size={15} />
                Edit listing
              </button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}



 function AddProduce() {
  const [published, setPublished] = React.useState(false);

  return (
    <DashboardLayout
      role="farmer"
      title="Add Produce"
      subtitle="Publish a clear, buyer-ready produce listing."
    >
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-card sm:p-7">
          {/* Header */}
          <div className="mb-7">
            <h2 className="font-display text-xl font-extrabold">
              Produce details
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              The more accurate your listing, the easier it is
              for buyers to order.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setPublished(true);
            }}
            className="grid gap-5 md:grid-cols-2"
          >
            {/* Product Name */}
            <label className="text-sm font-semibold">
              Product name

              <input
                required
                placeholder="e.g. Fresh Tomatoes"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
              />
            </label>

            {/* Category */}
            <label className="text-sm font-semibold">
              Category

              <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3">
                <option>Vegetables</option>
                <option>Grains</option>
                <option>Tubers</option>
                <option>Legumes</option>
                <option>Fruits</option>
                <option>Spices</option>
              </select>
            </label>

            {/* Quantity */}
            <label className="text-sm font-semibold">
              Quantity

              <input
                required
                type="number"
                placeholder="500"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
              />
            </label>

            {/* Unit */}
            <label className="text-sm font-semibold">
              Unit

              <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3">
                <option>kg</option>
                <option>tonne</option>
                <option>bags</option>
                <option>crates</option>
              </select>
            </label>

            {/* Price */}
            <label className="text-sm font-semibold">
              Price per unit

              <input
                required
                type="number"
                placeholder="850"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
              />
            </label>

            {/* Quality */}
            <label className="text-sm font-semibold">
              Quality / grade

              <select className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3">
                <option>Grade A</option>
                <option>Premium</option>
                <option>Grade B</option>
              </select>
            </label>

            {/* Harvest Date */}
            <label className="text-sm font-semibold">
              Harvest date

              <input
                required
                type="date"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
              />
            </label>

            {/* Location */}
            <label className="text-sm font-semibold">
              Location

              <input
                required
                placeholder="Ilorin, Kwara State"
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
              />
            </label>

            {/* Product Image */}
            <label className="text-sm font-semibold md:col-span-2">
              Product image

              <input
                type="file"
                accept="image/*"
                className="mt-2 w-full rounded-xl border border-dashed border-green-200 bg-green-50 px-4 py-3 text-sm"
              />
            </label>

            {/* Description */}
            <label className="text-sm font-semibold md:col-span-2">
              Description

              <textarea
                rows="4"
                placeholder="Describe freshness, packaging, expected availability and any useful buyer notes..."
                className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
              />
            </label>

            {/* Submit */}
            <div className="md:col-span-2">
              <Button className="w-full sm:w-auto">
                <Plus size={17} />
                Publish Produce
              </Button>
            </div>
          </form>

          {/* Success Message */}
          {published && (
            <div className="mt-5 rounded-xl bg-green-50 p-4 text-sm font-bold text-green-800">
              Produce listed successfully! Buyers can now
              discover this listing.
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}


export { FarmerDashboard, FarmerListings, AddProduce };