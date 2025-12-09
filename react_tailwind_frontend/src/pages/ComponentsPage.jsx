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
  // Tailwind Play–ready boilerplate helpers for parity in HTML snippets
  const playDocStart = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      try {
        tailwind.config = {
          theme: { extend: {} }
        }
      } catch(e) {
        console.warn("Invalid Tailwind config in snippet.", e)
      }
    </script>
  </head>
  <body class="min-h-screen bg-slate-950 text-slate-200 grid place-items-center p-8">`;

  const playDocEnd = `
  </body>
</html>`;

  // BUTTONS snippet: supply HTML (Play ready), optional JS/Config empty for parity
  const buttonsSnippet = {
    html:
      playDocStart +
      `
    <div class="flex gap-3">
      <button class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:brightness-110">Primary</button>
      <button class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-amber-500 text-white hover:brightness-110">Secondary</button>
      <button class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50">Outline</button>
    </div>
` +
      playDocEnd,
    js: ``,
    config: `{
  "theme": {
    "extend": {}
  }
}`,
    // Keep JSX for internal conversion to HTML if needed by PreviewCard
    jsx: `<div className="flex gap-3">
  <button className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-ocean-primary text-white hover:brightness-110">Primary</button>
  <button className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-ocean-secondary text-white hover:brightness-110">Secondary</button>
  <button className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50">Outline</button>
</div>`,
  };

  // ALERTS snippet
  const alertsSnippet = {
    html:
      playDocStart +
      `
    <div class="space-y-3 w-full max-w-xl">
      <div class="rounded-lg border p-3 bg-blue-50 text-blue-800 border-blue-200">Heads up! This is an informational alert.</div>
      <div class="rounded-lg border p-3 bg-amber-50 text-amber-800 border-amber-200">Success! Your changes have been saved.</div>
      <div class="rounded-lg border p-3 bg-red-50 text-red-800 border-red-200">Error! Something went wrong.</div>
    </div>
` +
      playDocEnd,
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

  // CARD snippet
  const cardSnippet = {
    html:
      playDocStart +
      `
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
` +
      playDocEnd,
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
        {/* Buttons */}
        <PreviewCard
          title="Buttons"
          description="Primary, Secondary, and Outline buttons."
          preview={
            <div className="flex flex-wrap items-center gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
          }
          code={buttonsSnippet}
        />

        {/* Alerts */}
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

        {/* Cards */}
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
