import React from "react";

/**
 * PUBLIC_INTERFACE
 * Alert component for success/error/info.
 */
const Alert = ({ type = "info", children }) => {
  const styles = {
    info: "bg-blue-50 text-blue-800 border-blue-200",
    success: "bg-amber-50 text-amber-800 border-amber-200",
    error: "bg-red-50 text-red-800 border-red-200",
  };
  return (
    <div className={`rounded-lg border p-3 ${styles[type] || styles.info}`}>
      {children}
    </div>
  );
};

export default Alert;
