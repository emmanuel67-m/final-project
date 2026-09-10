import React from "react";
import {Leaf,ArrowUpRight,} from "lucide-react";
import { Link } from "react-router-dom";

 function Footer() {
  return (
    <footer className="bg-green-950 text-green-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white">
                <Leaf size={21} />
              </span>

              <span className="font-display text-xl font-extrabold">
                AgriConnect
              </span>
            </div>

            <p className="max-w-xs text-sm leading-6 text-green-200">
              From Farm to Table, Connected. A trusted marketplace for
              Africa&apos;s agricultural supply chain.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="mb-4 font-bold">
              Platform
            </h4>

            <div className="space-y-3 text-sm text-green-200">
              <Link
                className="block hover:text-white"
                to="/marketplace"
              >
                Marketplace
              </Link>

              <Link
                className="block hover:text-white"
                to="/register?role=farmer"
              >
                For Farmers
              </Link>

              <Link
                className="block hover:text-white"
                to="/register?role=buyer"
              >
                For Buyers
              </Link>

              <Link
                className="block hover:text-white"
                to="/register?role=transporter"
              >
                For Transporters
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-bold">
              Company
            </h4>

            <div className="space-y-3 text-sm text-green-200">
              <a
                href="#about"
                className="block hover:text-white"
              >
                About Us
              </a>

              <a
                href="#how-it-works"
                className="block hover:text-white"
              >
                How It Works
              </a>

              <a
                href="mailto:hello@agriconnect.ng"
                className="block hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Built for the real world */}
          <div>
            <h4 className="mb-4 font-bold">
              Built for the real world
            </h4>

            <p className="text-sm leading-6 text-green-200">
              Lightweight interfaces and clear workflows for farmers,
              buyers and logistics teams — even on low bandwidth.
            </p>

            <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-900 px-3 py-2 text-xs font-semibold text-green-200">
              SMS / USSD support · Coming soon
              <ArrowUpRight size={13} />
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-green-900 pt-6 text-sm text-green-300">
          © 2026 AgriConnect. Built for better agricultural connections.
        </div>
      </div>
    </footer>
  );
}

export default Footer;