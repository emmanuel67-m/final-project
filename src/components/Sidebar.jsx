import React from "react";
import {NavLink,useNavigate,} from "react-router-dom";
import {LayoutDashboard,ShoppingBasket,Truck,MessageSquare,WalletCards,Star,UserCircle,Settings,BriefcaseBusiness,LogOut,X,CarFront, ClipboardList,Users,ShieldAlert,} from "lucide-react";

const roleConfig = {
  farmer: [
    ["Dashboard", "/farmer/dashboard", LayoutDashboard],
    ["My Listings", "/farmer/listings", ShoppingBasket],
    ["Orders", "/farmer/dashboard?tab=orders", ClipboardList],
    ["Deliveries", "/delivery-tracking", Truck],
    ["Messages", "/messages", MessageSquare],
    ["Earnings", "/farmer/dashboard?tab=earnings", WalletCards],
    ["Reviews", "/profile", Star],
    ["Profile", "/profile", UserCircle],
    ["Settings", "/profile?tab=settings", Settings],
  ],

  transporter: [
    ["Dashboard", "/transporter/dashboard", LayoutDashboard],
    ["Available Jobs", "/transporter/jobs", BriefcaseBusiness],
    ["My Deliveries", "/delivery-tracking", Truck],
    ["Earnings", "/transporter/dashboard?tab=earnings", WalletCards],
    ["Messages", "/messages", MessageSquare],
    ["Ratings", "/profile", Star],
    ["Vehicle", "/transporter/dashboard?tab=vehicle", CarFront],
    ["Profile", "/profile", UserCircle],
    ["Settings", "/profile?tab=settings", Settings],
  ],

  admin: [
    ["Dashboard", "/admin", LayoutDashboard],
    ["Users", "/admin?tab=users", Users],
    ["Products", "/admin?tab=products", ShoppingBasket],
    ["Orders", "/admin?tab=orders", ClipboardList],
    ["Deliveries", "/delivery-tracking", Truck],
    ["Disputes", "/admin?tab=disputes", ShieldAlert],
    ["Settings", "/profile?tab=settings", Settings],
  ],
};

 function Sidebar({
  role = "farmer",
  mobileOpen = false,
  onClose = () => {},
}) {
  const nav = useNavigate();

  const items =
    roleConfig[role] || roleConfig.farmer;

  return (
    <aside
      className={`${
        mobileOpen
          ? "fixed inset-0 z-[60] flex"
          : "hidden"
      } lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-64 lg:flex-col`}
    >
      {/* Mobile Overlay */}
      <div
        className="absolute inset-0 bg-slate-900/30 lg:hidden"
        onClick={onClose}
      />

      {/* Sidebar Content */}
      <div className="relative flex h-full w-72 flex-col border-r border-green-100 bg-white px-4 py-5 shadow-xl lg:w-64 lg:shadow-none">
        {/* Logo */}
        <div className="mb-7 flex items-center justify-between px-2">
          <NavLink
            to="/"
            className="flex items-center gap-2"
          >
            <img
              src="/Gemini_Generated_Image_g7c81g7c81g7c81g.jpg"
              alt="EasyEasy Farms"
              className="h-9 w-9 rounded-xl object-cover"
            />

            <span className="font-display font-extrabold text-green-900">
             EasyEasy
            </span>
          </NavLink>

          <button
            onClick={onClose}
            className="rounded-lg p-2 lg:hidden"
          >
            <X size={19} />
          </button>
        </div>

        {/* Workspace */}
        <div className="mb-4 rounded-2xl bg-green-50 p-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
            Workspace
          </p>

          <p className="mt-1 font-bold capitalize text-green-950">
            {role} portal
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 overflow-y-auto">
          {items.map(([label, to, Icon]) => (
            <NavLink
              key={label}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "bg-green-800 text-white shadow-sm"
                    : "text-slate-600 hover:bg-green-50 hover:text-green-800"
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Sign Out */}
        <button
          onClick={() => {
            localStorage.removeItem("easyeasy_session");
            nav("/");
          }}
          className="mt-4 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-500 hover:bg-red-50 hover:text-red-600"
        >
          <LogOut size={18} />
          Sign out
        </button>
      </div>
    </aside>
  );
}


export default Sidebar;