import { Link } from "@tanstack/react-router";
import { Heart, Scale } from "lucide-react";
import { Stars, TypeChip } from "./Stars";
import { formatUsd } from "@/lib/utils";
import { typeImage, type CatalogEntry, estimateMarket } from "@/data/catalog";
import { computeRating } from "@/data/ratingData";
import { useAppStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export function RvCard({
  entry,
  year = "2024",
  floorplan = "",
}: {
  entry: CatalogEntry;
  year?: string;
  floorplan?: string;
}) {
  const { spec, make, model, slug } = entry;
  const rating = computeRating(make, model, year);
  const mid = Math.round((spec.msrpRange[0] + spec.msrpRange[1]) / 2);
  const mv = estimateMarket(mid, parseInt(year, 10) || 2024);
  const saved = useAppStore((s) => s.isSaved(slug, year));
  const toggleSaved = useAppStore((s) => s.toggleSaved);
  const compare = useAppStore((s) => s.compare);
  const toggleCompare = useAppStore((s) => s.toggleCompare);
  const inCompare = compare.includes(slug);

  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-surface shadow-panel">
      <Link
        to="/rv/$slug"
        params={{ slug }}
        search={{ year, floorplan }}
        className="block"
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-navy">
          <img
            src={typeImage(spec.type)}
            alt=""
            className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent" />
          <div className="absolute left-3 top-3">
            <TypeChip type={spec.type} />
          </div>
        </div>
        <div className="space-y-2 p-4">
          <p className="text-[11px] uppercase tracking-[0.14em] text-muted">{year}</p>
          <h3 className="font-display text-xl font-semibold leading-tight">
            {make} {model}
          </h3>
          {floorplan ? <p className="text-xs text-muted">Floorplan {floorplan}</p> : null}
          <div className="flex items-center gap-2 text-sm">
            <Stars rating={rating} />
            <span className="tabular text-primary">{rating.toFixed(1)}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 text-[11px] text-muted">
            <span className="rounded-sm bg-white/5 px-2 py-1">
              {spec.lengthRange[0]}–{spec.lengthRange[1]} ft
            </span>
            <span className="rounded-sm bg-white/5 px-2 py-1">Sleeps {spec.sleeps}</span>
            <span className="rounded-sm bg-white/5 px-2 py-1">{spec.slideouts} slides</span>
            <span className="rounded-sm bg-white/5 px-2 py-1">{spec.fuelType}</span>
          </div>
          <div className="flex gap-3 pt-1 text-xs">
            <span className="text-muted">
              Trade-in <span className="tabular text-fg">{formatUsd(mv.tradeIn, true)}</span>
            </span>
            <span className="text-muted">
              Retail <span className="tabular text-success">{formatUsd(mv.retailHigh, true)}</span>
            </span>
          </div>
        </div>
      </Link>
      <div className="flex border-t border-border">
        <button
          type="button"
          onClick={() => toggleSaved({ slug, make, model, year, floorplan })}
          className={cn(
            "flex h-11 flex-1 items-center justify-center gap-1.5 text-xs font-medium",
            saved ? "text-danger" : "text-muted hover:text-fg",
          )}
        >
          <Heart className={cn("size-4", saved && "fill-danger")} />
          {saved ? "Saved" : "Save"}
        </button>
        <button
          type="button"
          onClick={() => toggleCompare(slug)}
          className={cn(
            "flex h-11 flex-1 items-center justify-center gap-1.5 border-l border-border text-xs font-medium",
            inCompare ? "text-primary" : "text-muted hover:text-fg",
          )}
        >
          <Scale className="size-4" />
          {inCompare ? "Comparing" : "Compare"}
        </button>
      </div>
    </article>
  );
}
