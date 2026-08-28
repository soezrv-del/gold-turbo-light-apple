import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ScanLine, History } from "lucide-react";
import { SearchWizard, type WizardValue } from "@/components/catalog/SearchWizard";
import { RvCard } from "@/components/catalog/RvCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CATALOG,
  ERAS,
  MAKES,
  RV_TYPES,
  TOTAL_FLOORPLANS,
  TOTAL_MODELS,
  eraMatches,
  type EraId,
} from "@/data/catalog";
import { rvSlug } from "@/lib/utils";
import { useAppStore } from "@/lib/store";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const navigate = useNavigate();
  const [era, setEra] = useState<EraId>("all");
  const [type, setType] = useState<string>("");
  const [make, setMake] = useState("");
  const [q, setQ] = useState("");
  const [wizard, setWizard] = useState<WizardValue | null>(null);
  const recent = useAppStore((s) => s.recent);
  const bumpSearch = useAppStore((s) => s.bumpSearch);
  const pushRecent = useAppStore((s) => s.pushRecent);

  function runWizard(v: WizardValue) {
    bumpSearch();
    pushRecent(v);
    setWizard(v);
    navigate({
      to: "/rv/$slug",
      params: { slug: rvSlug(v.make, v.model) },
      search: { year: v.year, floorplan: v.floorplan },
    });
  }

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return CATALOG.filter((e) => {
      if (wizard && (e.make !== wizard.make || e.model !== wizard.model)) return false;
      if (make && e.make !== make) return false;
      if (type && e.spec.type !== type) return false;
      if (!eraMatches(e.spec, e.make, era)) return false;
      if (needle) {
        const hay = `${e.make} ${e.model} ${e.spec.type} ${e.spec.floorplans.join(" ")}`.toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    });
  }, [era, type, make, q, wizard]);

  const shown = results.slice(0, 24);

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-xl border border-border">
        <img src="/rv/hero.png" alt="" className="absolute inset-0 size-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/30" />
        <div className="relative space-y-4 px-5 py-8 md:px-8 md:py-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">RvFAX catalog</p>
          <h1 className="max-w-xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Specs, ratings, and value before you buy.
          </h1>
          <p className="max-w-lg text-sm text-muted md:text-base">
            {TOTAL_MODELS} models · {MAKES.length} brands · {TOTAL_FLOORPLANS.toLocaleString()} floorplans. Towing,
            financing, VIN decode, and an RV specialist assistant.
          </p>
          <div className="flex flex-wrap gap-6 pt-2 font-display text-2xl tabular">
            <Stat n={TOTAL_MODELS} l="Models" />
            <Stat n={MAKES.length} l="Makes" />
            <Stat n={TOTAL_FLOORPLANS} l="Floorplans" />
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <Button asChild>
              <Link to="/match">Find a match</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/value">Book value</Link>
            </Button>
          </div>
        </div>
      </section>

      <SearchWizard onSearch={runWizard} />

      <div className="flex flex-wrap gap-2">
        {ERAS.map((e) => (
          <button
            key={e.id}
            type="button"
            onClick={() => setEra(e.id)}
            className={cn(
              "min-h-11 rounded-full border px-3.5 text-xs font-semibold uppercase tracking-wide",
              era === e.id ? "border-primary bg-primary/15 text-primary" : "border-border text-muted",
            )}
          >
            {e.label}
            <span className="ml-1.5 text-dim">{e.hint}</span>
          </button>
        ))}
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        <TypeBtn label="All types" active={!type} onClick={() => setType("")} />
        {RV_TYPES.map((t) => (
          <TypeBtn key={t} label={t} active={type === t} onClick={() => setType(t)} />
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-[1fr_220px]">
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Filter by name, type, or floorplan…"
        />
        <select
          value={make}
          onChange={(e) => setMake(e.target.value)}
          className="h-11 rounded-md border border-border bg-navy px-3 text-sm text-fg"
        >
          <option value="">All makes</option>
          {MAKES.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      {recent.length > 0 && (
        <div>
          <p className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
            <History className="size-3.5" /> Recent
          </p>
          <div className="flex flex-wrap gap-2">
            {recent.map((r) => (
              <Link
                key={r.id}
                to="/rv/$slug"
                params={{ slug: rvSlug(r.make, r.model) }}
                search={{ year: r.year, floorplan: r.floorplan }}
                className="rounded-full border border-border bg-surface px-3 py-2 text-xs text-fg hover:border-primary/50"
              >
                {r.year} {r.make} {r.model}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-end justify-between gap-3">
        <h2 className="font-display text-2xl font-semibold">
          {wizard ? `${wizard.year} ${wizard.make} ${wizard.model}` : "Browse catalog"}
        </h2>
        <p className="text-sm text-muted tabular">{results.length} matches</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((e) => (
          <RvCard
            key={e.slug}
            entry={e}
            year={wizard?.year || String(e.spec.yearEnd ?? 2024)}
            floorplan={wizard?.floorplan || ""}
          />
        ))}
      </div>
      {results.length > shown.length && (
        <p className="text-center text-sm text-muted">Showing 24 of {results.length}. Narrow filters to see more.</p>
      )}
      {results.length === 0 && (
        <p className="rounded-lg border border-border bg-surface p-8 text-center text-sm text-muted">
          No models match those filters. Try All years or clear the type.
        </p>
      )}

      <Link
        to="/vin"
        className="flex items-center gap-4 rounded-xl border border-border bg-navy p-4 hover:border-primary/40"
      >
        <div className="flex size-12 items-center justify-center rounded-md bg-primary/15 text-primary">
          <ScanLine className="size-6" />
        </div>
        <div>
          <p className="font-display text-lg font-semibold">VIN decoder</p>
          <p className="text-sm text-muted">NHTSA vPIC decode plus recall lookup</p>
        </div>
        <Button className="ml-auto hidden sm:inline-flex" type="button">
          Decode
        </Button>
      </Link>
    </div>
  );
}

function Stat({ n, l }: { n: number; l: string }) {
  return (
    <div>
      <div className="text-primary">{n.toLocaleString()}</div>
      <div className="text-[11px] uppercase tracking-[0.14em] text-muted">{l}</div>
    </div>
  );
}

function TypeBtn({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full border px-3 py-2 text-xs font-medium",
        active ? "border-primary bg-primary text-primary-fg" : "border-border text-muted",
      )}
    >
      {label}
    </button>
  );
}
