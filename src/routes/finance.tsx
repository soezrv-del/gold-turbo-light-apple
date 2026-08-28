import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { FieldSelect, Input, Label } from "@/components/ui/input";
import { CREDIT_TIERS, LENDERS, calcMonthlyPayment, lookupZip } from "@/data/finance";
import { calculateRVRegistrationFee } from "@/data/rvRegistrationFees";
import { formatUsd } from "@/lib/utils";

export const Route = createFileRoute("/finance")({
  validateSearch: (s: Record<string, unknown>) => ({
    price: typeof s.price === "string" ? s.price : "",
    year: typeof s.year === "string" ? s.year : "",
    make: typeof s.make === "string" ? s.make : "",
    model: typeof s.model === "string" ? s.model : "",
  }),
  component: FinancePage,
});

function FinancePage() {
  const seed = Route.useSearch();
  const [price, setPrice] = useState(seed.price || "125000");
  const [down, setDown] = useState("15000");
  const [trade, setTrade] = useState("0");
  const [months, setMonths] = useState("144");
  const [zip, setZip] = useState("85260");
  const [tier, setTier] = useState<(typeof CREDIT_TIERS)[number]["id"]>("720");

  const loc = lookupZip(zip);
  const credit = CREDIT_TIERS.find((t) => t.id === tier) ?? CREDIT_TIERS[3];
  const p = Number(price) || 0;
  const d = Number(down) || 0;
  const tr = Number(trade) || 0;
  const n = Number(months) || 120;
  const age = Math.max(0, 2026 - (parseInt(seed.year, 10) || 2024));

  const result = useMemo(() => {
    const taxOnDiff = loc?.taxOnDifference ?? true;
    const taxable = Math.max(0, taxOnDiff ? p - tr : p);
    let tax = taxable * ((loc?.tax ?? 0) / 100);
    if (loc?.luxuryTax && p > loc.luxuryTax.threshold) {
      tax = taxable * (loc.luxuryTax.rate / 100);
    }
    const fees = loc ? calculateRVRegistrationFee(loc.code, p, 15000, age).totalFees : 0;
    const amount = Math.max(0, p - d - tr + tax + fees);
    return { tax, fees, amount, loc };
  }, [p, d, tr, loc, age]);

  return (
    <div className="space-y-6">
      <header>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">RvCAL</p>
        <h1 className="font-display text-4xl font-semibold">Payment & tax estimator</h1>
        <p className="mt-1 text-sm text-muted">
          {seed.make ? `${seed.year} ${seed.make} ${seed.model}` : "Estimate tax, registration, and monthly payment by ZIP."}
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3 rounded-xl border border-border bg-surface p-4">
          <Field label="Purchase price" value={price} onChange={setPrice} />
          <Field label="Down payment" value={down} onChange={setDown} />
          <Field label="Trade-in" value={trade} onChange={setTrade} />
          <div>
            <Label>Term (months)</Label>
            <FieldSelect value={months} onChange={(e) => setMonths(e.target.value)} className="mt-1">
              {["60", "84", "120", "144", "180"].map((m) => (
                <option key={m} value={m}>
                  {m} months
                </option>
              ))}
            </FieldSelect>
          </div>
          <div>
            <Label>Credit band</Label>
            <FieldSelect value={tier} onChange={(e) => setTier(e.target.value as typeof tier)} className="mt-1">
              {CREDIT_TIERS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label} · {t.desc}
                </option>
              ))}
            </FieldSelect>
          </div>
          <Field label="ZIP code" value={zip} onChange={setZip} />
        </div>

        <div className="rounded-xl border border-border bg-navy p-5">
          <p className="text-[11px] uppercase tracking-wide text-muted">
            {result.loc ? `${result.loc.state} · ${result.loc.tax}% tax` : "Enter a ZIP"}
          </p>
          {result.loc?.notes ? <p className="mt-1 text-xs text-dim">{result.loc.notes}</p> : null}
          <div className="mt-4 space-y-3">
            <Row k="Sales tax" v={formatUsd(result.tax)} />
            <Row k="Registration (est.)" v={formatUsd(result.fees)} />
            <Row k="Amount financed" v={formatUsd(result.amount)} />
          </div>
          <p className="mt-4 text-xs text-dim">Estimates only — not an offer of credit. Confirm with your state DMV and lender.</p>
        </div>
      </div>

      <section className="grid gap-3 md:grid-cols-2">
        {LENDERS.map((l) => {
          const apr = l.aprLow + credit.aprOffset;
          const pay = calcMonthlyPayment(result.amount, apr, n);
          return (
            <article key={l.name} className="rounded-xl border border-border bg-surface p-4">
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-display text-xl font-semibold">{l.name}</h2>
                {l.badge ? (
                  <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                    {l.badge}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 font-display text-3xl tabular text-primary">{formatUsd(pay)}<span className="text-base text-muted">/mo</span></p>
              <p className="text-sm text-muted">
                From {apr.toFixed(2)}% APR · {n} mo
              </p>
              <ul className="mt-2 space-y-1 text-xs text-muted">
                {l.perks.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Button asChild variant="secondary" className="mt-3 w-full">
                <a href={l.url} target="_blank" rel="noreferrer">
                  Lender site
                </a>
              </Button>
            </article>
          );
        })}
      </section>
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <Label>{label}</Label>
      <Input className="mt-1" inputMode="decimal" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-muted">{k}</span>
      <span className="tabular">{v}</span>
    </div>
  );
}
