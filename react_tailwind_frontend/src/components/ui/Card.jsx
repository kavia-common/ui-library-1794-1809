import React from "react";

/**
 * PUBLIC_INTERFACE
 * Card component with header, body, and footer slots.
 */
const Card = ({ title, children, footer }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-soft overflow-hidden">
      {title && (
        <div className="px-4 py-3 border-b border-gray-200">
          <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
        </div>
      )}
      <div className="p-4 text-sm text-gray-700">{children}</div>
      {footer && <div className="px-4 py-3 border-t border-gray-200">{footer}</div>}
    </div>
  );
};

export default Card;
