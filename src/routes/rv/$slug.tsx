import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Heart, Scale, Truck, Calculator, MessageSquare, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FieldSelect } from "@/components/ui/input";
import { Stars, TypeChip } from "@/components/catalog/Stars";
import {
  getBySlug,
  typeImage,
  YEARS,
  inProductionYear,
  estimateMarket,
  getMaintenanceSchedule,
  getMockReviews,
  powertrainForYear,
} from "@/data/catalog";
import { computeRating, getRatingMetadata } from "@/data/ratingData";
import { lookupRecalls, type RecallItem } from "@/lib/server/nhtsa";
import { liveMarketValue } from "@/lib/server/ai";
import { useAppStore } from "@/lib/store";
import { formatLbs, formatUsd } from "@/lib/utils";

export const Route = createFileRoute("/rv/$slug")({
  validateSearch: (search: Record<string, unknown>) => ({
    year: typeof search.year === "string" && search.year ? search.year : "2024",
    floorplan: typeof search.floorplan === "string" ? search.floorplan : "",
  }),
  component: RvDetail,
});

function RvDetail() {
  const { slug } = Route.useParams();
  const search = Route.useSearch();
  const entry = getBySlug(slug);
  const [year, setYear] = useState(search.year);
  const [floorplan, setFloorplan] = useState(search.floorplan);
  const [live, setLive] = useState<{
    tradeIn: number;
    retailLow: number;
    retailHigh: number;
    conditionNote?: string;
    source?: string;
  } | null>(null);
  const [liveErr, setLiveErr] = useState("");
  const [liveBusy, setLiveBusy] = useState(false);
  const [recalls, setRecalls] = useState<RecallItem[] | null>(null);
  const [recallBusy, setRecallBusy] = useState(false);

  const toggleSaved = useAppStore((s) => s.toggleSaved);
  const isSaved = useAppStore((s) => s.isSaved);
  const toggleCompare = useAppStore((s) => s.toggleCompare);
  const compare = useAppStore((s) => s.compare);

  if (!entry) {
    return (
      <div className="rounded-xl border border-border bg-surface p-8 text-center">
        <p className="font-display text-2xl">Model not in catalog</p>
        <Link to="/" className="mt-3 inline-block text-sm text-primary">
          Back to search
        </Link>
      </div>
    );
  }

  const { make, model, spec } = entry;
  const years = YEARS.filter((y) => inProductionYear(spec, parseInt(y, 10)));
  const rating = computeRating(make, model, year);
  const meta = getRatingMetadata(make, model, year);
  const mid = Math.round((spec.msrpRange[0] + spec.msrpRange[1]) / 2);
  const mv = live ?? estimateMarket(mid, parseInt(year, 10) || 2024);
  const maint = useMemo(() => getMaintenanceSchedule(spec), [spec]);
  const reviews = useMemo(() => getMockReviews(make, model, rating), [make, model, rating]);
  const saved = isSaved(entry.slug, year);

  async function fetchLive() {
    setLiveBusy(true);
    setLiveErr("");
    const res = await liveMarketValue({ data: { year, make, model, floorplan } });
    setLiveBusy(false);
    if (!res.ok) {
      setLiveErr(res.error);
      return;
    }
    setLive(res);
  }

  async function fetchRecalls() {
    setRecallBusy(true);
    const res = await lookupRecalls({ data: { make, model, year } });
    setRecallBusy(false);
    setRecalls(res.recalls);
  }

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-xl border border-border bg-surface">
        <div className="relative aspect-[21/9] min-h-48 bg-navy">
          <img src={typeImage(spec.type)} alt="" className="size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <TypeChip type={spec.type} />
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-5xl">
              {make} {model}
            </h1>
            <p className="mt-1 max-w-2xl text-sm text-muted">{spec.description}</p>
          </div>
        </div>
        <div className="grid gap-3 border-t border-border p-4 sm:grid-cols-3">
          <FieldSelect value={year} onChange={(e) => setYear(e.target.value)}>
            {(years.length ? years : YEARS).map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </FieldSelect>
          <FieldSelect value={floorplan} onChange={(e) => setFloorplan(e.target.value)}>
            <option value="">All floorplans</option>
            {spec.floorplans.map((fp) => (
              <option key={fp} value={fp}>
                {fp}
              </option>
            ))}
          </FieldSelect>
          <div className="flex items-center gap-2">
            <Stars rating={rating} />
            <span className="font-display text-2xl tabular text-primary">{rating.toFixed(1)}</span>
            <span className="text-xs text-dim">{meta.confidence} conf.</span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard k="MSRP" v={`${formatUsd(spec.msrpRange[0], true)}–${formatUsd(spec.msrpRange[1], true)}`} />
        <StatCard k="Length" v={`${spec.lengthRange[0]}–${spec.lengthRange[1]} ft`} />
        <StatCard k="Weight" v={`${formatLbs(spec.weightRange[0])}–${formatLbs(spec.weightRange[1])}`} />
        <StatCard k="Sleeps" v={String(spec.sleeps)} />
        <StatCard k="Slides" v={String(spec.slideouts)} />
        <StatCard k="Fuel" v={spec.fuelType} />
      </div>

      <section className="rounded-xl border border-border bg-surface p-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl font-semibold">Market value</h2>
            <p className="text-sm text-muted">
              {live?.source ?? "Depreciation model from MSRP midpoint"}
              {floorplan ? ` · ${floorplan}` : ""}
            </p>
          </div>
          <Button type="button" onClick={fetchLive} disabled={liveBusy}>
            {liveBusy ? "Searching market…" : "Live market estimate"}
          </Button>
        </div>
        {liveErr ? <p className="mt-2 text-sm text-danger">{liveErr}</p> : null}
        {live?.conditionNote ? <p className="mt-2 text-sm text-muted">{live.conditionNote}</p> : null}
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <ValueTile label="Trade-in" value={formatUsd(mv.tradeIn)} />
          <ValueTile label="Retail low" value={formatUsd(mv.retailLow)} />
          <ValueTile label="Retail high" value={formatUsd(mv.retailHigh)} accent />
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        {[
          ["Engine", spec.engine],
          ["Chassis", spec.chassis],
          ["Horsepower", spec.horsepower ? `${spec.horsepower} hp` : null],
          ["Torque", spec.torqueLbFt ? `${spec.torqueLbFt} lb-ft` : null],
          ["Fuel tank", spec.fuelCapacity ? `${spec.fuelCapacity} gal` : null],
          ["Towing", spec.towingCapacity ? formatLbs(spec.towingCapacity) : null],
          ["Fresh water", spec.freshWater ? `${spec.freshWater} gal` : null],
          ["Gray / black", spec.grayWater || spec.blackWater ? `${spec.grayWater ?? "—"} / ${spec.blackWater ?? "—"} gal` : null],
          ["Generator", spec.generator],
          ["Awning", spec.awningLength ? `${spec.awningLength} ft` : null],
          ["Ceiling", spec.ceilingHeight ? `${spec.ceilingHeight} in` : null],
          ["Warranty", spec.warrantyYears ? `${spec.warrantyYears} yr` : null],
          ["Years", `${spec.yearStart ?? "—"}–${spec.yearEnd ?? "current"}`],
          ["Founded", spec.founded ? String(spec.founded) : null],
        ]
          .filter(([, v]) => v)
          .map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 rounded-md border border-border bg-navy px-3 py-2.5 text-sm">
              <span className="text-muted">{k}</span>
              <span className="text-right tabular">{v}</span>
            </div>
          ))}
      </section>

      {spec.powertrainByYear && spec.powertrainByYear.length > 0 ? (
        <section className="rounded-xl border border-border bg-surface p-5">
          <h2 className="font-display text-2xl font-semibold">Powertrain by year</h2>
          {(() => {
            const y = parseInt(year, 10) || 2024;
            const current = powertrainForYear(spec, y);
            return current ? (
              <p className="mt-1 text-sm text-muted">
                For {year}: {current.engine}
                {current.horsepower ? ` · ${current.horsepower} hp` : ""}
                {current.chassis ? ` · ${current.chassis}` : ""}
              </p>
            ) : null;
          })()}
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead className="text-[11px] uppercase tracking-wide text-muted">
                <tr>
                  <th className="px-2 py-1">Years</th>
                  <th className="px-2 py-1">Engine</th>
                  <th className="px-2 py-1">HP</th>
                  <th className="px-2 py-1">Notes</th>
                </tr>
              </thead>
              <tbody>
                {spec.powertrainByYear.map((p) => (
                  <tr key={`${p.from}-${p.to}-${p.engine}`} className="border-t border-border">
                    <td className="px-2 py-2 tabular">
                      {p.from}–{p.to}
                    </td>
                    <td className="px-2 py-2">{p.engine}</td>
                    <td className="px-2 py-2 tabular">{p.horsepower ?? "—"}</td>
                    <td className="px-2 py-2 text-muted">{p.notes ?? p.chassis ?? ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      <div className="flex flex-wrap gap-2">
        <Button
          type="button"
          variant={saved ? "danger" : "secondary"}
          onClick={() => toggleSaved({ slug: entry.slug, make, model, year, floorplan })}
        >
          <Heart className="size-4" /> {saved ? "Saved" : "Save to garage"}
        </Button>
        <Button type="button" variant={compare.includes(entry.slug) ? "default" : "secondary"} onClick={() => toggleCompare(entry.slug)}>
          <Scale className="size-4" /> {compare.includes(entry.slug) ? "In compare" : "Compare"}
        </Button>
        <Button asChild variant="secondary">
          <Link to="/finance" search={{ price: String(mid), year, make, model }}>
            <Calculator className="size-4" /> Finance
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link to="/tow" search={{ slug: entry.slug }}>
            <Truck className="size-4" /> Towing
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link to="/grok" search={{ q: `${year} ${make} ${model} ownership issues and value` }}>
            <MessageSquare className="size-4" /> Ask RvGROK
          </Link>
        </Button>
      </div>

      <section className="rounded-xl border border-border bg-surface p-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="flex items-center gap-2 font-display text-2xl font-semibold">
            <ShieldAlert className="size-5 text-primary" /> NHTSA recalls
          </h2>
          <Button type="button" variant="secondary" onClick={fetchRecalls} disabled={recallBusy}>
            {recallBusy ? "Looking up…" : "Look up recalls"}
          </Button>
        </div>
        {recalls && recalls.length === 0 && <p className="mt-3 text-sm text-muted">No open campaigns returned for this year/make/model.</p>}
        <div className="mt-3 space-y-3">
          {recalls?.map((r) => (
            <article key={r.campaignNumber || r.summary} className="rounded-md border border-border bg-navy p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{r.component || "Recall"}</p>
              <p className="mt-1 text-sm">{r.summary}</p>
              {r.campaignNumber ? <p className="mt-1 font-mono text-xs text-dim">{r.campaignNumber}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 font-display text-2xl font-semibold">Maintenance</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="bg-navy text-[11px] uppercase tracking-wide text-muted">
              <tr>
                <th className="px-3 py-2">Task</th>
                <th className="px-3 py-2">Interval</th>
                <th className="px-3 py-2">Priority</th>
              </tr>
            </thead>
            <tbody>
              {maint.slice(0, 10).map((m) => (
                <tr key={m.task} className="border-t border-border">
                  <td className="px-3 py-2">{m.task}</td>
                  <td className="px-3 py-2 text-muted">{m.interval}</td>
                  <td className="px-3 py-2 text-primary">{m.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="mb-3 font-display text-2xl font-semibold">Owner notes</h2>
        <p className="mb-3 text-xs text-dim">Illustrative owner-style notes used in-app — not a live review feed.</p>
        <div className="grid gap-3 md:grid-cols-2">
          {reviews.slice(0, 4).map((r) => (
            <article key={r.id} className="rounded-xl border border-border bg-surface p-4">
              <p className="font-display text-lg font-semibold">{r.title}</p>
              <p className="mt-1 text-xs text-muted">
                {r.author} · {r.location} · {r.date}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function StatCard({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface px-4 py-3">
      <div className="text-[11px] uppercase tracking-[0.14em] text-muted">{k}</div>
      <div className="mt-1 font-display text-xl tabular">{v}</div>
    </div>
  );
}

function ValueTile({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-lg border border-border bg-navy p-4">
      <div className="text-[11px] uppercase tracking-wide text-muted">{label}</div>
      <div className={`mt-1 font-display text-3xl tabular ${accent ? "text-success" : "text-fg"}`}>{value}</div>
    </div>
  );
}
