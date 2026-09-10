import React from "react";
import {MapPin,PackageCheck,ShieldCheck,ArrowUpRight,} from "lucide-react";
import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";



function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-green-100 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft">
      {/* Product Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-green-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-green-800">
            {product.grade}
          </span>

          {product.verified && (
            <span className="flex items-center gap-1 rounded-full bg-green-800 px-2.5 py-1 text-xs font-bold text-white">
              <ShieldCheck size={12} />
              Verified
            </span>
          )}
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4">
        <div className="mb-2 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-bold text-slate-900">
              {product.name}
            </h3>

            <p className="mt-0.5 text-sm text-slate-500">
              {product.farmer}
            </p>
          </div>

          <div className="text-right">
            <p className="text-lg font-extrabold text-green-800">
              ₦{product.price.toLocaleString()}
            </p>

            <p className="text-xs text-slate-400">
              / {product.unit}
            </p>
          </div>
        </div>

        {/* Location & Quantity */}
        <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <MapPin size={13} />
            {product.location}
          </span>

          <span className="flex items-center gap-1">
            <PackageCheck size={13} />
            {product.quantity.toLocaleString()} {product.unit}
          </span>
        </div>

        {/* Rating & Availability */}
        <div className="mb-4 flex items-center justify-between">
          <RatingStars
            rating={product.rating}
            showValue
          />

          <span className="rounded-lg bg-green-50 px-2 py-1 text-xs font-semibold text-green-700">
            Available
          </span>
        </div>

        {/* View Product */}
        <Link
          to={`/product/${product.id}`}
          className="flex items-center justify-center gap-2 rounded-xl bg-green-800 px-4 py-2.5 font-semibold text-white transition hover:bg-green-900"
        >
          View Product
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}


export default ProductCard;