import React from "react";
import { NavLink } from "react-router-dom";
import { listItems } from "../data/libraryData";

/**
 * PUBLIC_INTERFACE
 * CategorySidebar renders a vertical list of items for a given category ('components' | 'blocks'),
 * highlighting the active item and linking to its slug route, while keeping within the detail layout.
 */
const CategorySidebar = ({ category, onNavigate }) => {
  const items = listItems(category);
  const basePath = category === "blocks" ? "/blocks" : "/components";

  return (
    <aside className="w-64 shrink-0 border-r border-gray-200 bg-white hidden lg:block">
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          {category === "blocks" ? "UI Blocks" : "UI Components"}
        </h3>
        <nav className="space-y-1">
          {items.map((it) => (
            <NavLink
              key={it.slug}
              to={`${basePath}/${it.slug}`}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-blue-50 text-ocean-primary"
                    : "text-gray-700 hover:bg-blue-50 hover:text-ocean-primary"
                }`
              }
              onClick={onNavigate}
              end
            >
              {it.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default CategorySidebar;
