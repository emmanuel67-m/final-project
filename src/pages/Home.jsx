import React from "react";
import {ArrowRight,CheckCircle2,Truck,ShoppingBasket,Leaf,ShieldCheck,ChevronRight,} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const stats = [
  ["500+", "Farmers"],
  ["50+", "Food Buyers"],
  ["100+", "Transporters"],
  ["1,000+", "Deliveries"],
];

 function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-green-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,.25),transparent_35%)]" />

          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="relative z-10">
              <h1 className="font-display mt-5 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Connecting{" "}
                <span className="text-green-400">Farms</span>, Buyers &
                Transporters.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-green-100 sm:text-lg">
               EasyEasy makes it easier for farmers to sell, buyers to
                source fresh produce, and transporters to move agricultural
                goods efficiently.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/marketplace">
                  <Button className="w-full sm:w-auto">
                    Explore Marketplace
                    <ArrowRight size={17} />
                  </Button>
                </Link>

                <Link to="/register">
                  <Button
                    variant="outline"
                    className="w-full border-green-700 text-white hover:bg-green-900 sm:w-auto"
                  >
                    JoinEasyEasy
                  </Button>
                </Link>
              </div>

              <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map(([n, l]) => (
                  <div
                    key={l}
                    className="border-l border-green-800 pl-3"
                  >
                    <p className="font-display text-xl font-extrabold">
                      {n}
                    </p>

                    <p className="text-xs text-green-300">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2rem] bg-green-500/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-green-700 shadow-2xl">
                <img
                  src="https://i.pinimg.com/1200x/29/f0/48/29f048545b3c56e02eb5e620ec61c543.jpg"
                  alt="African farm landscape"
                  className="h-[420px] w-full object-cover sm:h-[500px]"
                />

               
                
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
        >
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-widest text-green-700">
              One connected workflow
            </span>

            <h2 className="font-display mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              From harvest to doorstep, without the guesswork.
            </h2>

            <p className="mt-4 text-slate-600">
              Three people, one platform.EasyEasy keeps every handoff
              visible so food can move faster and more reliably.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              [
                Leaf,
                "Farmers",
                "List Your Produce",
                "Show buyers what you have available and sell directly at a fair price.",
                "/register?role=farmer",
              ],
              [
                ShoppingBasket,
                "Buyers",
                "Coming Soon",
                "The buyer workspace for sourcing and ordering produce is being prepared.",
                "/buyer/dashboard",
              ],
              [
                Truck,
                "Transporters",
                "Move & Earn",
                "Find delivery jobs that match your vehicle, capacity and route.",
                "/register?role=transporter",
              ],
            ].map(([Icon, role, title, text, to], i) => (
              <Link
                to={to}
                key={role}
                className="group rounded-3xl border border-green-100 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-green-200 hover:shadow-soft"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-800">
                    <Icon size={24} />
                  </span>

                  <span className="text-xs font-bold text-green-700">
                    0{i + 1}
                  </span>
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-widest text-green-600">
                  {role}
                </p>

                <h3 className="font-display mt-1 text-xl font-extrabold text-slate-900">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {text}
                </p>

                <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-green-800">
                  Get started
                  <ChevronRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 hidden items-center justify-center gap-3 text-sm font-bold text-green-800 md:flex">
            <span className="rounded-full bg-green-100 px-4 py-2">
              Farmer
            </span>

            <ArrowRight size={18} />

            <span className="rounded-full bg-green-100 px-4 py-2">
              Buyer
            </span>

            <ArrowRight size={18} />

            <span className="rounded-full bg-green-100 px-4 py-2">
              Transporter
            </span>

            <ArrowRight size={18} />

            <span className="rounded-full bg-green-100 px-4 py-2">
              Buyer
            </span>
          </div>
        </section>




        <section
          id="about"
          className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20"
        >
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=1100&q=85"
              alt="Farmer inspecting crops"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-green-700">
              WhyEasyEasy
            </span>

            <h2 className="font-display mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              A marketplace designed around trust.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Agriculture works best when everyone can plan.EasyEasy
              brings product availability, order status, delivery
              coordination and reviews into one clear experience.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Verified profiles and transparent ratings",
                "Clear quantity, quality and pricing before ordering",
                "Delivery jobs matched to vehicle capacity and route",
                "Lightweight workflows for low-bandwidth environments",
              ].map((x) => (
                <div key={x} className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-green-600"
                    size={20}
                  />

                  <span className="font-semibold text-slate-700">
                    {x}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

      
        <section className="bg-green-950 py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <span className="text-sm font-bold uppercase tracking-widest text-green-400">
                  Ready when you are
                </span>

                <h2 className="font-display mt-2 text-3xl font-extrabold sm:text-4xl">
                  Build a more connected food supply chain.
                </h2>

                <p className="mt-4 max-w-2xl text-green-200">
                  Whether you grow, source or transport food,EasyEasy
                  gives you the tools to move with confidence.
                </p>
              </div>

              <div className="flex items-center lg:justify-end">
                <Link to="/register">
                  <Button className="w-full sm:w-auto">
                    Create your account
                    <ArrowRight size={17} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;