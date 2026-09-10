import React, { useState } from "react";
import {Menu,Bell,Search,} from "lucide-react";
import Sidebar from "./Sidebar";

const names = {
  farmer: "Abdulrahman Farms",
  buyer: "TasteBite Restaurants",
  transporter: "Musa Logistics",
  admin: "AgriConnect Admin",
};

 function DashboardLayout({role,children,title,subtitle,}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7faf7] lg:flex">
      <Sidebar
        role={role}
        mobileOpen={open}
        onClose={() => setOpen(false)}
      />

      <div className="min-w-0 flex-1">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b border-green-100 bg-white/95 backdrop-blur">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Page Title */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setOpen(true)}
                className="rounded-lg p-2 text-slate-600 hover:bg-green-50 lg:hidden"
              >
                <Menu />
              </button>

              <div>
                <h1 className="font-display text-lg font-extrabold text-slate-900 sm:text-xl">
                  {title}
                </h1>

                {subtitle && (
                  <p className="hidden text-xs text-slate-500 sm:block">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search */}
              <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 md:flex">
                <Search
                  size={16}
                  className="text-slate-400"
                />

                <input
                  className="w-32 bg-transparent text-sm outline-none"
                  placeholder="Search..."
                />
              </div>

              {/* Notifications */}
              <button className="relative rounded-xl p-2.5 text-slate-500 hover:bg-green-50">
                <Bell size={19} />

                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-yellow-500" />
              </button>

              {/* User Avatar */}
              <div className="hidden h-9 w-9 items-center justify-center rounded-full bg-green-100 font-bold text-green-800 sm:flex">
                {names[role]?.slice(0, 1) || "A"}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-[1500px] p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
export default DashboardLayout;