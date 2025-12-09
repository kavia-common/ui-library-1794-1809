/**
 * Components data is now grouped into category groups with ordered items.
 * Each item has a unique slug and minimal snippet to allow Tailwind Play copying.
 * If no custom preview exists yet, DetailPage will render a generic placeholder PreviewCard.
 */
export const COMPONENTS = [
  // Layout & Content
  { group: "Layout & Content", slug: "containers", title: "Containers", description: "Responsive content wrappers, sections, and constrained widths.", code: { html: `<section class="p-6"><div class="container mx-auto px-4"><div class="bg-white border border-gray-200 rounded-xl p-6">Container content</div></div></section>` } },
  { group: "Layout & Content", slug: "grid", title: "Grid", description: "Simple responsive grid examples using Tailwind utilities.", code: { html: `<section class="p-6"><div class="grid grid-cols-2 md:grid-cols-4 gap-3"><div class="h-16 bg-blue-50 rounded"></div><div class="h-16 bg-blue-50 rounded"></div><div class="h-16 bg-blue-50 rounded"></div><div class="h-16 bg-blue-50 rounded"></div></div></section>` } },
  { group: "Layout & Content", slug: "typography", title: "Typography", description: "Headings, paragraphs, lists, and inline styles.", code: { html: `<section class="p-6"><article class="prose max-w-none"><h1>Heading 1</h1><p class="text-gray-600">Body text paragraph with Ocean-friendly defaults.</p><ul><li>Item one</li><li>Item two</li></ul></article></section>` } },

  // Base Components
  { group: "Base Components", slug: "buttons", title: "Buttons", description: "Primary, Secondary, and Outline button variants (Ocean theme).", code: { html: `<section class="p-6">
  <div class="w-full max-w-xl mx-auto">
    <div class="flex items-center gap-3">
      <a href="#" class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-[#2563EB] text-white shadow hover:brightness-110 focus:ring-2 focus:ring-blue-300">Primary</a>
      <a href="#" class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-[#F59E0B] text-white shadow hover:brightness-110 focus:ring-2 focus:ring-amber-300">Secondary</a>
      <a href="#" class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-2 focus:ring-blue-200">Outline</a>
    </div>
  </div>
</section>` }, preview: "buttons" },
  { group: "Base Components", slug: "badges", title: "Badges", description: "Small count or status indicators.", code: { html: `<section class="p-6"><div class="flex items-center gap-2"><span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">New</span><span class="inline-flex items-center rounded-md bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-800 ring-1 ring-inset ring-amber-200">Beta</span></div></section>` } },
  { group: "Base Components", slug: "avatars", title: "Avatars", description: "User avatar circles with initials or images.", code: { html: `<section class="p-6"><div class="flex items-center gap-3"><div class="h-10 w-10 rounded-full bg-blue-500/20 grid place-items-center text-blue-700 font-semibold">AB</div><img alt="avatar" class="h-10 w-10 rounded-full object-cover" src="https://i.pravatar.cc/80?img=3"/></div></section>` } },
  { group: "Base Components", slug: "alerts", title: "Alerts", description: "Informational, Success, and Error alerts.", code: { html: `<section class="p-6">
  <div class="space-y-3 w-full max-w-xl mx-auto">
    <div class="rounded-lg border p-3 bg-blue-50 text-blue-800 border-blue-200">Heads up! This is an informational alert.</div>
    <div class="rounded-lg border p-3 bg-amber-50 text-amber-800 border-amber-200">Success! Your changes have been saved.</div>
    <div class="rounded-lg border p-3 bg-red-50 text-red-800 border-red-200">Error! Something went wrong.</div>
  </div>
</section>` }, preview: "alerts" },
  { group: "Base Components", slug: "card", title: "Card", description: "A simple card with header and footer.", code: { html: `<section class="p-6">
  <div class="bg-white border border-gray-200 rounded-xl shadow text-gray-900 w-full max-w-xl mx-auto">
    <div class="px-4 py-3 border-b border-gray-200"><h4 class="text-sm font-semibold">Card Title</h4></div>
    <div class="p-4 text-sm text-gray-700">This is a basic card using the Ocean Professional theme.</div>
    <div class="px-4 py-3 border-t border-gray-200"><button class="text-blue-600 text-sm">Action</button></div>
  </div>
</section>` }, preview: "card" },

  // Navigations
  { group: "Navigations", slug: "breadcrumbs", title: "Breadcrumbs", description: "Path navigation for context within sections.", code: { html: `<section class="p-6"><nav class="text-sm text-gray-600"><ol class="flex items-center gap-2"><li><a href="#" class="text-blue-600">Home</a></li><li>/</li><li><a href="#" class="text-blue-600">Library</a></li><li>/</li><li class="text-gray-700">Data</li></ol></nav></section>` } },
  { group: "Navigations", slug: "tabs", title: "Tabs", description: "Horizontal tabs with active state.", code: { html: `<section class="p-6"><div class="flex items-center gap-2 border-b border-gray-200"><button class="px-3 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">Account</button><button class="px-3 py-2 text-sm text-gray-600 hover:text-blue-600">Profile</button><button class="px-3 py-2 text-sm text-gray-600 hover:text-blue-600">Security</button></div></section>` } },
  { group: "Navigations", slug: "pagination", title: "Pagination", description: "Page navigation controls.", code: { html: `<section class="p-6"><div class="inline-flex items-center gap-1 rounded-lg border border-gray-300 bg-white p-1"><button class="px-2 py-1 text-sm text-gray-600">&laquo;</button><button class="px-2 py-1 text-sm bg-blue-50 text-blue-700 rounded">1</button><button class="px-2 py-1 text-sm text-gray-600">2</button><button class="px-2 py-1 text-sm text-gray-600">3</button><button class="px-2 py-1 text-sm text-gray-600">&raquo;</button></div></section>` } },

  // Basic Forms
  { group: "Basic Forms", slug: "inputs", title: "Text Inputs", description: "Input fields in various states.", code: { html: `<section class="p-6"><div class="space-y-3 max-w-md"><input class="w-full rounded-lg border border-gray-300 px-3 py-2" placeholder="Placeholder"/><input class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-300 outline-none" placeholder="Focus ring"/></div></section>` } },
  { group: "Basic Forms", slug: "selects", title: "Selects", description: "Native select styled with utilities.", code: { html: `<section class="p-6"><select class="rounded-lg border border-gray-300 px-3 py-2"><option>Option A</option><option>Option B</option></select></section>` } },
  { group: "Basic Forms", slug: "checkboxes", title: "Checkboxes", description: "Standard checkboxes with labels.", code: { html: `<section class="p-6"><label class="inline-flex items-center gap-2"><input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-300"/><span class="text-sm text-gray-700">Subscribe</span></label></section>` } },

  // Advanced Forms
  { group: "Advanced Forms", slug: "form-layouts", title: "Form Layouts", description: "Two-column forms and aligned actions.", code: { html: `<section class="p-6"><form class="grid md:grid-cols-2 gap-4 max-w-2xl"><div><label class="block text-sm text-gray-700 mb-1">First name</label><input class="w-full rounded-lg border border-gray-300 px-3 py-2"/></div><div><label class="block text-sm text-gray-700 mb-1">Last name</label><input class="w-full rounded-lg border border-gray-300 px-3 py-2"/></div><div class="md:col-span-2"><label class="block text-sm text-gray-700 mb-1">Email</label><input class="w-full rounded-lg border border-gray-300 px-3 py-2"/></div><div class="md:col-span-2"><button class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-[#2563EB] text-white">Save</button></div></form></section>` } },
  { group: "Advanced Forms", slug: "validation", title: "Validation States", description: "Error states and helper text.", code: { html: `<section class="p-6"><div class="max-w-md"><label class="block text-sm text-gray-700 mb-1">Username</label><input class="w-full rounded-lg border border-red-300 px-3 py-2"/><p class="mt-1 text-sm text-red-800">Please choose a different username.</p></div></section>` } },

  // Tables
  { group: "Tables", slug: "tables-simple", title: "Simple Table", description: "Basic bordered table with zebra rows.", code: { html: `<section class="p-6"><div class="overflow-x-auto"><table class="min-w-full text-sm border border-gray-200"><thead class="bg-gray-50 text-gray-600"><tr><th class="px-3 py-2 text-left border-b">Name</th><th class="px-3 py-2 text-left border-b">Title</th><th class="px-3 py-2 text-left border-b">Status</th></tr></thead><tbody class="text-gray-700"><tr class="even:bg-gray-50"><td class="px-3 py-2 border-b">Leslie</td><td class="px-3 py-2 border-b">Developer</td><td class="px-3 py-2 border-b">Active</td></tr><tr class="even:bg-gray-50"><td class="px-3 py-2 border-b">Michael</td><td class="px-3 py-2 border-b">Designer</td><td class="px-3 py-2 border-b">Inactive</td></tr></tbody></table></div></section>` } },
  { group: "Tables", slug: "tables-with-actions", title: "Table with Actions", description: "Tables including row actions and status.", code: { html: `<section class="p-6"><div class="overflow-x-auto"><table class="min-w-full text-sm border border-gray-200"><thead class="bg-gray-50 text-gray-600"><tr><th class="px-3 py-2 text-left border-b">Name</th><th class="px-3 py-2 text-left border-b">Role</th><th class="px-3 py-2 text-left border-b">Actions</th></tr></thead><tbody class="text-gray-700"><tr class="even:bg-gray-50"><td class="px-3 py-2 border-b">Sarah</td><td class="px-3 py-2 border-b">Engineer</td><td class="px-3 py-2 border-b"><button class="text-blue-600">Edit</button></td></tr><tr class="even:bg-gray-50"><td class="px-3 py-2 border-b">Tom</td><td class="px-3 py-2 border-b">PM</td><td class="px-3 py-2 border-b"><button class="text-blue-600">Edit</button></td></tr></tbody></table></div></section>` } },
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

/**
 * PUBLIC_INTERFACE
 * Get a single item by category ('components' | 'blocks') and slug.
 */
// PUBLIC_INTERFACE
export function getItem(category, slug) {
  const list = category === "blocks" ? BLOCKS : COMPONENTS;
  return list.find((it) => it.slug === slug);
}

/**
 * PUBLIC_INTERFACE
 * Optional: grouped listing for components if/when the sidebar wants headings.
 * Returns array of { group, items: [{slug,title}] } preserving order.
 */
// PUBLIC_INTERFACE
export function listComponentGroups() {
  const groups = [];
  for (const it of COMPONENTS) {
    const g = it.group || "General";
    let entry = groups.find((x) => x.group === g);
    if (!entry) {
      entry = { group: g, items: [] };
      groups.push(entry);
    }
    entry.items.push({ slug: it.slug, title: it.title });
  }
  return groups;
}

/**
 * PUBLIC_INTERFACE
 * Return a flat, ordered list suitable for the sidebar.
 * For components, we flatten grouped items preserving declaration order.
 */
// PUBLIC_INTERFACE
export function listItems(category) {
  /** List all items for a category ('components' | 'blocks'). */
  if (category === "blocks") return BLOCKS;
  // components: flatten and map to {slug, title}
  return COMPONENTS.map((it) => ({ slug: it.slug, title: it.title }));
}
