import React from "react";
import CodeTabs from "./CodeTabs";

/**
 * PUBLIC_INTERFACE
 * PreviewCard shows a live preview area and a CodeTabs viewer under it.
 */
const PreviewCard = ({ title, description, preview, code }) => {
  return (
    <section className="bg-white rounded-xl shadow-card border border-gray-200 overflow-hidden">
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">{title}</h3>
            {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
          </div>
        </div>

        <div className="mt-4">
          <div className="rounded-lg border border-dashed border-gray-300 p-4 bg-ocean-gradient">
            {preview}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <CodeTabs code={code} />
      </div>
    </section>
  );
};

export default PreviewCard;
