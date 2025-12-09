import React from "react";
import CodeTabs from "./CodeTabs";
import SnippetPlay from "./SnippetPlay";

/**
 * PUBLIC_INTERFACE
 * PreviewCard shows a live preview area and a Tailwind Play–style snippet viewer under it.
 * It maps existing `code` objects to SnippetPlay tabs: prefers `html/js/config`; falls back to JSX-only via HTML.
 */
const PreviewCard = ({ title, description, preview, code }) => {
  // Map existing code object to SnippetPlay props:
  // - If `code.html` provided, use as-is; else if `code.jsx` exists, wrap it as an HTML fragment for Tailwind Play.
  // - `code.js` or `code.javascript` maps to js; `code.config` maps to config (string or object literal).
  const html =
    (code && (code.html || code.markup)) ||
    (code && code.jsx
      ? `<div class="p-4">${code.jsx
          .replaceAll('className="', 'class="')
          .replaceAll("className='", "class='")}</div>`
      : "");

  const js = (code && (code.js || code.javascript)) || "";
  const config = (code && (code.config || code.tailwind || "")) || "";

  const hasAnyPlayContent = Boolean(html || js || config);

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
        {hasAnyPlayContent ? (
          <div className="p-4 sm:p-6">
            <SnippetPlay title={`${title} Snippet`} html={html} js={js} config={config} copyMode="fragment" />
          </div>
        ) : (
          // Fallback to CodeTabs when we truly only have a code object with tabs that don't map to Tailwind Play inputs.
          <CodeTabs code={code} />
        )}
      </div>
    </section>
  );
};

export default PreviewCard;
