import React from "react";
import { Leaf } from "lucide-react";

 function EmptyState({
  title = "Nothing here yet",
  text = "Your activity will appear here as you start usingEasyEasy.",
}) {
  return (
    <div className="rounded-2xl border border-dashed border-green-200 bg-white p-10 text-center">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-700">
        <Leaf size={22} />
      </span>

      <h3 className="mt-4 font-display font-bold text-slate-900">
        {title}
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
        {text}
      </p>
    </div>
  );
}

export default EmptyState;