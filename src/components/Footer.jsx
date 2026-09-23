import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-green-950 text-green-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <img
                src="/Gemini_Generated_Image_g7c81g7c81g7c81g.jpg"
                alt="EasyEasy Farms"
                className="h-10 w-10 rounded-xl object-cover"
              />

              <span className="font-display text-xl font-extrabold">
                EasyEasy
              </span>
            </div>

            <p className="max-w-xs text-sm leading-6 text-green-200">
              From Farm to Table, Connected. A trusted platform for Africa's
              agricultural supply chain.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-bold">Quick Links</h4>

            <div className="space-y-3 text-sm text-green-200">
              <a href="/#how-it-works" className="block hover:text-white">
                How It Works
              </a>

              <a href="/#about" className="block hover:text-white">
                About
              </a>

              <Link to="/login" className="block hover:text-white">
                Login
              </Link>

              <Link to="/register" className="block hover:text-white">
                Get Started
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 font-bold">Support</h4>

            <div className="space-y-3 text-sm text-green-200">
              <a
                href="mailto:hello@agriconnect.ng"
                className="block hover:text-white"
              >
                Contact
              </a>

              <a href="mailto:help@agriconnect.ng" className="block hover:text-white">
                Help
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-green-900 pt-6 text-sm text-green-300">
          © 2026 EasyEasy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
