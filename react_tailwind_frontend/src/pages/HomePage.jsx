import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

/**
 * PUBLIC_INTERFACE
 * HomePage provides the landing view at "/" with quick links to Components and Blocks.
 * It preserves the Ocean Professional theme and does not remove or override existing routes.
 */
const HomePage = () => {
  return (
    <div className="space-y-8">
      <header className="mb-2">
        <h1 className="text-2xl font-semibold text-gray-900">UI Library</h1>
        <p className="text-gray-600">
          Ocean Professional themed React + Tailwind UI library with live previews and code snippets.
        </p>
      </header>

      <section className="relative overflow-hidden rounded-xl bg-ocean-gradient border border-gray-200">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-200/40 blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-amber-200/40 blur-2xl"></div>
        </div>

        <div className="relative px-6 py-10 sm:px-10 sm:py-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Build faster with Ocean UI Components & Blocks
          </h2>
          <p className="mt-2 text-gray-600 max-w-prose">
            Browse ready-to-use components and higher-level sections. Copy Tailwind Play–ready snippets
            or explore detail pages for more context.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <Link to="/components">
              <Button>Browse Components</Button>
            </Link>
            <Link to="/blocks">
              <Button variant="outline">Browse Blocks</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/components"
          className="group bg-white border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition flex items-center justify-between"
        >
          <div>
            <div className="text-sm font-semibold text-gray-900">Components</div>
            <div className="text-sm text-gray-600 mt-1">
              Buttons, Alerts, Cards and more basic building blocks.
            </div>
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

        <Link
          to="/blocks"
          className="group bg-white border border-gray-200 rounded-xl p-4 hover:bg-gray-50 transition flex items-center justify-between"
        >
          <div>
            <div className="text-sm font-semibold text-gray-900">Blocks</div>
            <div className="text-sm text-gray-600 mt-1">
              Hero sections and other higher-level UI sections.
            </div>
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
      </section>
    </div>
  );
};

export default HomePage;
