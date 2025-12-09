import React from "react";
import PreviewCard from "../components/PreviewCard";
import Button from "../components/ui/Button";

/**
 * PUBLIC_INTERFACE
 * BlocksPage showcases higher-level UI blocks (e.g., hero, pricing).
 */
const BlocksPage = () => {
  const HeroPreview = (
    <div className="relative overflow-hidden rounded-xl bg-ocean-gradient">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-200/40 blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-amber-200/40 blur-2xl"></div>
      </div>
      <div className="relative px-6 py-10 sm:px-10 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Build faster with Ocean UI Blocks
        </h2>
        <p className="mt-2 text-gray-600 max-w-prose">
          A curated collection of responsive UI sections built with Tailwind CSS.
          Copy and customize to fit your project.
        </p>
        <div className="mt-5 flex items-center gap-3">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </div>
  );

  const heroCode = {
    jsx: `<section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500/10 to-gray-50">
  <div className="relative px-6 py-10 sm:px-10 sm:py-14">
    <h2 className="text-3xl font-bold text-gray-900">Build faster with Ocean UI Blocks</h2>
    <p className="mt-2 text-gray-600">A curated collection of responsive UI sections built with Tailwind CSS.</p>
    <div className="mt-5 flex items-center gap-3">
      <button className="rounded-lg px-4 py-2 text-sm font-medium bg-ocean-primary text-white">Get Started</button>
      <button className="rounded-lg px-4 py-2 text-sm font-medium border border-gray-300 bg-white text-gray-700">Learn More</button>
    </div>
  </div>
</section>`,
    css: `/* Leverages utilities and theme colors from tailwind.config.js */`,
    // Tailwind Play–ready HTML
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
  };

  return (
    <div className="space-y-8">
      <header className="mb-2">
        <h1 className="text-2xl font-semibold text-gray-900">Blocks</h1>
        <p className="text-gray-600">
          Higher-level sections ready to drop into your pages.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        <PreviewCard
          title="Hero Section"
          description="A responsive hero section with subtle gradient and accent highlights."
          preview={HeroPreview}
          code={heroCode}
        />
      </div>
    </div>
  );
};

export default BlocksPage;
