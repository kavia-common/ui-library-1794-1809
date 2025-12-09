import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";

/**
 * PUBLIC_INTERFACE
 * SnippetPlay renders a Tailwind Play–style snippet UI with:
 * - Tabs (HTML, JS, Config) shown only if content is provided.
 * - Syntax-highlighted code viewer with copy for the active tab.
 * - Isolated iframe live preview with Tailwind CSS injected (CDN fallback).
 * - copyMode: 'fragment' | 'full' to control copied HTML boilerplate.
 *
 * Props:
 *  - html?: string
 *  - js?: string
 *  - config?: string (object-literal or JSON string suitable for tailwind.config)
 *  - title?: string
 *  - copyMode?: 'fragment' | 'full'
 */
const CDN_TAILWIND = "https://cdn.tailwindcss.com";

/**
 * Simple syntax highlighter for markup/js/config to match Ocean Professional,
 * without adding extra runtime dependencies. It does not aim to be perfect but
 * gives a Tailwind-docs-like feel using CSS classes.
 */
function highlight(code = "", lang = "html") {
  if (!code) return "";

  // Escape HTML
  const esc = code
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

  // Very light tokenization
  // Comments
  let out = esc.replace(/(\/\*[\s\S]*?\*\/|\/\/[^\n]*|<!--[\s\S]*?-->)/g, (m) => {
    return `<span class="syntax-comment">${m}</span>`;
  });

  if (lang === "html" || lang === "markup") {
    // Attributes: key="value"
    out = out.replace(/([a-zA-Z-:]+)(=)(&quot;[^&]*&quot;|&apos;[^&]*&apos;|&quot;&quot;|&apos;&apos;)/g, (_m, k, eq, v) => {
      return `<span class="syntax-attr">${k}</span>${eq}<span class="syntax-string">${v}</span>`;
    });
    // Tags
    out = out
      .replace(/(&lt;\/?)([a-zA-Z0-9-:]+)/g, (_m, a1, a2) => {
        return `<span class="syntax-tag">${a1}</span><span class="syntax-keyword">${a2}</span>`;
      })
      .replace(/(\/?&gt;)/g, `<span class="syntax-tag">$1</span>`);
  } else if (lang === "js" || lang === "javascript") {
    // Strings
    out = out.replace(
      /([`'"])(?:\\.|(?!\1).)*\1/g,
      (m) => `<span class="syntax-string">${m}</span>`
    );
    // Numbers/booleans/null
    out = out.replace(
      /\b(true|false|null|undefined|NaN|Infinity|(?:0x)?\d+(?:\.\d+)?)\b/g,
      `<span class="syntax-number">$1</span>`
    );
    // Keywords (limited set)
    out = out.replace(
      /\b(const|let|var|return|function|if|else|for|while|class|new|import|from|export|default|try|catch|finally|await|async|switch|case|break|continue|throw)\b/g,
      `<span class="syntax-keyword">$1</span>`
    );
  } else {
    // Config (JSON-ish) strings and numbers
    out = out.replace(
      /([`'"])(?:\\.|(?!\1).)*\1/g,
      (m) => `<span class="syntax-string">${m}</span>`
    );
    out = out.replace(
      /\b(true|false|null|undefined|NaN|Infinity|(?:0x)?\d+(?:\.\d+)?)\b/g,
      `<span class="syntax-number">$1</span>`
    );
  }

  return out;
}

/**
 * Create a full HTML document string using fragment html, config and js.
 * This is used when copyMode === 'full' and for iframe preview fallback.
 */
function buildFullHtml({ html = "", js = "", config = "" }) {
  // Wrap js in module script if present
  const jsBlock = js?.trim()
    ? `<script type="module">\n${js}\n</script>`
    : "";

  // If config present, inject into tailwind.config
  const cfg = config?.trim()
    ? `<script>try{tailwind.config = ${config}}catch(e){console.warn("Invalid Tailwind config for preview", e)}</script>`
    : "";

  // Ensure body content uses user's fragment as-is
  const bodyContent = html || "";

  const doc = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
    />
    <script src="${CDN_TAILWIND}"></script>
    ${cfg}
    <style>
      :root { color-scheme: light dark; }
      body { margin: 0; }
    </style>
  </head>
  <body>
    ${bodyContent}
    ${jsBlock}
  </body>
</html>`;
  return doc;
}

/**
 * Build the code that should be copied for the HTML tab given copyMode.
 */
function buildCopyHtml({ html = "", js = "", config = "", copyMode = "fragment" }) {
  if (copyMode === "full") {
    return buildFullHtml({ html, js, config });
  }
  return html || "";
}

/**
 * Hook: copy text to clipboard with feedback.
 */
function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const copy = useCallback(async (text) => {
    const toCopy = text ?? "";
    setError("");
    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        await navigator.clipboard.writeText(toCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
        return true;
      }
      throw new Error("Navigator clipboard not available");
    } catch (e1) {
      try {
        const ta = document.createElement("textarea");
        ta.value = toCopy;
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
        setError("Copy failed");
        return false;
      }
    }
  }, []);
  return { copied, error, copy };
}

/**
 * Render an iframe preview and update its content on changes.
 */
function IframePreview({ html, js, config }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    const full = buildFullHtml({ html, js, config });
    doc.open();
    doc.write(full);
    doc.close();
  }, [html, js, config]);

  return (
    <iframe
      ref={iframeRef}
      title="Snippet preview"
      className="w-full h-72 sm:h-80 md:h-96 bg-white"
      sandbox="allow-scripts allow-same-origin"
    />
  );
}

/**
 * TabButton for the header tabs with accessibility roles.
 */
function TabButton({ active, onClick, children, id }) {
  return (
    <button
      id={id}
      role="tab"
      aria-selected={active}
      aria-controls={`${id}-panel`}
      data-active={active}
      onClick={onClick}
      className={`h-10 px-3 text-[12px] md:text-xs tracking-wider uppercase font-medium 
      text-slate-400 hover:text-slate-200 transition
      data-[active=true]:text-sky-300
      data-[active=true]:border-b-2 data-[active=true]:border-sky-400`}
    >
      {children}
    </button>
  );
}

/**
 * PUBLIC_INTERFACE
 * SnippetPlay Component
 */
const SnippetPlay = ({
  html = "",
  js = "",
  config = "",
  title = "Snippet",
  copyMode = "fragment",
}) => {
  const tabs = useMemo(() => {
    const t = [];
    if (html) t.push({ key: "html", label: "HTML" });
    if (js) t.push({ key: "js", label: "JS" });
    if (config) t.push({ key: "config", label: "Config" });
    return t.length ? t : [{ key: "html", label: "HTML" }];
  }, [html, js, config]);

  const [active, setActive] = useState(tabs[0]?.key || "html");
  useEffect(() => {
    // Reset active if tabs set changed
    if (!tabs.find((t) => t.key === active)) {
      setActive(tabs[0]?.key || "html");
    }
  }, [tabs, active]);

  const { copied, error, copy } = useCopyToClipboard();

  const currentCode = useMemo(() => {
    if (active === "html") return html;
    if (active === "js") return js;
    if (active === "config") return config;
    return "";
  }, [active, html, js, config]);

  const codeLang = active === "js" ? "js" : active === "config" ? "json" : "html";
  const highlighted = useMemo(() => highlight(currentCode || "", codeLang), [currentCode, codeLang]);

  const onCopy = useCallback(() => {
    if (active === "html") {
      return copy(buildCopyHtml({ html, js, config, copyMode }));
    }
    return copy(currentCode || "");
  }, [active, html, js, config, copyMode, currentCode, copy]);

  const codeLines = useMemo(() => (currentCode ? currentCode.split("\n") : [""]), [currentCode]);

  return (
    <section className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Preview Panel */}
        <div className="bg-white/5 border border-slate-800/70 rounded-lg overflow-hidden shadow-soft">
          <div className="px-4 py-3 border-b border-slate-800/70 flex items-center justify-between">
            <h3 className="text-sm font-medium text-slate-200">{title}</h3>
          </div>
          <div className="p-6 md:p-8 bg-white">
            <IframePreview html={html} js={js} config={config} />
          </div>
        </div>

        {/* Code Panel */}
        <div className="rounded-lg overflow-hidden border border-slate-800/70" style={{ background: "var(--bg-canvas, #0f131a)" }}>
          {/* Header */}
          <div
            className="flex items-center justify-between px-3 md:px-4 h-11 border-b border-slate-800/70"
            role="tablist"
            aria-label="Snippet tabs"
          >
            <div className="flex items-center gap-2 md:gap-3">
              {tabs.map((t) => (
                <TabButton
                  key={t.key}
                  id={`tab-${t.key}`}
                  active={active === t.key}
                  onClick={() => setActive(t.key)}
                >
                  {t.label}
                </TabButton>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onCopy}
                aria-label="Copy code"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-slate-200 px-2.5 py-1.5 rounded-md ring-1 ring-slate-700/50 hover:ring-slate-600 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
                  <path d="M8 8h12v12H8z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M4 4h12v12H4z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span className="hidden sm:inline">{copied ? "Copied" : error ? "Copy failed" : "Copy"}</span>
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

export default SnippetPlay;
