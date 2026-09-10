import React, { useMemo, useState } from "react";
import {Search,SlidersHorizontal,X,MapPin,ChevronDown,} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import { products, categories } from "../data/products";


function Marketplace() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const [location, setLocation] = useState("All locations");
  const [maxPrice, setMaxPrice] = useState("5000");
  const [available, setAvailable] = useState(true);

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (!search ||
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.farmer.toLowerCase().includes(search.toLowerCase())) &&
          (cat === "All" || p.category === cat) &&
          (location === "All locations" ||
            p.location.includes(location)) &&
          p.price <= Number(maxPrice) &&
          (!available || p.quantity > 0)
      ),
    [search, cat, location, maxPrice, available]
  );

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Marketplace Header */}
        <div className="rounded-3xl bg-green-950 px-5 py-9 text-white sm:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-green-400">
            AgriConnect Marketplace
          </span>

          <h1 className="font-display mt-2 text-3xl font-extrabold sm:text-4xl">
            Source fresh produce with confidence.
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-green-200 sm:text-base">
            Compare produce, locations, grades and prices from verified
            Nigerian farms.
          </p>

          {/* Search */}
          <div className="mt-7 flex max-w-3xl items-center gap-2 rounded-2xl bg-white p-2 text-slate-800">
            <Search
              className="ml-2 text-slate-400"
              size={20}
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="min-w-0 flex-1 px-2 py-2 outline-none"
              placeholder="Search for tomatoes, maize, rice..."
            />

            <Button className="hidden sm:inline-flex">
              Search
            </Button>
          </div>
        </div>

        {/* Marketplace Content */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* Filters */}
          <aside className="rounded-2xl border border-green-100 bg-white p-5 shadow-card">
            <div className="flex items-center justify-between">
              <h2 className="font-display font-bold">
                Filters
              </h2>

              <SlidersHorizontal
                size={17}
                className="text-green-700"
              />
            </div>

            <div className="mt-5 space-y-5">
              {/* Crop Filter */}
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Crop
                </span>

                <select
                  value={cat}
                  onChange={(e) => setCat(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-green-500"
                >
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>

              {/* Location Filter */}
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Location
                </span>

                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none"
                >
                  <option>All locations</option>

                  {[
                    "Ilorin",
                    "Lagos",
                    "Abuja",
                    "Ibadan",
                    "Kaduna",
                    "Kano",
                    "Jos",
                    "Abeokuta",
                  ].map((x) => (
                    <option key={x}>{x}</option>
                  ))}
                </select>
              </label>

              {/* Maximum Price */}
              <label className="block">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
                  <span>Max price</span>

                  <span>
                    ₦{Number(maxPrice).toLocaleString()}/unit
                  </span>
                </div>

                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="50"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="mt-3 w-full accent-green-700"
                />
              </label>

              {/* Availability */}
              <label className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <input
                  type="checkbox"
                  checked={available}
                  onChange={(e) => setAvailable(e.target.checked)}
                  className="h-4 w-4 accent-green-700"
                />

                Only available produce
              </label>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSearch("");
                  setCat("All");
                  setLocation("All locations");
                  setMaxPrice("5000");
                  setAvailable(true);
                }}
                className="flex items-center gap-1 text-sm font-bold text-green-800"
              >
                Reset filters
                <X size={15} />
              </button>
            </div>
          </aside>

          {/* Listings */}
          <section>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm text-slate-500">
                <span className="font-bold text-slate-900">
                  {filtered.length}
                </span>{" "}
                produce listings
              </p>

              <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-600">
                Sort: Recommended
                <ChevronDown size={15} />
              </button>
            </div>

            {filtered.length ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-green-200 bg-white p-12 text-center">
                <MapPin className="mx-auto text-green-600" />

                <h3 className="mt-3 font-display font-bold">
                  No produce matches these filters
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Try a different crop, location or price range.
                </p>
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Marketplace;