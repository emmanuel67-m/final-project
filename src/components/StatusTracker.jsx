import React from "react";
import { ListChecks,ClipboardCheck, PackageCheck,Truck,MapPinned, CircleCheck,WalletCards,} from "lucide-react";

const steps = [
  ["Listed", ListChecks],
  ["Ordered", ClipboardCheck],
  ["Confirmed", PackageCheck],
  ["Ready for Pickup", PackageCheck],
  ["Picked Up", Truck],
  ["In Transit", MapPinned],
  ["Delivered", CircleCheck],
  ["Paid", WalletCards],
];


function StatusTracker({
  current = "In Transit",
}) {
  const idx = steps.findIndex(
    (s) => s[0] === current
  );

  return (
    <div className="overflow-x-auto rounded-2xl border border-green-100 bg-white p-5 shadow-card">
      <div className="flex min-w-[780px] items-start">
        {steps.map(([label, Icon], i) => (
          <React.Fragment key={label}>
            <div className="flex w-24 flex-col items-center text-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                  i <= idx
                    ? "border-green-700 bg-green-700 text-white"
                    : "border-slate-200 bg-white text-slate-300"
                }`}
              >
                <Icon size={17} />
              </div>

              <span
                className={`mt-2 text-[11px] font-bold ${
                  i <= idx
                    ? "text-green-800"
                    : "text-slate-400"
                }`}
              >
                {label}
              </span>
            </div>

            {i < steps.length - 1 && (
              <div
                className={`mt-5 h-0.5 flex-1 ${
                  i < idx
                    ? "bg-green-600"
                    : "bg-slate-200"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}


export default StatusTracker;