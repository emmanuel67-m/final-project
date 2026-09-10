import React from "react";
import {ShoppingBag,Clock3,Truck,WalletCards,ArrowRight,} from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import DashboardCard from "../components/DashboardCard";
import ProductCard from "../components/ProductCard";
import OrderTable from "../components/OrderTable";
import { products } from "../data/products";
import { orders } from "../data/orders";


function BuyerDashboard() {
  return (
    <DashboardLayout
      role="buyer"
      title="Buyer dashboard"
      subtitle="Source produce, manage orders and track deliveries."
    >
      {/* Welcome Message */}
      <div>
        <p className="text-sm font-semibold text-green-700">
          Welcome back, TasteBite Restaurants
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Your procurement overview for today.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardCard
          label="Total Orders"
          value="48"
          change="↑ 8 this month"
          icon={ShoppingBag}
        />

        <DashboardCard
          label="Pending Orders"
          value="6"
          change="2 awaiting confirmation"
          icon={Clock3}
          accent="yellow"
        />

        <DashboardCard
          label="Active Deliveries"
          value="3"
          change="All on schedule"
          icon={Truck}
          accent="blue"
        />

        <DashboardCard
          label="Total Spent"
          value="₦8.42m"
          change="Across 48 orders"
          icon={WalletCards}
          accent="purple"
        />
      </div>

      {/* Recommended Produce */}
      <section className="mt-7">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="font-display text-xl font-extrabold">
              Recommended Produce
            </h2>

            <p className="text-sm text-slate-500">
              Fresh listings matched to your buying patterns.
            </p>
          </div>

          <Link
            to="/marketplace"
            className="flex items-center gap-1 text-sm font-bold text-green-800"
          >
            Marketplace
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(4, 8).map((p) => (
            <ProductCard
              key={p.id}
              product={p}
            />
          ))}
        </div>
      </section>

      {/* Recent Orders */}
      <section className="mt-7">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="font-display text-xl font-extrabold">
              Recent Orders
            </h2>

            <p className="text-sm text-slate-500">
              Your latest purchases
            </p>
          </div>

          <Link
            to="/buyer/dashboard?tab=orders"
            className="text-sm font-bold text-green-800"
          >
            View all
          </Link>
        </div>

        <OrderTable orders={orders.slice(0, 6)} />
      </section>
    </DashboardLayout>
  );
}

export default BuyerDashboard;