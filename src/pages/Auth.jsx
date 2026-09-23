import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import Button from "../components/Button";

// Where each role lands after auth
const ROLE_ROUTES = {
  farmer: "/farmer/dashboard",
  transporter: "/transporter/dashboard",
};

const USERS_KEY = "easyeasy_users";

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const user = getUsers().find(
      (candidate) =>
        candidate.email === email.trim().toLowerCase() &&
        candidate.password === password
    );

    if (!user) {
      setError("We could not find an account with those details. Register first or check your password.");
      setLoading(false);
      return;
    }

    localStorage.setItem("easyeasy_session", JSON.stringify(user));
    setLoading(false);
    nav(ROLE_ROUTES[user.role] || "/");
  };

  return (
    <AuthShell
      title="Welcome back"
      text="Sign in to manage your farm, orders or deliveries."
    >
      <form onSubmit={submit} className="space-y-4">
        {error && (
          <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        <label className="block text-sm font-semibold">
          Email address
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-green-600"
          />
        </label>

        <label className="block text-sm font-semibold">
          Password
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="••••••••"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-green-600"
          />
        </label>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setError("Password recovery is coming soon. Please register again with a new email for now.")}
            className="text-sm font-bold text-green-700"
          >
            Forgot password?
          </button>
        </div>

        <Button type="submit" disabled={loading} className="w-full py-3">
          {loading ? "Signing in..." : "Sign In"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        New to EasyEasy?{" "}
        <Link className="font-bold text-green-800" to="/register">
          Create an account
        </Link>
      </p>
    </AuthShell>
  );
}

function Register() {
  const [params] = useSearchParams();
  const requestedRole = params.get("role");
  const [role, setRole] = useState(
    requestedRole === "transporter" ? "transporter" : "farmer"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.target);
    const fullName = form.get("fullName");
    const email = form.get("email");
    const password = form.get("password");
    const existingUsers = getUsers();
    const normalizedEmail = email.trim().toLowerCase();

    if (existingUsers.some((user) => user.email === normalizedEmail)) {
      setError("This email already has an account. Please sign in instead.");
      setLoading(false);
      return;
    }

    const newUser = {
      name: fullName.trim(),
      email: normalizedEmail,
      password,
      role,
    };
    existingUsers.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(existingUsers));
    localStorage.setItem("easyeasy_session", JSON.stringify(newUser));
    setLoading(false);
    nav(ROLE_ROUTES[role]);
  };

  return (
    <AuthShell
      title="Join EasyEasy"
      text="Choose how you participate in the agricultural supply chain."
    >
      {error && (
        <div className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {[
          ["farmer", "Farmer"],
          ["transporter", "Transporter"],
        ].map(([v, l]) => (
          <button
            type="button"
            key={v}
            onClick={() => setRole(v)}
            className={`rounded-xl border px-4 py-3 text-sm font-bold transition ${
              role === v
                ? "border-green-700 bg-green-50 text-green-800 shadow-sm"
                : "border-slate-200 bg-white text-slate-600 hover:border-green-300 hover:bg-green-50/50"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      <form onSubmit={submit} className="mt-6 space-y-5">
        <label className="block text-sm font-semibold">
          Full / business name
          <input
            required
            name="fullName"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-green-600"
            placeholder={
              role === "farmer"
                ? "Abdulrahman Farms"
                : "Musa Logistics"
            }
          />
        </label>

        <label className="block text-sm font-semibold">
          Email address
          <input
            required
            name="email"
            type="email"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-green-600"
            placeholder="you@example.com"
          />
        </label>

        {role === "transporter" && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold">
              Vehicle
              <select
                name="vehicleType"
                className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-3 text-sm"
              >
                <option>Van</option>
                <option>Pickup</option>
                <option>Small Truck</option>
                <option>Truck</option>
              </select>
            </label>
            <label className="text-sm font-semibold">
              Capacity
              <input
                name="capacityKg"
                className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-3"
                placeholder="2,500 kg"
              />
            </label>
          </div>
        )}

        {role === "farmer" && (
          <label className="block text-sm font-semibold">
            Farm location
            <input
              name="farmLocation"
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
              placeholder="Ilorin, Kwara State"
            />
          </label>
        )}


        <label className="block text-sm font-semibold">
          Password
          <input
            required
            name="password"
            type="password"
            minLength={6}
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3"
            placeholder="Create a secure password"
          />
        </label>

        <Button type="submit" disabled={loading} className="w-full py-3.5">
          {loading ? "Creating account..." : `Create ${role} account`}
        </Button>
      </form>

      <p className="mt-6 text-center text-xs leading-5 text-slate-500">
        By creating an account, you agree to EasyEasy's terms and community
        standards.
      </p>
      <p className="mt-4 text-center text-sm text-slate-500">
        Already registered?{" "}
        <Link className="font-bold text-green-800" to="/login">
          Sign in
        </Link>
      </p>
    </AuthShell>
  );
}

function AuthShell({ title, text, children }) {
  return (
    <div className="min-h-screen bg-green-950 lg:grid lg:grid-cols-2">
      <div className="hidden min-h-screen p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-16">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/Gemini_Generated_Image_g7c81g7c81g7c81g.jpg"
            alt="EasyEasy Farms"
            className="h-10 w-10 rounded-xl object-cover"
          />
          <span className="font-display text-xl font-extrabold">EasyEasy</span>
        </Link>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-green-400">
            From Farm to Table, Connected.
          </p>
          <h1 className="font-display mt-4 max-w-xl text-5xl font-extrabold leading-tight">
            One trusted place to grow, source and move food.
          </h1>
          <p className="mt-5 max-w-lg leading-7 text-green-200">
            Join farmers, food businesses and transporters building a more
            reliable agricultural supply chain.
          </p>
        </div>
      </div>

      <div className="flex min-h-screen items-center justify-center bg-[#f7faf7] px-4 py-8 sm:px-8 lg:px-10 xl:px-16">
        <div className="w-full max-w-lg">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-green-800"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="rounded-3xl border border-green-100 bg-white p-5 shadow-soft sm:p-8">
            <div className="mb-6">
              <h2 className="font-display text-2xl font-extrabold text-slate-900">
                {title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Login, Register };