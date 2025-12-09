import React from "react";
import PreviewCard from "../components/PreviewCard";
import Button from "../components/ui/Button";
import Alert from "../components/ui/Alert";
import Card from "../components/ui/Card";

/**
 * PUBLIC_INTERFACE
 * ComponentsPage lists basic UI components with previews and code tabs,
 * and now provides Tailwind Play–ready HTML in addition to JSX to power SnippetPlay.
 */
const ComponentsPage = () => {
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
          code={{
            // Existing JSX (preserved)
            jsx: `<div className="flex gap-3">
  <button className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-ocean-primary text-white hover:brightness-110">Primary</button>
  <button className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-ocean-secondary text-white hover:brightness-110">Secondary</button>
  <button className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50">Outline</button>
</div>`,
            css: `/* Uses Tailwind classes; customize via tailwind.config.js colors */`,
            // New Tailwind Play HTML fragment
            html: `<div class="flex gap-3">
  <button class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:brightness-110">Primary</button>
  <button class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-amber-500 text-white hover:brightness-110">Secondary</button>
  <button class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50">Outline</button>
</div>`,
          }}
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
          code={{
            jsx: `<div className="space-y-3">
  <div className="rounded-lg border p-3 bg-blue-50 text-blue-800 border-blue-200">Heads up! This is an informational alert.</div>
  <div className="rounded-lg border p-3 bg-amber-50 text-amber-800 border-amber-200">Success! Your changes have been saved.</div>
  <div className="rounded-lg border p-3 bg-red-50 text-red-800 border-red-200">Error! Something went wrong.</div>
</div>`,
            css: `/* Tailwind utility classes for background, text, and border colors */`,
            html: `<div class="space-y-3">
  <div class="rounded-lg border p-3 bg-blue-50 text-blue-800 border-blue-200">Heads up! This is an informational alert.</div>
  <div class="rounded-lg border p-3 bg-amber-50 text-amber-800 border-amber-200">Success! Your changes have been saved.</div>
  <div class="rounded-lg border p-3 bg-red-50 text-red-800 border-red-200">Error! Something went wrong.</div>
</div>`,
          }}
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
          code={{
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
            css: `/* Shadow and rounded are Tailwind utilities. Adjust in tailwind.config.js if needed. */`,
            html: `<div class="bg-white border border-gray-200 rounded-xl shadow">
  <div class="px-4 py-3 border-b border-gray-200">
    <h4 class="text-sm font-semibold text-gray-900">Card Title</h4>
  </div>
  <div class="p-4 text-sm text-gray-700">
    This is a basic card using the Ocean Professional theme.
  </div>
  <div class="px-4 py-3 border-t border-gray-200">
    <button class="text-blue-600 text-sm">Action</button>
  </div>
</div>`,
          }}
        />
      </div>
    </div>
  );
};

export default ComponentsPage;
