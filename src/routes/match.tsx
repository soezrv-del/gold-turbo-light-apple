import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { RvCard } from "@/components/catalog/RvCard";
import { CATALOG, RV_TYPES, type CatalogEntry } from "@/data/catalog";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/match")({ component: MatchPage });

const USAGE = [
  { id: "weekend", label: "Weekend trips", hint: "Shorter, easier to store" },
  { id: "seasonal", label: "Seasonal travel", hint: "Weeks at a time" },
  { id: "fulltime", label: "Full-time living", hint: "Space, tanks, slides" },
] as const;

function scoreEntry(
  e: CatalogEntry,
  prefs: {
    type: string;
    engine: string;
    usage: string;
    minLen: number;
    maxLen: number;
    minPrice: number;
    maxPrice: number;
    keywords: string;
    slides: string;
  },
) {
  let score = 40;
  const why: string[] = [];
  if (prefs.type && e.spec.type.toLowerCase().includes(prefs.type.toLowerCase())) {
    score += 24;
    why.push("Type match");
  }
  if (prefs.engine === "diesel" && /diesel/i.test(e.spec.fuelType)) {
    score += 12;
    why.push("Diesel");
  }
  if (prefs.engine === "gas" && /gas/i.test(e.spec.fuelType)) {
    score += 12;
    why.push("Gas");
  }
  const midLen = (e.spec.lengthRange[0] + e.spec.lengthRange[1]) / 2;
  if (midLen >= prefs.minLen && midLen <= prefs.maxLen) {
    score += 10;
  } else {
    score -= 8;
  }
  const midMsrp = (e.spec.msrpRange[0] + e.spec.msrpRange[1]) / 2;
  if (midMsrp >= prefs.minPrice && midMsrp <= prefs.maxPrice) {
    score += 10;
  } else {
    score -= 6;
  }
  if (prefs.usage === "fulltime") {
    if (e.spec.sleeps >= 4) score += 6;
    if (e.spec.slideouts >= 2) {
      score += 6;
      why.push("Slides for full-time");
    }
    if ((e.spec.freshWater ?? 0) >= 50) score += 4;
  }
  if (prefs.usage === "weekend" && midLen <= 30) {
    score += 8;
    why.push("Compact");
  }
  if (prefs.slides && e.spec.slideouts >= Number(prefs.slides)) score += 4;
  const needle = prefs.keywords.trim().toLowerCase();
  if (needle) {
    const hay = `${e.make} ${e.model} ${e.spec.description ?? ""} ${e.spec.floorplans.join(" ")}`.toLowerCase();
    if (hay.includes(needle)) {
      score += 14;
      why.push("Keyword");
    }
  }
  score += e.spec.rating * 2;
  return { score, why };
}

function MatchPage() {
  const [step, setStep] = useState(0);
  const [type, setType] = useState("");
  const [engine, setEngine] = useState("any");
  const [usage, setUsage] = useState("seasonal");
  const [minLen, setMinLen] = useState("18");
  const [maxLen, setMaxLen] = useState("45");
  const [minPrice, setMinPrice] = useState("20000");
  const [maxPrice, setMaxPrice] = useState("400000");
  const [keywords, setKeywords] = useState("");
  const [slides, setSlides] = useState("");

  const results = useMemo(() => {
    const prefs = {
      type,
      engine,
      usage,
      minLen: Number(minLen) || 0,
      maxLen: Number(maxLen) || 80,
      minPrice: Number(minPrice) || 0,
      maxPrice: Number(maxPrice) || 9e9,
      keywords,
      slides,
    };
    return CATALOG.map((e) => ({ e, ...scoreEntry(e, prefs) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 12);
  }, [type, engine, usage, minLen, maxLen, minPrice, maxPrice, keywords, slides]);

  return (
    <div className="space-y-6">
      <header>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Find a match</p>
        <h1 className="font-display text-4xl font-semibold">What should you be looking at?</h1>
        <p className="mt-1 text-sm text-muted">Local scoring against the bundled catalog — no dealer API required.</p>
      </header>

      <div className="flex gap-2 text-[11px] font-semibold uppercase tracking-wide">
        {["Type", "Use", "Filters", "Results"].map((s, i) => (
          <button
            key={s}
            type="button"
            onClick={() => setStep(i)}
            className={cn("rounded-full px-3 py-1", step === i ? "bg-primary text-primary-fg" : "bg-surface text-muted")}
          >
            {s}
          </button>
        ))}
      </div>

      {step === 0 && (
        <div className="grid gap-2 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => {
              setType("");
              setStep(1);
            }}
            className={cn("min-h-11 rounded-lg border px-4 py-3 text-left", !type ? "border-primary bg-primary/10" : "border-border bg-surface")}
          >
            Any class
          </button>
          {RV_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setType(t);
                setStep(1);
              }}
              className={cn("min-h-11 rounded-lg border px-4 py-3 text-left", type === t ? "border-primary bg-primary/10" : "border-border bg-surface")}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <div className="grid gap-2 sm:grid-cols-3">
            {["any", "diesel", "gas"].map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setEngine(id)}
                className={cn("min-h-11 rounded-lg border capitalize", engine === id ? "border-primary bg-primary/10" : "border-border bg-surface")}
              >
                {id === "any" ? "No engine preference" : id}
              </button>
            ))}
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {USAGE.map((u) => (
              <button
                key={u.id}
                type="button"
                onClick={() => setUsage(u.id)}
                className={cn("rounded-lg border p-4 text-left", usage === u.id ? "border-primary bg-primary/10" : "border-border bg-surface")}
              >
                <div className="font-display text-lg">{u.label}</div>
                <div className="text-xs text-muted">{u.hint}</div>
              </button>
            ))}
          </div>
          <Button type="button" onClick={() => setStep(2)}>
            Next
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <Label>Min length (ft)</Label>
            <Input className="mt-1" value={minLen} onChange={(e) => setMinLen(e.target.value)} />
          </div>
          <div>
            <Label>Max length (ft)</Label>
            <Input className="mt-1" value={maxLen} onChange={(e) => setMaxLen(e.target.value)} />
          </div>
          <div>
            <Label>Min MSRP</Label>
            <Input className="mt-1" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
          </div>
          <div>
            <Label>Max MSRP</Label>
            <Input className="mt-1" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
          </div>
          <div>
            <Label>Min slides</Label>
            <Input className="mt-1" value={slides} onChange={(e) => setSlides(e.target.value)} placeholder="optional" />
          </div>
          <div>
            <Label>Keywords</Label>
            <Input className="mt-1" value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="Cummins, toy hauler…" />
          </div>
          <Button type="button" className="sm:col-span-2" onClick={() => setStep(3)}>
            See matches
          </Button>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <p className="text-sm text-muted">Top {results.length} from {CATALOG.length} models.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map(({ e, score, why }) => (
              <div key={e.slug} className="space-y-1">
                <RvCard entry={e} />
                <p className="px-1 text-xs text-dim">
                  Score {Math.round(score)} · {why.slice(0, 3).join(" · ") || "Spec fit"}
                </p>
              </div>
            ))}
          </div>
          <Link to="/" className="text-sm text-primary">
            Browse full catalog
          </Link>
        </div>
      )}
    </div>
  );
}
