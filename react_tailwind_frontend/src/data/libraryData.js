export const COMPONENTS = [
  {
    slug: "buttons",
    title: "Buttons",
    description: "Updated to use the exact Tailwind HTML snippet in the code tabs.",
    code: {
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
    },
    preview: "buttons",
  },
  {
    slug: "alerts",
    title: "Alerts",
    description: "Informational, Success, and Error alerts.",
    code: {
      html: `<section class="p-6">
  <div class="space-y-3 w-full max-w-xl mx-auto">
    <div class="rounded-lg border p-3 bg-blue-50 text-blue-800 border-blue-200">Heads up! This is an informational alert.</div>
    <div class="rounded-lg border p-3 bg-amber-50 text-amber-800 border-amber-200">Success! Your changes have been saved.</div>
    <div class="rounded-lg border p-3 bg-red-50 text-red-800 border-red-200">Error! Something went wrong.</div>
  </div>
</section>`,
      js: ``,
      config: ``,
    },
    preview: "alerts",
  },
  {
    slug: "card",
    title: "Card",
    description: "A simple card with header and footer.",
    code: {
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
    },
    preview: "card",
  },
];

export const BLOCKS = [
  {
    slug: "hero-section",
    title: "Hero Section",
    description: "A responsive hero section with subtle gradient and accent highlights.",
    code: {
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
    },
    preview: "hero",
  },
];

// PUBLIC_INTERFACE
export function getItem(category, slug) {
  /** Get a single item by category ('components' | 'blocks') and slug. */
  const list = category === "blocks" ? BLOCKS : COMPONENTS;
  return list.find((it) => it.slug === slug);
}

// PUBLIC_INTERFACE
export function listItems(category) {
  /** List all items for a category ('components' | 'blocks'). */
  return category === "blocks" ? BLOCKS : COMPONENTS;
}
