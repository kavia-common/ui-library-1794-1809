import React, { useEffect, useMemo, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";

/**
 * PUBLIC_INTERFACE
 * CodeTabs renders tabbed code blocks (JSX and CSS/Tailwind) with syntax highlighting and copy.
 */
const CodeTabs = ({ code }) => {
  const tabs = useMemo(() => {
    const entries = Object.entries(code || {});
    return entries.length ? entries : [["jsx", "// No code provided"]];
  }, [code]);

  const [active, setActive] = useState(tabs[0][0]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [active, code]);

  const onCopy = async () => {
    const text = code[active];
    try {
      await navigator.clipboard.writeText(text || "");
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore copy failures
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-soft bg-white">
      <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-2 sm:px-3">
        <div className="flex items-center gap-1">
          {tabs.map(([name]) => (
            <button
              key={name}
              className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${
                active === name
                  ? "bg-white text-ocean-primary shadow"
                  : "text-gray-600 hover:text-ocean-primary"
              }`}
              onClick={() => setActive(name)}
            >
              {name.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          onClick={onCopy}
          className="inline-flex items-center gap-1 text-xs sm:text-sm text-gray-600 hover:text-ocean-primary px-2 py-2"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" d="M8 8h12v12H8z" />
            <path strokeWidth="2" d="M4 4h12v12H4z" />
          </svg>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="relative max-h-96 overflow-auto">
        <pre className="language-jsx m-0 p-4 text-sm code-font">
          <code className={`language-${active}`}>{code[active]}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeTabs;
