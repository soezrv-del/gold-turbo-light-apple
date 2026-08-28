import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Car, Compass, GitCompare, ScanLine, Sparkles, Warehouse } from "lucide-react";

export const Route = createFileRoute("/more")({ component: MorePage });

const ITEMS = [
  { to: "/match" as const, title: "Find a match", body: "Quiz the catalog by class, use, and budget", icon: Sparkles },
  { to: "/value" as const, title: "Book value", body: "Wholesale / trade / retail bands, two units", icon: Compass },
  { to: "/vin" as const, title: "VIN decoder", body: "NHTSA vPIC + recalls", icon: ScanLine },
  { to: "/garage" as const, title: "Garage", body: "Saved coaches and your rig profile", icon: Warehouse },
  { to: "/compare" as const, title: "Compare", body: "Up to three models side by side", icon: GitCompare },
  { to: "/tow" as const, title: "Tow match", body: "Truck trim vs trailer weight", icon: Car },
  { to: "/about" as const, title: "About RVFAX", body: "What this hybrid catalog is — and isn’t", icon: BookOpen },
];

function MorePage() {
  return (
    <div className="space-y-6">
      <header>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">More</p>
        <h1 className="font-display text-4xl font-semibold">Tools</h1>
      </header>
      <div className="grid gap-3 sm:grid-cols-2">
        {ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className="flex gap-4 rounded-xl border border-border bg-surface p-4 hover:border-primary/40"
            >
              <div className="flex size-11 items-center justify-center rounded-md bg-primary/15 text-primary">
                <Icon className="size-5" />
              </div>
              <div>
                <p className="font-display text-xl font-semibold">{item.title}</p>
                <p className="text-sm text-muted">{item.body}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <p className="text-xs text-dim">
        Catalog is bundled spec data (50 makes, 350+ models). Ratings are computed heuristics. Reviews are illustrative.
        Live market, VIN, and routing call external services when you ask.
      </p>
    </div>
  );
}
