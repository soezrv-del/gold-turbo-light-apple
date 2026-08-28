import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { DESTINATIONS } from "@/data/catalog";
import { geocode, nearbyCampgrounds, routeDrive } from "@/lib/server/geo";

export const Route = createFileRoute("/trips")({ component: TripsPage });

function TripsPage() {
  const [from, setFrom] = useState("Phoenix, AZ");
  const [to, setTo] = useState("Zion National Park, UT");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [result, setResult] = useState<{
    distanceMi: number;
    durationMin: number;
    fromLabel: string;
    toLabel: string;
    steps: { instruction: string; distanceMi: number }[];
    sites: { id: number; name: string; lat: number; lon: number }[];
  } | null>(null);

  async function plan() {
    setBusy(true);
    setErr("");
    const a = await geocode({ data: { q: from } });
    const b = await geocode({ data: { q: to } });
    if (!a.ok || !b.ok) {
      setBusy(false);
      setErr((!a.ok ? a.error : b.error) ?? "Place not found");
      return;
    }
    const r = await routeDrive({ data: { from: { lat: a.lat, lon: a.lon }, to: { lat: b.lat, lon: b.lon } } });
    if (!r.ok) {
      setBusy(false);
      setErr(r.error);
      return;
    }
    const camps = await nearbyCampgrounds({ data: { lat: b.lat, lon: b.lon } });
    setResult({
      distanceMi: r.distanceMi,
      durationMin: r.durationMin,
      fromLabel: a.label,
      toLabel: b.label,
      steps: r.steps.slice(0, 12),
      sites: camps.sites,
    });
    setBusy(false);
  }

  return (
    <div className="space-y-6">
      <header>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">RvTRIPS</p>
        <h1 className="font-display text-4xl font-semibold">Drive plan</h1>
        <p className="mt-1 text-sm text-muted">Road distance, time, and campgrounds near the destination.</p>
      </header>

      <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto] md:items-end">
        <div>
          <Label>From</Label>
          <Input className="mt-1" value={from} onChange={(e) => setFrom(e.target.value)} />
        </div>
        <div>
          <Label>To</Label>
          <Input className="mt-1" value={to} onChange={(e) => setTo(e.target.value)} />
        </div>
        <Button type="button" onClick={() => void plan()} disabled={busy}>
          {busy ? "Routing…" : "Plan drive"}
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {DESTINATIONS.map((d) => (
          <button
            key={d.name}
            type="button"
            onClick={() => setTo(d.q)}
            className="min-h-11 rounded-full border border-border px-3 text-xs font-medium text-muted hover:border-primary/40 hover:text-fg"
          >
            {d.name}
          </button>
        ))}
      </div>

      {err ? <p className="text-sm text-danger">{err}</p> : null}

      {result && (
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-3">
            <Tile k="Distance" v={`${result.distanceMi.toFixed(0)} mi`} />
            <Tile k="Drive time" v={`${Math.round(result.durationMin / 60)} hr ${Math.round(result.durationMin % 60)} min`} />
            <Tile k="Fuel (est. 8 mpg)" v={`${Math.round(result.distanceMi / 8)} gal`} />
          </div>
          <p className="text-xs text-dim">
            {result.fromLabel} → {result.toLabel}
          </p>
          <ol className="space-y-1 rounded-xl border border-border bg-surface p-4 text-sm">
            {result.steps.map((s, i) => (
              <li key={`${s.instruction}-${i}`} className="flex justify-between gap-3">
                <span>{s.instruction}</span>
                <span className="tabular text-muted">{s.distanceMi.toFixed(1)} mi</span>
              </li>
            ))}
          </ol>
          <section>
            <h2 className="mb-2 font-display text-2xl">Campgrounds near arrival</h2>
            {result.sites.length === 0 ? (
              <p className="text-sm text-muted">No campgrounds returned for that area.</p>
            ) : (
              <ul className="grid gap-2 sm:grid-cols-2">
                {result.sites.map((s) => (
                  <li key={s.id} className="rounded-md border border-border bg-navy px-3 py-2 text-sm">
                    {s.name}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

function Tile({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <div className="text-[11px] uppercase tracking-wide text-muted">{k}</div>
      <div className="mt-1 font-display text-2xl tabular">{v}</div>
    </div>
  );
}
