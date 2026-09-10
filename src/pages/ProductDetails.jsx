import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {MapPin,PackageCheck,ShieldCheck,MessageSquare,Minus,Plus,Truck,ArrowLeft,} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import RatingStars from "../components/RatingStars";
import { products } from "../data/products";
import { farmers } from "../data/users";


function ProductDetails() {
  const { id } = useParams();

  const p =
    products.find((x) => x.id === Number(id)) || products[0];

  const farmer =
    farmers.find((x) => x.id === p.farmerId) || farmers[0];

  const [qty, setQty] = useState(50);
  const [ordered, setOrdered] = useState(false);

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back to Marketplace */}
        <Link
          to="/marketplace"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-green-800"
        >
          <ArrowLeft size={16} />
          Back to marketplace
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Images */}
          <div>
            <div className="overflow-hidden rounded-3xl bg-green-50">
              <img
                src={p.image}
                alt={p.name}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border-2 border-green-600 p-1">
                <img
                  src={p.image}
                  className="aspect-video w-full rounded-xl object-cover"
                  alt=""
                />
              </div>

              <div className="rounded-2xl bg-green-50 p-5" />

              <div className="rounded-2xl bg-yellow-50 p-5" />
            </div>
          </div>

          {/* Product Information */}
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                {p.grade}
              </span>

              <span className="flex items-center gap-1 rounded-full bg-green-800 px-3 py-1 text-xs font-bold text-white">
                <ShieldCheck size={13} />
                Verified farmer
              </span>
            </div>

            <h1 className="font-display mt-4 text-4xl font-extrabold text-slate-900">
              {p.name}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin size={15} />
                {p.location}
              </span>

              <span>
                <RatingStars
                  rating={p.rating}
                  showValue
                />
              </span>
            </div>

            <p className="mt-6 leading-7 text-slate-600">
              {p.description}
            </p>

            {/* Product Stats */}
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                [
                  "Available",
                  `${p.quantity.toLocaleString()} ${p.unit}`,
                ],
                [
                  "Price",
                  `₦${p.price.toLocaleString()}/${p.unit}`,
                ],
                ["Harvest", p.harvestDate],
                ["Quality", p.grade],
              ].map(([a, b]) => (
                <div
                  key={a}
                  className="rounded-2xl bg-green-50 p-4"
                >
                  <p className="text-xs font-semibold text-slate-500">
                    {a}
                  </p>

                  <p className="mt-1 text-sm font-extrabold text-green-900">
                    {b}
                  </p>
                </div>
              ))}
            </div>

            {/* Order Section */}
            <div className="mt-7 rounded-2xl border border-green-100 bg-white p-5 shadow-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Order quantity
                  </p>

                  <p className="mt-1 font-display text-2xl font-extrabold">
                    ₦{(qty * p.price).toLocaleString()}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center rounded-xl border border-slate-200">
                  <button
                    onClick={() =>
                      setQty(Math.max(10, qty - 10))
                    }
                    className="p-3"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="min-w-14 text-center font-bold">
                    {qty} {p.unit}
                  </span>

                  <button
                    onClick={() =>
                      setQty(
                        Math.min(p.quantity, qty + 10)
                      )
                    }
                    className="p-3"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <Button onClick={() => setOrdered(true)}>
                  {ordered ? "Order placed ✓" : "Order Now"}
                </Button>

                <Link to="/messages">
                  <Button
                    variant="outline"
                    className="w-full"
                  >
                    <MessageSquare size={17} />
                    Message Farmer
                  </Button>
                </Link>
              </div>

              {ordered && (
                <div className="mt-3 rounded-xl bg-green-50 p-3 text-sm font-semibold text-green-800">
                  Order placed successfully! The farmer will
                  confirm availability and pickup.
                </div>
              )}
            </div>

            {/* Farmer Information */}
            <div className="mt-5 flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5">
              <img
                src={farmer.image}
                alt={farmer.name}
                className="h-14 w-14 rounded-full object-cover"
              />

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-extrabold">
                    {farmer.name}
                  </h3>

                  <ShieldCheck
                    size={16}
                    className="text-green-600"
                  />
                </div>

                <p className="text-sm text-slate-500">
                  {farmer.location} · {farmer.orders} completed
                  orders
                </p>

                <RatingStars
                  rating={farmer.rating}
                  showValue
                />
              </div>

              <Link
                to="/profile"
                className="hidden text-sm font-bold text-green-800 sm:block"
              >
                View profile
              </Link>
            </div>

            {/* Delivery */}
            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-yellow-50 p-4">
              <Truck className="text-yellow-700" />

              <div>
                <p className="font-bold text-slate-800">
                  Delivery available
                </p>

                <p className="text-xs text-slate-600">
                  Choose a matched transporter after your order is
                  confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Buyer Reviews */}
        <section className="mt-12 border-t border-green-100 pt-10">
          <h2 className="font-display text-2xl font-extrabold">
            Buyer reviews
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "TasteBite Restaurants",
                "Excellent quality and careful packaging.",
                5,
              ],
              [
                "FreshMart Retail",
                "Consistent supply and very responsive farmer.",
                5,
              ],
              [
                "NaijaFoods Processing",
                "Good grade and clear quantity information.",
                4,
              ],
            ].map(([n, t, r]) => (
              <div
                key={n}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-card"
              >
                <RatingStars rating={r} />

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  “{t}”
                </p>

                <p className="mt-4 text-xs font-bold text-slate-800">
                  {n}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ProductDetails;