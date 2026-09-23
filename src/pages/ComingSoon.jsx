import React from "react";
import { ArrowLeft, Clock3, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

function ComingSoon() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[calc(100vh-81px)] items-center justify-center bg-[#f7faf7] px-4 py-16">
        <section className="w-full max-w-xl rounded-3xl border border-green-100 bg-white p-8 text-center shadow-card sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-800">
            <Clock3 size={30} />
          </div>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
            Buyer workspace
          </p>
          <h1 className="font-display mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Coming soon
          </h1>
          <p className="mx-auto mt-4 max-w-md leading-7 text-slate-600">
            The buyer dashboard and ordering tools are being prepared. Farmers
            and transporters can continue using their workspaces while we build
            this experience.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/">
              <Button variant="outline" className="w-full sm:w-auto">
                <ArrowLeft size={16} />
                Back home
              </Button>
            </Link>
            <Link to="/login?role=farmer">
              <Button className="w-full sm:w-auto">
                <Leaf size={16} />
                Farmer login
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default ComingSoon;
