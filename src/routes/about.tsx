import { createFileRoute } from "@tanstack/react-router";
import { MAKES, TOTAL_FLOORPLANS, TOTAL_MODELS } from "@/data/catalog";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <div className="space-y-8">
      <header className="flex items-center gap-4">
        <img src="/rv/rvmax-logo-circle.jpeg" alt="" className="size-16 rounded-full object-cover" />
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">About</p>
          <h1 className="font-display text-4xl font-semibold">Know before you buy</h1>
        </div>
      </header>

      <p className="max-w-2xl text-lg leading-relaxed text-muted">
        RVFAX is a buyer-side spec desk: catalog data, ratings, towing math, VIN/recall lookup, and a Grok-powered
        specialist — so a dealer pitch is not the only source on the lot.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <figure className="overflow-hidden rounded-xl border border-border">
          <img src="/rv/story-verification.png" alt="" className="h-48 w-full object-cover" />
          <figcaption className="p-3 text-sm text-muted">Verify claims against specs, NHTSA, and market bands.</figcaption>
        </figure>
        <figure className="overflow-hidden rounded-xl border border-border">
          <img src="/rv/story-success.png" alt="" className="h-48 w-full object-cover" />
          <figcaption className="p-3 text-sm text-muted">Walk in with numbers, not a brochure.</figcaption>
        </figure>
      </div>

      <section className="grid gap-3 sm:grid-cols-3">
        <Stat n={TOTAL_MODELS} l="Models in this build" />
        <Stat n={MAKES.length} l="Makes" />
        <Stat n={TOTAL_FLOORPLANS} l="Floorplans" />
      </section>

      <section className="rounded-xl border border-border bg-surface p-5 text-sm leading-relaxed text-muted">
        <h2 className="mb-2 font-display text-2xl text-fg">What this hybrid includes</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>Expo catalog from the first dump (specs, ratings, maintenance, reviews).</li>
          <li>Full-source overlay: powertrain-by-year, 12 extra models, ZIP→state tax tables, DMV fee math.</li>
          <li>Match quiz and book-value compare that run on-device against the bundled catalog.</li>
          <li>Live VIN decode / recalls (NHTSA), routing, and RvGROK when you ask — not on page load.</li>
        </ul>
        <p className="mt-3 text-xs text-dim">
          Ratings are heuristics. Reviews are illustrative owner-style notes. Market bands are a depreciation model, not
          a licensed guidebook. Confirm tax and registration with the state DMV.
        </p>
      </section>
    </div>
  );
}

function Stat({ n, l }: { n: number; l: string }) {
  return (
    <div className="rounded-xl border border-border bg-navy p-4">
      <div className="font-display text-3xl tabular text-primary">{n.toLocaleString()}</div>
      <div className="text-[11px] uppercase tracking-wide text-muted">{l}</div>
    </div>
  );
}
