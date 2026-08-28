import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { decodeVin, lookupRecalls, type VinDecode, type RecallItem } from "@/lib/server/nhtsa";
import { rvSlug } from "@/lib/utils";
import { getBySlug } from "@/data/catalog";

export const Route = createFileRoute("/vin")({ component: VinPage });

function VinPage() {
  const [vin, setVin] = useState("");
  const [busy, setBusy] = useState(false);
  const [decoded, setDecoded] = useState<VinDecode | null>(null);
  const [recalls, setRecalls] = useState<RecallItem[]>([]);

  async function run() {
    setBusy(true);
    const d = await decodeVin({ data: { vin } });
    setDecoded(d);
    if (d.valid && d.make && d.model && d.year) {
      const r = await lookupRecalls({ data: { make: d.make, model: d.model, year: d.year } });
      setRecalls(r.recalls);
    } else {
      setRecalls([]);
    }
    setBusy(false);
  }

  const catalogHit = decoded ? getBySlug(rvSlug(decoded.make, decoded.model)) : undefined;

  return (
    <div className="space-y-6">
      <header>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">VIN</p>
        <h1 className="font-display text-4xl font-semibold">Decoder</h1>
        <p className="mt-1 text-sm text-muted">NHTSA vPIC decode plus recall campaigns for year/make/model.</p>
      </header>

      <form
        className="flex flex-col gap-2 sm:flex-row sm:items-end"
        onSubmit={(e) => {
          e.preventDefault();
          void run();
        }}
      >
        <div className="flex-1">
          <Label htmlFor="vin">17-character VIN</Label>
          <Input
            id="vin"
            className="mt-1 font-mono uppercase"
            maxLength={17}
            value={vin}
            onChange={(e) => setVin(e.target.value.toUpperCase())}
            placeholder="1F66F5NY0N0A12345"
          />
        </div>
        <Button type="submit" disabled={busy || vin.trim().length < 17}>
          {busy ? "Decoding…" : "Decode"}
        </Button>
      </form>

      {decoded && !decoded.valid && <p className="text-sm text-danger">{decoded.errorText || "Could not decode"}</p>}

      {decoded?.valid && (
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            ["Year", decoded.year],
            ["Make", decoded.make],
            ["Model", decoded.model],
            ["Trim", decoded.trim],
            ["Body", decoded.bodyClass],
            ["Engine", [decoded.engineDisplacement && `${decoded.engineDisplacement}L`, decoded.engineHP && `${decoded.engineHP} hp`].filter(Boolean).join(" · ")],
            ["Fuel", decoded.fuelType],
            ["GVWR", decoded.gvwr],
            ["Plant", [decoded.plantCity, decoded.plantState, decoded.plantCountry].filter(Boolean).join(", ")],
            ["Manufacturer", decoded.manufacturer],
          ]
            .filter(([, v]) => v)
            .map(([k, v]) => (
              <div key={k} className="flex justify-between rounded-md border border-border bg-surface px-3 py-2 text-sm">
                <span className="text-muted">{k}</span>
                <span className="text-right">{v}</span>
              </div>
            ))}
        </div>
      )}

      {catalogHit ? (
        <Link
          to="/rv/$slug"
          params={{ slug: catalogHit.slug }}
          search={{ year: decoded?.year || "2024", floorplan: "" }}
          className="block rounded-xl border border-primary/40 bg-primary/10 p-4 text-sm"
        >
          Open {catalogHit.make} {catalogHit.model} in the catalog
        </Link>
      ) : null}

      {recalls.length > 0 && (
        <section>
          <h2 className="mb-2 font-display text-2xl">Recalls</h2>
          <div className="space-y-2">
            {recalls.map((r) => (
              <article key={r.campaignNumber || r.summary} className="rounded-lg border border-border bg-navy p-3 text-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">{r.component}</p>
                <p className="mt-1">{r.summary}</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
