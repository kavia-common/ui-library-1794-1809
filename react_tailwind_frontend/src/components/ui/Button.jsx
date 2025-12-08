import React from "react";

/**
 * PUBLIC_INTERFACE
 * Button component styled per Ocean Professional theme.
 */
const Button = ({ children, variant = "primary", ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition shadow-soft";
  const styles = {
    primary:
      "bg-ocean-primary text-white hover:brightness-110 focus:ring-2 focus:ring-blue-300",
    secondary:
      "bg-ocean-secondary text-white hover:brightness-110 focus:ring-2 focus:ring-amber-300",
    outline:
      "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-blue-200",
  };
  const className = `${base} ${styles[variant] || styles.primary}`;
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
