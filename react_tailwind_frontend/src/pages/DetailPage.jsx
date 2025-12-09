import React, { useMemo } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import PreviewCard from "../components/PreviewCard";
import Button from "../components/ui/Button";
import Alert from "../components/ui/Alert";
import Card from "../components/ui/Card";
import { getItem } from "../data/libraryData";

/**
 * PUBLIC_INTERFACE
 * DetailPage renders only the PreviewCard within the main content area (no extra headers).
 * Spacing/padding is handled by AppShell wrapper; keep local layout minimal to avoid duplicates.
 */
const DetailPage = () => {
  const { slug } = useParams();
  const location = useLocation();

  // Determine category from current path
  const path = location.pathname || "";
  const normalizedCategory = path.startsWith("/blocks") ? "blocks" : "components";

  const item = getItem(normalizedCategory, slug);

  // Build preview React nodes for known previews.
  const previewNode = useMemo(() => {
    if (!item) return null;

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
        // Placeholder preview for items without a custom React preview.
        // We still provide Tailwind Play–ready snippet via item.code so "Code" and copy works.
        return (
          <div className="rounded-lg border border-dashed border-gray-300 p-6 text-sm text-gray-600">
            Live preview coming soon for “{item.title}”. Use the Code tab to copy an editable Tailwind Play–ready snippet.
          </div>
        );
    }
  }, [item]);

  // Not found state — keep minimal wrapper to match AppShell padding
  if (!item) {
    return (
      <div className="text-sm text-gray-600">
        Not found.{" "}
        <Link
          to={normalizedCategory === "blocks" ? "/blocks" : "/components"}
          className="text-ocean-primary underline"
        >
          Back to {normalizedCategory}
        </Link>
      </div>
    );
  }

  // Only render PreviewCard; outer spacing provided by AppShell
  return (
    <div className="grid grid-cols-1 gap-6">
      <PreviewCard
        title={item.title}
        description={item.description}
        preview={previewNode}
        code={item.code}
      />
    </div>
  );
};

export default DetailPage;
