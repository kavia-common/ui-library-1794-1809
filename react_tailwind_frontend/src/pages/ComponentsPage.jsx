import React from "react";
import PreviewCard from "../components/PreviewCard";
import Button from "../components/ui/Button";
import Alert from "../components/ui/Alert";
import Card from "../components/ui/Card";

/**
 * PUBLIC_INTERFACE
 * ComponentsPage lists basic UI components with previews and Tailwind Play–ready code tabs.
 * Keep only the sidebar (provided by AppShell) and the PreviewCards in main content.
 * Remove any standalone page-level headings/intro duplicates to avoid repeating titles/descriptions.
 */
const ComponentsPage = () => {
  // Buttons snippet fragment
  const buttonsSnippet = {
    html: `<section class="p-6">
  <div class="w-full max-w-xl mx-auto">
    <div class="flex items-center gap-3">
      <!-- Primary -->
      <a href="#" class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-[#2563EB] text-white shadow hover:brightness-110 focus:ring-2 focus:ring-blue-300">Primary</a>
      <!-- Secondary -->
      <a href="#" class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-[#F59E0B] text-white shadow hover:brightness-110 focus:ring-2 focus:ring-amber-300">Secondary</a>
      <!-- Outline -->
      <a href="#" class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-blue-200">Outline</a>
    </div>
  </div>
</section>`,
    js: ``,
    config: ``,
  };

  // Alerts snippet fragment
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
  };

  // Card snippet fragment
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
  };

  return (
    <div className="space-y-6">
      {/* Keep only PreviewCards – remove any quick lists or headings above */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
