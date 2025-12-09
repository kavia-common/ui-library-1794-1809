import React, { useMemo } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import PreviewCard from "../components/PreviewCard";
import Button from "../components/ui/Button";
import Alert from "../components/ui/Alert";
import Card from "../components/ui/Card";
import { getItem } from "../data/libraryData";

/**
 * PUBLIC_INTERFACE
 * DetailPage renders a component/block detail using the shared top nav layout (App).
 * Sidebar is now globally managed by App.js based on route; this page should not render its own sidebar.
 *
 * Route params:
 *  - slug: string
 * Derives category from current pathname segment ("/components/:slug" | "/blocks/:slug").
 *
 * Shows:
 *  - Breadcrumb back to category list
 *  - Title/description
 *  - PreviewCard with Tailwind Play–ready <section> code tabs in place
 */
const DetailPage = () => {
  const { slug } = useParams();
  const location = useLocation();

  // Determine category from current path so we don't require a dynamic :category segment
  const path = location.pathname || "";
  const normalizedCategory = path.startsWith("/blocks") ? "blocks" : "components";

  const item = getItem(normalizedCategory, slug);

  // Build preview React nodes for known previews.
  const previewNode = useMemo(() => {
    if (!item) return null;

    // Simple factory keyed by libraryData.preview
    switch (item.preview) {
      case "buttons":
        return (
          <div className="p-6">
            <div className="flex items-center gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </div>
        );
      case "alerts":
        return (
          <div className="space-y-3">
            <Alert>Heads up! This is an informational alert.</Alert>
            <Alert type="success">Success! Your changes have been saved.</Alert>
            <Alert type="error">Error! Something went wrong.</Alert>
          </div>
        );
      case "card":
        return (
          <Card
            title="Card Title"
            footer={<button className="text-ocean-primary text-sm">Action</button>}
          >
            This is a basic card using the Ocean Professional theme.
          </Card>
        );
      case "hero":
        return (
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
              </p>
              <div className="mt-5 flex items-center gap-3">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  }, [item]);

  // Not found state: keep within main content area; sidebar is handled globally by App.
  if (!item) {
    return (
      <main className="flex-1 min-w-0">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-sm text-gray-600">
            Not found.{" "}
            <Link
              to={normalizedCategory === "blocks" ? "/blocks" : "/components"}
              className="text-ocean-primary underline"
            >
              Back to {normalizedCategory}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const backHref = normalizedCategory === "blocks" ? "/blocks" : "/components";

  return (
    <main className="flex-1 min-w-0">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 gap-6">
          <PreviewCard
            title={item.title}
            description={item.description}
            preview={previewNode}
            code={item.code}
          />
        </div>
      </div>
    </main>
  );
};

export default DetailPage;
