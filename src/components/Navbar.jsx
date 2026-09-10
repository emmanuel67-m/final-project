import React, { useState } from "react";
import { Link,NavLink,} from "react-router-dom";
import {Menu,X,Leaf,ArrowRight,} from "lucide-react";

import Button from "./Button";

const links = [
  ["Home", "/"],
  ["How It Works", "/#how-it-works"],
  ["Marketplace", "/marketplace"],
  ["For Farmers", "/register?role=farmer"],
  ["For Buyers", "/register?role=buyer"],
  ["For Transporters", "/register?role=transporter"],
  ["About", "/#about"],
];

 function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-800 text-white shadow-sm">
            <Leaf size={22} />
          </span>

          <span className="font-display text-xl font-extrabold tracking-tight text-green-900">
            Agri
            <span className="text-green-500">
              Connect
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 xl:flex">
          {links.map(([label, to]) => (
            <a
              key={label}
              href={to}
              className="text-sm font-semibold text-slate-600 transition hover:text-green-800"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link to="/login">
            <Button variant="ghost">
              Login
            </Button>
          </Link>

          <Link to="/register">
            <Button>
              Get Started
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 text-slate-700 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-green-100 bg-white px-4 pb-5 pt-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map(([label, to]) => (
              <a
                key={label}
                href={to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-semibold text-slate-700 hover:bg-green-50"
              >
                {label}
              </a>
            ))}

            {/* Mobile Actions */}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
              >
                <Button
                  variant="outline"
                  className="w-full"
                >
                  Login
                </Button>
              </Link>

              <Link
                to="/register"
                onClick={() => setOpen(false)}
              >
                <Button className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}



export default Navbar;