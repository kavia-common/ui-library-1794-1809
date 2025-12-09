import React from "react";
import PreviewCard from "../components/PreviewCard";
import Button from "../components/ui/Button";
import Alert from "../components/ui/Alert";
import Card from "../components/ui/Card";

/**
 * PUBLIC_INTERFACE
 * ComponentsPage lists basic UI components with previews and Tailwind Play–ready code tabs.
 * All snippet objects now follow the exact HTML/JS/Config data shape used by Blocks to ensure
 * identical UI and copy behavior across the app.
 */
const ComponentsPage = () => {
  /**
   * Pattern for component snippets:
   * - Provide code objects shaped like: { html: string, js?: string, config?: string, jsx?: string }
   * - For exact-copy HTML requirements, set `html` to ONLY the exact fragment the user provided.
   * - Leave `js` and `config` empty strings unless needed; PreviewCard will still render tabs properly.
   * - This ensures the Copy action returns exactly the HTML fragment, byte-for-byte.
   */

  // Representative component updated to exactly match the provided Tailwind HTML snippet.
  // Buttons snippet now uses the provided <section>…</section> HTML exactly.
  const buttonsSnippet = {
    html: `<section class="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/10 to-gray-50">
  <div class="relative px-6 py-10 sm:px-10 sm:py-14">
    <h2 class="text-3xl font-bold text-gray-900">Build faster with Ocean UI Blocks</h2>
    <p class="mt-2 text-gray-600">A curated collection of responsive UI sections built with Tailwind CSS.</p>
    <div class="mt-5 flex items-center gap-3">
      <a href="#" class="rounded-lg px-4 py-2 text-sm font-medium bg-blue-600 text-white shadow">Get Started</a>
      <a href="#" class="rounded-lg px-4 py-2 text-sm font-medium border border-gray-300 bg-white text-gray-700">Learn More</a>
    </div>
  </div>
</section>`,
    js: ``,
    config: ``,
    // Optional JSX can remain for internal conversions if ever needed elsewhere.
    // Not required for exact HTML copy behavior.
    jsx: undefined,
  };

  // ALERTS snippet (kept functional; can be converted to exact-fragment pattern when a new snippet is provided)
  const alertsSnippet = {
    html: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="min-h-screen bg-slate-950 text-slate-200 grid place-items-center p-8">
    <div class="space-y-3 w-full max-w-xl">
      <div class="rounded-lg border p-3 bg-blue-50 text-blue-800 border-blue-200">Heads up! This is an informational alert.</div>
      <div class="rounded-lg border p-3 bg-amber-50 text-amber-800 border-amber-200">Success! Your changes have been saved.</div>
      <div class="rounded-lg border p-3 bg-red-50 text-red-800 border-red-200">Error! Something went wrong.</div>
    </div>
  </body>
</html>`,
    js: ``,
    config: `{
  "theme": {
    "extend": {}
  }
}`,
    jsx: `<div className="space-y-3">
  <div className="rounded-lg border p-3 bg-blue-50 text-blue-800 border-blue-200">Heads up! This is an informational alert.</div>
  <div className="rounded-lg border p-3 bg-amber-50 text-amber-800 border-amber-200">Success! Your changes have been saved.</div>
  <div className="rounded-lg border p-3 bg-red-50 text-red-800 border-red-200">Error! Something went wrong.</div>
</div>`,
  };

  // CARD snippet (kept functional; pattern for converting to exact fragment when provided)
  const cardSnippet = {
    html: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="min-h-screen bg-slate-950 text-slate-200 grid place-items-center p-8">
    <div class="bg-white border border-gray-200 rounded-xl shadow w-full max-w-xl text-gray-900">
      <div class="px-4 py-3 border-b border-gray-200">
        <h4 class="text-sm font-semibold">Card Title</h4>
      </div>
      <div class="p-4 text-sm text-gray-700">
        This is a basic card using the Ocean Professional theme.
      </div>
      <div class="px-4 py-3 border-t border-gray-200">
        <button class="text-blue-600 text-sm">Action</button>
      </div>
    </div>
  </body>
</html>`,
    js: ``,
    config: `{
  "theme": {
    "extend": {}
  }
}`,
    jsx: `<div className="bg-white border border-gray-200 rounded-xl shadow-soft overflow-hidden">
  <div className="px-4 py-3 border-b border-gray-200">
    <h4 className="text-sm font-semibold text-gray-900">Card Title</h4>
  </div>
  <div className="p-4 text-sm text-gray-700">
    This is a basic card using the Ocean Professional theme.
  </div>
  <div className="px-4 py-3 border-t border-gray-200">
    <button className="text-ocean-primary text-sm">Action</button>
  </div>
</div>`,
  };

  return (
    <div className="space-y-8">
      <header className="mb-2">
        <h1 className="text-2xl font-semibold text-gray-900">Components</h1>
        <p className="text-gray-600">
          Building blocks styled with the Ocean Professional theme.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Representative: uses the exact provided Tailwind HTML snippet in the code block */}
        <PreviewCard
          title="Buttons"
          description="Updated to use the exact Tailwind HTML snippet in the code tabs."
          preview={
            <div className="relative overflow-hidden rounded-xl bg-ocean-gradient">
              <div className="relative px-6 py-10 sm:px-10 sm:py-14">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Build faster with Ocean UI Blocks
                </h2>
                <p className="mt-2 text-gray-600 max-w-prose">
                  A curated collection of responsive UI sections built with Tailwind CSS.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <Button>Get Started</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </div>
          }
          code={buttonsSnippet}
        />

        {/* Alerts (kept as before; apply the same exact-fragment pattern when a specific snippet is provided) */}
        <PreviewCard
          title="Alerts"
          description="Informational, Success, and Error alerts."
          preview={
            <div className="space-y-3">
              <Alert>Heads up! This is an informational alert.</Alert>
              <Alert type="success">Success! Your changes have been saved.</Alert>
              <Alert type="error">Error! Something went wrong.</Alert>
            </div>
          }
          code={alertsSnippet}
        />

        {/* Card (kept as before; pattern ready to switch to exact HTML when provided) */}
        <PreviewCard
          title="Card"
          description="A simple card with header and footer."
          preview={
            <Card
              title="Card Title"
              footer={<button className="text-ocean-primary text-sm">Action</button>}
            >
              This is a basic card using the Ocean Professional theme.
            </Card>
          }
          code={cardSnippet}
        />
      </div>
    </div>
  );
};

export default ComponentsPage;
