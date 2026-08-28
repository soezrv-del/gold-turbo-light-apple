import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { FieldSelect, Label } from "@/components/ui/input";
import { CATALOG, estimateMarket, getBySlug, MAKES, modelsForMake, typeImage } from "@/data/catalog";
import { useAppStore } from "@/lib/store";
import { formatLbs, formatUsd, rvSlug } from "@/lib/utils";
import { TypeChip } from "@/components/catalog/Stars";

export const Route = createFileRoute("/value")({ component: ValuePage });

function pickDefault(i: number) {
  const e = CATALOG[i] ?? CATALOG[0];
  return { make: e.make, model: e.model, year: String(e.spec.yearEnd ?? 2022) };
}

function ValuePage() {
  const compare = useAppStore((s) => s.compare);
  const a0 = compare[0] ? getBySlug(compare[0]) : undefined;
  const b0 = compare[1] ? getBySlug(compare[1]) : undefined;
  const [left, setLeft] = useState(
    a0 ? { make: a0.make, model: a0.model, year: String(a0.spec.yearEnd ?? 2022) } : pickDefault(4),
  );
  const [right, setRight] = useState(
    b0 ? { make: b0.make, model: b0.model, year: String(b0.spec.yearEnd ?? 2024) } : pickDefault(20),
  );

  const cards = [left, right].map((sel) => {
    const e = getBySlug(rvSlug(sel.make, sel.model)) ?? CATALOG.find((c) => c.make === sel.make && c.model === sel.model);
    return { sel, e };
  });

  return (
    <div className="space-y-6">
      <header>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Book value</p>
        <h1 className="font-display text-4xl font-semibold">Side-by-side market bands</h1>
        <p className="mt-1 text-sm text-muted">
          Wholesale / trade / retail from the in-app depreciation model (not a NADA subscription). Pre-fills from Compare if you picked two.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((c, i) => (
          <Picker
            key={i}
            label={i === 0 ? "Unit A" : "Unit B"}
            make={c.sel.make}
            model={c.sel.model}
            year={c.sel.year}
            onChange={i === 0 ? setLeft : setRight}
          />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((c, i) =>
          c.e ? <BookCard key={i} make={c.e.make} model={c.e.model} year={c.sel.year} /> : <p key={i}>Not in catalog</p>,
        )}
      </div>
    </div>
  );
}

function Picker({
  label,
  make,
  model,
  year,
  onChange,
}: {
  label: string;
  make: string;
  model: string;
  year: string;
  onChange: (v: { make: string; model: string; year: string }) => void;
}) {
  const models = modelsForMake(make);
  return (
    <div className="space-y-2 rounded-xl border border-border bg-surface p-4">
      <p className="text-[11px] uppercase tracking-wide text-muted">{label}</p>
      <FieldSelect
        value={make}
        onChange={(e) => {
          const mk = e.target.value;
          onChange({ make: mk, model: modelsForMake(mk)[0] ?? "", year });
        }}
      >
        {MAKES.map((m) => (
          <option key={m}>{m}</option>
        ))}
      </FieldSelect>
      <FieldSelect value={model} onChange={(e) => onChange({ make, model: e.target.value, year })}>
        {models.map((m) => (
          <option key={m}>{m}</option>
        ))}
      </FieldSelect>
      <div>
        <Label>Year</Label>
        <FieldSelect className="mt-1" value={year} onChange={(e) => onChange({ make, model, year: e.target.value })}>
          {Array.from({ length: 27 }, (_, i) => String(2026 - i)).map((y) => (
            <option key={y}>{y}</option>
          ))}
        </FieldSelect>
      </div>
    </div>
  );
}

function BookCard({ make, model, year }: { make: string; model: string; year: string }) {
  const e = useMemo(
    () => getBySlug(rvSlug(make, model)) ?? CATALOG.find((c) => c.make === make && c.model === model),
    [make, model],
  );
  if (!e) return null;
  const y = parseInt(year, 10) || 2022;
  const mid = Math.round((e.spec.msrpRange[0] + e.spec.msrpRange[1]) / 2);
  const mv = estimateMarket(mid, y);
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-navy">
      <img src={typeImage(e.spec.type)} alt="" className="h-36 w-full object-cover" />
      <div className="space-y-3 p-4">
        <TypeChip type={e.spec.type} />
        <h2 className="font-display text-2xl">
          {year} {make} {model}
        </h2>
        <p className="text-xs text-muted">
          Age {mv.age} yr · ~{mv.depreciationPercent}% off MSRP midpoint {formatUsd(mid)}
        </p>
        <Row k="Wholesale" v={`${formatUsd(mv.wholesaleLow)} – ${formatUsd(mv.wholesaleHigh)}`} />
        <Row k="Trade-in" v={`${formatUsd(Math.round(mv.tradeIn * 0.9))} – ${formatUsd(mv.tradeIn)}`} />
        <Row k="Suggested retail" v={formatUsd(mv.suggestedRetail)} accent />
        <p className="text-xs text-dim">
          {e.spec.lengthRange[0]}–{e.spec.lengthRange[1]} ft · {formatLbs(e.spec.weightRange[1])} · {e.spec.engine ?? e.spec.fuelType}
        </p>
        <Link to="/rv/$slug" params={{ slug: e.slug }} search={{ year, floorplan: "" }} className="text-sm text-primary">
          Open spec sheet
        </Link>
      </div>
    </article>
  );
}

function Row({ k, v, accent }: { k: string; v: string; accent?: boolean }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-muted">{k}</span>
      <span className={`tabular ${accent ? "text-success" : ""}`}>{v}</span>
    </div>
  );
}
