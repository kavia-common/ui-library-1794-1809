import React, { useMemo, useState, useCallback } from "react";

/**
 * PUBLIC_INTERFACE
 * PreviewCard with a top-right toggle to switch between live Preview and Code.
 * - Defaults to 'Preview'
 * - When 'Code' is active, shows Tailwind Play–style snippet panel with tabs and Copy
 * - Removes always-visible code; only one view is shown at a time
 */
const PreviewCard = ({ title, description, preview, code }) => {
  // Build Tailwind Play–ready code tabs. If only JSX is provided, convert to HTML-friendly class attr.
  const html = useMemo(() => {
    if (!code) return "";
    if (code.html || code.markup) return code.html || code.markup;
    if (code.jsx) {
      return code.jsx
        .replaceAll('className="', 'class="')
        .replaceAll("className='", "class='");
    }
    return "";
  }, [code]);

  const js = useMemo(() => (code && (code.js || code.javascript)) || "", [code]);
  const config = useMemo(() => (code && (code.config || code.tailwind)) || "", [code]);

  const tabs = useMemo(() => {
    const t = [];
    if (html) t.push({ key: "html", label: "HTML" });
    if (js) t.push({ key: "js", label: "JS" });
    if (config) t.push({ key: "config", label: "Config" });
    return t.length ? t : [{ key: "html", label: "HTML" }];
  }, [html, js, config]);

  // Toggle between "preview" and "code" (default to preview)
  const [mode, setMode] = useState("preview");

  // Current active code tab
  const [active, setActive] = useState(tabs[0]?.key || "html");

  // Copy-to-clipboard handling with robust fallback and UI feedback
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState("");
  const copy = useCallback(async (text) => {
    const toCopy = text ?? "";
    setCopyError("");
    // Try modern API first
    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        await navigator.clipboard.writeText(toCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
        return true;
      }
      throw new Error("Navigator clipboard not available");
    } catch (e1) {
      // Fallback: temporary textarea + execCommand
      try {
        const ta = document.createElement("textarea");
        ta.value = toCopy;
        // Avoid scrolling to bottom on iOS
        ta.style.position = "fixed";
        ta.style.top = "-1000px";
        ta.style.left = "-1000px";
        ta.setAttribute("readonly", "true");
        document.body.appendChild(ta);
        ta.select();
        ta.setSelectionRange(0, ta.value.length);
        const ok = document.execCommand("copy");
        document.body.removeChild(ta);
        if (!ok) {
          throw new Error("execCommand copy failed");
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
        return true;
      } catch (e2) {
        setCopyError("Copy failed");
        return false;
      }
    }
  }, []);

  const currentCode = useMemo(() => {
    if (active === "html") return html || "";
    if (active === "js") return js || "";
    if (active === "config") return config || "";
    return "";
  }, [active, html, js, config]);

  const codeLines = useMemo(
    () => (currentCode ? currentCode.split("\n") : [""]),
    [currentCode]
  );

  // Minimal syntax highlighting aligned with SnippetPlay token classes
  const highlight = useCallback((codeText = "", lang = "html") => {
    if (!codeText) return "";
    const esc = codeText
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
    let out = esc.replace(/(\/\*[\s\S]*?\*\/|\/\/[^\n]*|<!--[\s\S]*?-->)/g, (m) => {
      return `<span class="syntax-comment">${m}</span>`;
    });
    if (lang === "html") {
      out = out
        .replace(/([a-zA-Z-:]+)(=)(&quot;[^&]*&quot;|&apos;[^&]*&apos;|&quot;&quot;|&apos;&apos;)/g, (_m, k, eq, v) => {
          return `<span class="syntax-attr">${k}</span>${eq}<span class="syntax-string">${v}</span>`;
        })
        .replace(/(&lt;\/?)([a-zA-Z0-9-:]+)/g, (_m, a1, a2) => {
          return `<span class="syntax-tag">${a1}</span><span class="syntax-keyword">${a2}</span>`;
        })
        .replace(/(\/?&gt;)/g, `<span class="syntax-tag">$1</span>`);
    } else if (lang === "js") {
      out = out.replace(/([`'"])(?:\\.|(?!\1).)*\1/g, (m) => `<span class="syntax-string">${m}</span>`);
      out = out.replace(
        /\b(true|false|null|undefined|NaN|Infinity|(?:0x)?\d+(?:\.\d+)?)\b/g,
        `<span class="syntax-number">$1</span>`
      );
      out = out.replace(
        /\b(const|let|var|return|function|if|else|for|while|class|new|import|from|export|default|try|catch|finally|await|async|switch|case|break|continue|throw)\b/g,
        `<span class="syntax-keyword">$1</span>`
      );
    } else {
      out = out.replace(/([`'"])(?:\\.|(?!\1).)*\1/g, (m) => `<span class="syntax-string">${m}</span>`);
      out = out.replace(
        /\b(true|false|null|undefined|NaN|Infinity|(?:0x)?\d+(?:\.\d+)?)\b/g,
        `<span class="syntax-number">$1</span>`
      );
    }
    return out;
  }, []);

  const codeLang = active === "js" ? "js" : active === "config" ? "json" : "html";
  const highlighted = useMemo(() => highlight(currentCode, codeLang), [currentCode, codeLang, highlight]);

  const onCopy = useCallback(() => {
    // Copy exactly the active tab content without mutation
    return copy(currentCode || "");
  }, [currentCode, copy]);

  // Toggle button UI
  const Toggle = () => {
    const isPreview = mode === "preview";
    return (
      <div className="inline-flex items-center rounded-md border border-gray-200 bg-white shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={() => setMode("preview")}
          className={`px-3 py-1.5 text-xs font-medium transition ${
            isPreview ? "bg-blue-50 text-ocean-primary" : "text-gray-600 hover:bg-gray-50"
          }`}
          aria-pressed={isPreview}
        >
          Preview
        </button>
        <button
          type="button"
          onClick={() => setMode("code")}
          className={`px-3 py-1.5 text-xs font-medium transition ${
            !isPreview ? "bg-blue-50 text-ocean-primary" : "text-gray-600 hover:bg-gray-50"
          }`}
          aria-pressed={!isPreview}
        >
          Code
        </button>
      </div>
    );
  };

  return (
    <section className="bg-white rounded-xl shadow-card border border-gray-200 overflow-hidden">
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">{title}</h3>
            {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
          </div>

          {/* Top-right toggle */}
          <Toggle />
        </div>

        {/* Conditional content area */}
        <div className="mt-4">
          {mode === "preview" ? (
            <div className="rounded-lg border border-dashed border-gray-300 p-4 bg-ocean-gradient">{preview}</div>
          ) : (
            <div
              className="rounded-lg overflow-hidden border border-slate-800/70"
              style={{ background: "var(--bg-canvas, #0f131a)" }}
            >
              {/* Header with tabs and copy; mirrors SnippetPlay controls */}
              <div
                className="flex items-center justify-between px-3 md:px-4 h-11 border-b border-slate-800/70"
                role="tablist"
                aria-label={`${title} snippet tabs`}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  {tabs.map((t) => {
                    const activeState = active === t.key;
                    return (
                      <button
                        key={t.key}
                        id={`tab-${t.key}`}
                        role="tab"
                        aria-selected={activeState}
                        aria-controls={`tab-${t.key}-panel`}
                        data-active={activeState}
                        onClick={() => setActive(t.key)}
                        className="h-10 px-3 text-[12px] md:text-xs tracking-wider uppercase font-medium 
                        text-slate-400 hover:text-slate-200 transition
                        data-[active=true]:text-sky-300
                        data-[active=true]:border-b-2 data-[active=true]:border-sky-400"
                      >
                        {t.label}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={onCopy}
                    aria-label="Copy code"
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-200 px-2.5 py-1.5 rounded-md ring-1 ring-slate-700/50 hover:ring-slate-600 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden="true">
                      <path d="M8 8h12v12H8z" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M4 4h12v12H4z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <span className="hidden sm:inline">{copied ? "Copied" : copyError ? "Copy failed" : "Copy"}</span>
                  </button>
                </div>
              </div>

              {/* Code area */}
              <div className="relative overflow-auto">
                <div className="grid" role="tabpanel" id={`tab-${active}-panel`} aria-labelledby={`tab-${active}`}>
                  <pre className="relative text-[13px] md:text-[13.5px] leading-6 p-3 md:p-4 lg:p-5 m-0 code-font">
                    <div className="flex">
                      {/* Gutter */}
                      <div className="select-none text-right pr-3 mr-3 w-10 border-r border-slate-800/60 text-slate-600">
                        {codeLines.map((_, i) => (
                          <div key={i}>{i + 1}</div>
                        ))}
                      </div>
                      {/* Code */}
                      <code
                        className="block min-w-0 whitespace-pre text-slate-300"
                        dangerouslySetInnerHTML={{ __html: highlighted }}
                      />
                    </div>
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Local styles for syntax colors to match Ocean Professional theme */}
      <style>{`
        .syntax-keyword { color: var(--syntax-keyword, #38bdf8); }
        .syntax-string { color: var(--syntax-string, #34d399); }
        .syntax-attr { color: var(--syntax-attr, #a5b4fc); }
        .syntax-number { color: var(--syntax-number, #fbbf24); }
        .syntax-comment { color: var(--syntax-comment, #6b7280); font-style: italic; }
        .syntax-tag { color: var(--text-secondary, #9ca3af); }
      `}</style>
    </section>
  );
};

export default PreviewCard;
