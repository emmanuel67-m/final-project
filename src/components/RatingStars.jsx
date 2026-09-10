import React from "react";
import { Star } from "lucide-react";


function RatingStars({
  rating = 5,
  showValue = false,
}) {
  return (
    <span className="inline-flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={14}
          className={
            n <= Math.round(rating)
              ? "fill-yellow-500 text-yellow-500"
              : "text-slate-300"
          }
        />
      ))}

      {showValue && (
        <span className="ml-1 text-sm font-semibold text-slate-700">
          {rating}
        </span>
      )}
    </span>
  );
}


export default RatingStars;