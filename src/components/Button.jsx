import React from "react";

 function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const styles = {
    primary: "bg-green-800 text-white hover:bg-green-900",
    secondary: "bg-green-100 text-green-800 hover:bg-green-200",
    outline: "border border-green-200 text-green-800 hover:bg-green-50",
    gold: "bg-yellow-500 text-white hover:bg-yellow-600",
    ghost: "text-slate-600 hover:bg-slate-100",
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-semibold transition ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;