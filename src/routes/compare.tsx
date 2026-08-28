import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Stars, TypeChip } from "@/components/catalog/Stars";
import { getBySlug, typeImage } from "@/data/catalog";
import { computeRating } from "@/data/ratingData";
import { useAppStore } from "@/lib/store";
import { formatLbs, formatUsd } from "@/lib/utils";

export const Route = createFileRoute("/compare")({ component: ComparePage });

function ComparePage() {
  const compare = useAppStore((s) => s.compare);
  const toggleCompare = useAppStore((s) => s.toggleCompare);
  const entries = compare.map((slug) => getBySlug(slug)).filter(Boolean);

  if (entries.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-surface p-8 text-center">
        <h1 className="font-display text-3xl">Nothing to compare</h1>
        <p className="mt-2 text-sm text-muted">Tap Compare on up to three catalog cards.</p>
        <Link to="/" className="mt-4 inline-block text-sm text-primary">
          Browse catalog
        </Link>
      </div>
    );
  }

  const rows: { k: string; v: (e: NonNullable<(typeof entries)[number]>) => string }[] = [
    { k: "Type", v: (e) => e.spec.type },
    { k: "Sleeps", v: (e) => String(e.spec.sleeps) },
    { k: "Slides", v: (e) => String(e.spec.slideouts) },
    { k: "Length", v: (e) => `${e.spec.lengthRange[0]}–${e.spec.lengthRange[1]} ft` },
    { k: "Weight", v: (e) => `${formatLbs(e.spec.weightRange[0])}–${formatLbs(e.spec.weightRange[1])}` },
    { k: "MSRP", v: (e) => `${formatUsd(e.spec.msrpRange[0], true)}–${formatUsd(e.spec.msrpRange[1], true)}` },
    { k: "Fuel", v: (e) => e.spec.fuelType },
    { k: "Engine", v: (e) => e.spec.engine ?? "—" },
    { k: "Towing", v: (e) => (e.spec.towingCapacity ? formatLbs(e.spec.towingCapacity) : "—") },
    { k: "Fresh water", v: (e) => (e.spec.freshWater ? `${e.spec.freshWater} gal` : "—") },
  ];

  return (
    <div className="space-y-4">
      <header>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Compare</p>
        <h1 className="font-display text-4xl font-semibold">Side by side</h1>
      </header>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-separate border-spacing-3">
          <thead>
            <tr>
              <th className="w-28" />
              {entries.map((e) => (
                <th key={e!.slug} className="rounded-xl border border-border bg-surface p-0 text-left">
                  <img src={typeImage(e!.spec.type)} alt="" className="h-28 w-full rounded-t-xl object-cover" />
                  <div className="space-y-1 p-3">
                    <TypeChip type={e!.spec.type} />
                    <Link to="/rv/$slug" params={{ slug: e!.slug }} search={{ year: "2024", floorplan: "" }} className="block font-display text-xl">
                      {e!.make} {e!.model}
                    </Link>
                    <div className="flex items-center gap-2 text-sm">
                      <Stars rating={computeRating(e!.make, e!.model, "2024")} />
                      <span className="tabular text-primary">{computeRating(e!.make, e!.model, "2024").toFixed(1)}</span>
                    </div>
                    <Button type="button" size="sm" variant="ghost" onClick={() => toggleCompare(e!.slug)}>
                      Remove
                    </Button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.k}>
                <td className="align-top text-xs uppercase tracking-wide text-muted">{row.k}</td>
                {entries.map((e) => (
                  <td key={e!.slug} className="rounded-md bg-navy px-3 py-2 text-sm">
                    {row.v(e!)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
