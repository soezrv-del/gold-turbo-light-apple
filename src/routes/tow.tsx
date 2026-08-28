import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { FieldSelect, Input, Label } from "@/components/ui/input";
import { CATALOG, getBySlug, MAKES, modelsForMake, RV_DATA } from "@/data/catalog";
import { truckMakes, truckModels, truckTrims, truckYears, TRUCK_MAKE_LABELS, type TrimSpec } from "@/data/trucks";
import { formatLbs } from "@/lib/utils";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/tow")({
  validateSearch: (s: Record<string, unknown>) => ({
    slug: typeof s.slug === "string" ? s.slug : "",
  }),
  component: TowPage,
});

function TowPage() {
  const { slug } = Route.useSearch();
  const seeded = slug ? getBySlug(slug) : undefined;
  const [ty, setTy] = useState("2025");
  const [tMake, setTMake] = useState("ford");
  const [tModel, setTModel] = useState("F-150");
  const [trimIdx, setTrimIdx] = useState(0);
  const [rvMake, setRvMake] = useState(seeded?.make ?? "Grand Design");
  const [rvModel, setRvModel] = useState(seeded?.model ?? "Reflection");
  const [passengers, setPassengers] = useState("2");

  const makes = truckMakes(ty);
  const models = truckModels(ty, tMake);
  const trims = truckTrims(ty, tMake, tModel);
  const trim: TrimSpec | undefined = trims[trimIdx] ?? trims[0];
  const rvModels = modelsForMake(rvMake);
  const spec = RV_DATA[rvMake]?.[rvModel];
  const isTowable = spec ? /fifth|travel|toy|truck camper/i.test(spec.type) : true;

  const check = useMemo(() => {
    if (!spec || !trim) return null;
    const trailer = spec.weightRange[1];
    const pin = spec.hitchPinWeight ?? Math.round(trailer * (spec.type.includes("Fifth") ? 0.2 : 0.12));
    const cargoPeople = (Number(passengers) || 0) * 180;
    const payloadUsed = pin + cargoPeople;
    const gcwrUsed = trim.curb + cargoPeople + trailer;
    const towOk = trailer <= trim.maxTow;
    const payloadOk = payloadUsed <= trim.maxPayload;
    const gcwrOk = gcwrUsed <= trim.gcwr;
    return { trailer, pin, payloadUsed, gcwrUsed, towOk, payloadOk, gcwrOk, all: towOk && payloadOk && gcwrOk };
  }, [spec, trim, passengers]);

  return (
    <div className="space-y-6">
      <header>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">RvTOW</p>
        <h1 className="font-display text-4xl font-semibold">Tow match</h1>
        <p className="mt-1 text-sm text-muted">
          Compare a truck trim against catalog trailer weight. Motorhomes show toad capacity instead.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <fieldset className="space-y-3 rounded-xl border border-border bg-surface p-4">
          <legend className="px-1 text-[11px] font-semibold uppercase tracking-wide text-muted">Tow vehicle</legend>
          <FieldSelect value={ty} onChange={(e) => { setTy(e.target.value); setTrimIdx(0); }}>
            {truckYears().map((y) => (
              <option key={y}>{y}</option>
            ))}
          </FieldSelect>
          <FieldSelect
            value={tMake}
            onChange={(e) => {
              setTMake(e.target.value);
              const next = truckModels(ty, e.target.value)[0] ?? "";
              setTModel(next);
              setTrimIdx(0);
            }}
          >
            {makes.map((m) => (
              <option key={m} value={m}>
                {TRUCK_MAKE_LABELS[m] ?? m}
              </option>
            ))}
          </FieldSelect>
          <FieldSelect
            value={tModel}
            onChange={(e) => {
              setTModel(e.target.value);
              setTrimIdx(0);
            }}
          >
            {models.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </FieldSelect>
          <FieldSelect value={String(trimIdx)} onChange={(e) => setTrimIdx(Number(e.target.value))}>
            {trims.map((t, i) => (
              <option key={t.trim} value={i}>
                {t.trim}
              </option>
            ))}
          </FieldSelect>
          {trim ? (
            <p className="text-xs text-muted">
              {trim.engine} · {trim.hitch} · curb {formatLbs(trim.curb)}
            </p>
          ) : null}
        </fieldset>

        <fieldset className="space-y-3 rounded-xl border border-border bg-surface p-4">
          <legend className="px-1 text-[11px] font-semibold uppercase tracking-wide text-muted">RV</legend>
          <FieldSelect
            value={rvMake}
            onChange={(e) => {
              setRvMake(e.target.value);
              setRvModel(modelsForMake(e.target.value)[0] ?? "");
            }}
          >
            {MAKES.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </FieldSelect>
          <FieldSelect value={rvModel} onChange={(e) => setRvModel(e.target.value)}>
            {rvModels.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </FieldSelect>
          <div>
            <Label>Passengers (payload)</Label>
            <Input className="mt-1" value={passengers} onChange={(e) => setPassengers(e.target.value)} />
          </div>
          {spec ? (
            <p className="text-xs text-muted">
              {spec.type} · {spec.lengthRange[0]}–{spec.lengthRange[1]} ft · UVW/GVWR band {formatLbs(spec.weightRange[0])}–{formatLbs(spec.weightRange[1])}
            </p>
          ) : null}
        </fieldset>
      </div>

      {spec && !isTowable ? (
        <div className="rounded-xl border border-border bg-navy p-5">
          <h2 className="font-display text-2xl">Motorhome toad rating</h2>
          <p className="mt-2 font-display text-4xl tabular text-primary">
            {spec.towingCapacity ? formatLbs(spec.towingCapacity) : "See OEM"}
          </p>
          <p className="mt-1 text-sm text-muted">
            This coach tows a dinghy, not the other way around. Use the truck matcher for trailers and fifth wheels.
          </p>
          <Link
            to="/rv/$slug"
            params={{ slug: CATALOG.find((c) => c.make === rvMake && c.model === rvModel)?.slug ?? "grand-design--reflection" }}
            search={{ year: ty, floorplan: "" }}
            className="mt-3 inline-block text-sm text-primary"
          >
            Open spec sheet
          </Link>
        </div>
      ) : check && trim ? (
        <div className={cn("rounded-xl border p-5", check.all ? "border-success/40 bg-success/10" : "border-danger/40 bg-danger/10")}>
          <h2 className="font-display text-3xl">{check.all ? "Match" : "Do not tow"}</h2>
          <p className="mt-1 text-sm text-muted">Using high-end catalog weight as a conservative check.</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <PassFail ok={check.towOk} label="Trailer vs max tow" a={formatLbs(check.trailer)} b={formatLbs(trim.maxTow)} />
            <PassFail ok={check.payloadOk} label="Pin + people vs payload" a={formatLbs(check.payloadUsed)} b={formatLbs(trim.maxPayload)} />
            <PassFail ok={check.gcwrOk} label="GCWR" a={formatLbs(check.gcwrUsed)} b={formatLbs(trim.gcwr)} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

function PassFail({ ok, label, a, b }: { ok: boolean; label: string; a: string; b: string }) {
  return (
    <div className="rounded-md border border-border bg-bg/40 p-3">
      <p className="text-[11px] uppercase tracking-wide text-muted">{label}</p>
      <p className={cn("mt-1 font-display text-lg", ok ? "text-success" : "text-danger")}>{ok ? "OK" : "Over"}</p>
      <p className="text-xs tabular text-muted">
        {a} / {b}
      </p>
    </div>
  );
}
