import React from "react";
import PreviewCard from "../components/PreviewCard";
import Button from "../components/ui/Button";
import Alert from "../components/ui/Alert";
import Card from "../components/ui/Card";
import { Link } from "react-router-dom";
import { COMPONENTS } from "../data/libraryData";

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
  // Buttons snippet remains a single <section>-wrapped fragment to match Blocks style and user intent.
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
    jsx: undefined,
  };

  // ALERTS snippet aligned to single <section>-wrapped HTML fragment
  const alertsSnippet = {
    html: `<section class="p-6">
  <div class="space-y-3 w-full max-w-xl mx-auto">
    <div class="rounded-lg border p-3 bg-blue-50 text-blue-800 border-blue-200">Heads up! This is an informational alert.</div>
    <div class="rounded-lg border p-3 bg-amber-50 text-amber-800 border-amber-200">Success! Your changes have been saved.</div>
    <div class="rounded-lg border p-3 bg-red-50 text-red-800 border-red-200">Error! Something went wrong.</div>
  </div>
</section>`,
    js: ``,
    config: ``,
    jsx: undefined,
  };

  // CARD snippet aligned to single <section>-wrapped HTML fragment
  const cardSnippet = {
    html: `<section class="p-6">
  <div class="bg-white border border-gray-200 rounded-xl shadow text-gray-900 w-full max-w-xl mx-auto">
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
</section>`,
    js: ``,
    config: ``,
    jsx: undefined,
  };

  return (
    <div className="space-y-8">
      <header className="mb-2">
        <h1 className="text-2xl font-semibold text-gray-900">Components</h1>
        <p className="text-gray-600">
          Building blocks styled with the Ocean Professional theme.
        </p>
      </header>

      {/* Quick list that navigates to detail pages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        {COMPONENTS.map((c) => (
          <Link
            key={c.slug}
            to={`/components/${c.slug}`}
            className="group bg-white border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition flex items-center justify-between"
          >
            <div>
              <div className="text-sm font-semibold text-gray-900">{c.title}</div>
              {c.description && (
                <div className="text-sm text-gray-600 mt-1 line-clamp-2">{c.description}</div>
              )}
            </div>
            <svg
              className="w-6 h-6 text-gray-400 group-hover:text-ocean-primary transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Representative: uses the exact provided Tailwind HTML snippet in the code block */}
        <PreviewCard
          title="Buttons"
          description="Primary, Secondary, and Outline button variants (Ocean theme)."
          preview={
            <div className="p-6">
              <div className="flex items-center gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
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
