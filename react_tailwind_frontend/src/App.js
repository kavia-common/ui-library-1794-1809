import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, useLocation, Navigate } from "react-router-dom";
import "./tailwind.css";
import "./App.css";
import { listItems } from "./data/libraryData";

/**
 * Ocean Professional layout with fixed navbar, collapsible sidebar, and main content area.
 * Includes routes for Home, Components, and Blocks pages.
 */

// Basic components and pages
import HomePage from "./pages/HomePage";
import ComponentsPage from "./pages/ComponentsPage";
import BlocksPage from "./pages/BlocksPage";
import DetailPage from "./pages/DetailPage";
import CategorySidebar from "./components/CategorySidebar";

/**
 * Determine which sidebar, if any, should be shown for the current path.
 * - Hide on "/"
 * - Show Components list on "/components"
 * - Show Blocks list on "/blocks"
 * - On detail routes, keep same category sidebar and highlight active item automatically via NavLink.
 */
function useSidebarConfig() {
  const location = useLocation();
  const path = location.pathname || "/";
  const isHome = path === "/";
  if (isHome) return { show: false, category: null };
  const isBlocks = path.startsWith("/blocks");
  return { show: true, category: isBlocks ? "blocks" : "components" };
}

// PUBLIC_INTERFACE
function AppShell() {
  /** This internal component renders the layout with access to router hooks. */
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { show, category } = useSidebarConfig();

  // PUBLIC_INTERFACE
  const toggleSidebar = () => setSidebarOpen((s) => !s);

  const navItemClass =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const navItemActive = "bg-blue-50 text-ocean-primary";
  const navItemInactive =
    "text-gray-600 hover:text-ocean-primary hover:bg-blue-50";

  // Close the sidebar whenever we are on a route where it should be hidden
  if (!show && sidebarOpen) {
    queueMicrotask(() => setSidebarOpen(false));
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 inset-x-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-amber-400 shadow-soft"></div>
              <span className="text-lg font-semibold text-gray-900">
                UI Library
              </span>
              <span className="ml-3 hidden sm:inline-flex items-center px-2 py-0.5 rounded-md bg-blue-50 text-ocean-primary text-xs font-medium">
                Ocean Professional
              </span>
            </div>

            {/* Desktop nav (unchanged) */}
            <div className="hidden md:flex items-center gap-2">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${navItemClass} ${isActive ? navItemActive : navItemInactive}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/components"
                className={({ isActive }) =>
                  `${navItemClass} ${isActive ? navItemActive : navItemInactive}`
                }
              >
                Components
              </NavLink>
              <NavLink
                to="/blocks"
                className={({ isActive }) =>
                  `${navItemClass} ${isActive ? navItemActive : navItemInactive}`
                }
              >
                Blocks
              </NavLink>

              <a
                href="https://tailwindcss.com/docs"
                target="_blank"
                rel="noreferrer"
                className={`${navItemClass} ${navItemInactive}`}
              >
                Docs
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={toggleSidebar}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-blue-50 hover:text-ocean-primary transition"
              aria-label="Toggle sidebar"
              aria-expanded={show ? sidebarOpen : false}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                {sidebarOpen ? (
                  <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Content wrapper with optional sidebar */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar: centralized here only when `show` is true.
            Do not render page-level sidebars. CategorySidebar receives category based on route
            and will highlight active detail items automatically via NavLink. */}
        {show && (
          <div
            className={`fixed md:sticky top-16 z-30 h-[calc(100vh-4rem)] w-72 shrink-0 overflow-y-auto bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out md:translate-x-0 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:block`}
          >
            <CategorySidebar
              category={category}
              onNavigate={() => setSidebarOpen(false)}
            />
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* Redirect /components to the first component detail using central data ordering */}
              <Route
                path="/components"
                element={
                  (() => {
                    const first = listItems("components")?.[0];
                    const firstSlug = first?.slug;
                    // If no components found, fall back to the listing page gracefully
                    if (!firstSlug) return <ComponentsPage />;
                    return <Navigate to={`/components/${firstSlug}`} replace />;
                  })()
                }
              />
              <Route path="/components/:slug" element={<DetailPage />} />
              <Route path="/blocks" element={<BlocksPage />} />
              <Route path="/blocks/:slug" element={<DetailPage />} />
            </Routes>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} UI Library</span>
          <span className="hidden sm:inline">
            Theme: Ocean Professional · Smooth transitions enabled
          </span>
        </div>
      </footer>
    </div>
  );
}

// PUBLIC_INTERFACE
function App() {
  /**
   * Root component with BrowserRouter wrapper.
   * Keeps top nav everywhere while conditionally rendering sidebar based on route.
   */
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
