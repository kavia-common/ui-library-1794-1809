import React from "react";
import SnippetPlay from "../components/SnippetPlay";

/**
 * PUBLIC_INTERFACE
 * SnippetsPlayground demonstrates the SnippetPlay component using
 * - a "component" (buttons row)
 * - a "block" (hero section)
 */
const SnippetsPlayground = () => {
  const componentHtml = `
<div class="grid place-items-center min-h-[240px] bg-slate-50 p-6">
  <div class="space-x-2">
    <button class="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium bg-sky-500 text-white hover:bg-sky-400">Primary</button>
    <button class="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium bg-slate-700 text-white hover:bg-slate-600">Secondary</button>
    <button class="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium bg-transparent text-slate-700 border border-slate-300 hover:text-slate-900 hover:border-slate-400">Outline</button>
  </div>
</div>`.trim();

  const componentJs = `console.log("Buttons component ready");`;

  const componentConfig = `{
  theme: {
    extend: {
      colors: {
        brand: "#38bdf8"
      }
    }
  }
}`;

  const blockHtml = `
<section class="relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-gray-50 rounded-xl">
  <div class="relative px-6 py-12 sm:px-10 sm:py-16">
    <h2 class="text-3xl font-bold text-gray-900">Build faster with Ocean UI Blocks</h2>
    <p class="mt-2 text-gray-600 max-w-prose">
      A curated collection of responsive UI sections built with Tailwind CSS. Copy and customize to fit your project.
    </p>
    <div class="mt-5 flex items-center gap-3">
      <a href="#" class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-500 shadow">
        Get Started
      </a>
      <a href="#" class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50">
        Learn More
      </a>
    </div>
  </div>
</section>`.trim();

  const blockJs = `console.log("Hero block mounted");`;

  return (
    <div className="space-y-10">
      <header className="mb-2">
        <h1 className="text-2xl font-semibold text-gray-900">Snippets Playground</h1>
        <p className="text-gray-600">
          Tailwind Play–style snippet previews with runnable copy.
        </p>
      </header>

      <div className="space-y-8">
        <SnippetPlay
          title="Buttons (Component)"
          html={componentHtml}
          js={componentJs}
          config={componentConfig}
          copyMode="fragment"
        />

        <SnippetPlay
          title="Hero (Block)"
          html={blockHtml}
          js={blockJs}
          config=""
          copyMode="full"
        />
      </div>
    </div>
  );
};

export default SnippetsPlayground;
