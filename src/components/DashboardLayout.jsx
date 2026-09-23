import React, { useState } from "react";
import {Menu,Bell,Search,} from "lucide-react";
import Sidebar from "./Sidebar";

const names = {
  farmer: "Abdulrahman Farms",
  buyer: "TasteBite Restaurants",
  transporter: "Musa Logistics",
  admin: "EasyEasy Admin",
};

 function DashboardLayout({role,children,title,subtitle,}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const signOut = () => {
    localStorage.removeItem("easyeasy_session");
    window.location.assign("/");
  };

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
              <form
                onSubmit={(event) => event.preventDefault()}
                className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 md:flex"
              >
                <Search
                  size={16}
                  className="text-slate-400"
                />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  className="w-32 bg-transparent text-sm outline-none"
                  placeholder="Search..."
                  aria-label="Search dashboard"
                />
              </form>

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setNotificationsOpen((current) => !current)}
                  className="relative rounded-xl p-2.5 text-slate-500 hover:bg-green-50"
                  aria-label="Toggle notifications"
                >
                <Bell size={19} />

                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-yellow-500" />
                </button>
                {notificationsOpen && (
                  <div className="absolute right-0 top-12 z-50 w-64 rounded-2xl border border-green-100 bg-white p-4 text-sm shadow-xl">
                    <p className="font-bold text-slate-900">Notifications</p>
                    <p className="mt-2 leading-6 text-slate-500">
                      You are all caught up for now.
                    </p>
                  </div>
                )}
              </div>

              {/* User Avatar */}
              <div className="hidden h-9 w-9 items-center justify-center rounded-full bg-green-100 font-bold text-green-800 sm:flex" title={names[role]}>
                {names[role]?.slice(0, 1) || "A"}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-[1500px] p-4 sm:p-6 lg:p-8">
          {search && (
            <p className="mb-4 rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-sm text-green-800">
              Search is ready for “{search}”.
            </p>
          )}
          {children}
        </main>
      </div>
    </div>
  );
}
export default DashboardLayout;