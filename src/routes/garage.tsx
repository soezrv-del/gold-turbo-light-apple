import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FieldSelect, Input, Label } from "@/components/ui/input";
import { MAKES, modelsForMake } from "@/data/catalog";
import { useAppStore, type GarageProfile } from "@/lib/store";
import { rvSlug } from "@/lib/utils";

export const Route = createFileRoute("/garage")({ component: GaragePage });

function GaragePage() {
  const garage = useAppStore((s) => s.garage);
  const profile = useAppStore((s) => s.profile);
  const setProfile = useAppStore((s) => s.setProfile);
  const toggleSaved = useAppStore((s) => s.toggleSaved);
  const [form, setForm] = useState<GarageProfile>(
    profile ?? {
      year: "2022",
      make: "Grand Design",
      model: "Reflection",
      floorplan: "",
      vin: "",
      heightFt: "13.2",
      widthFt: "8.5",
      lengthFt: "33",
      gvwr: "11995",
      axles: "2",
      hasPropane: true,
    },
  );

  return (
    <div className="space-y-8">
      <header>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Garage</p>
        <h1 className="font-display text-4xl font-semibold">Your rigs</h1>
      </header>

      <section>
        <h2 className="mb-3 font-display text-2xl">Saved</h2>
        {garage.length === 0 ? (
          <p className="rounded-xl border border-border bg-surface p-6 text-sm text-muted">
            Nothing saved yet. Heart a model from the catalog.
          </p>
        ) : (
          <ul className="space-y-2">
            {garage.map((g) => (
              <li key={`${g.slug}-${g.year}`} className="flex items-center justify-between gap-3 rounded-lg border border-border bg-surface px-3 py-2">
                <Link
                  to="/rv/$slug"
                  params={{ slug: g.slug }}
                  search={{ year: g.year, floorplan: g.floorplan }}
                  className="text-sm"
                >
                  {g.year} {g.make} {g.model}
                </Link>
                <Button type="button" size="sm" variant="ghost" onClick={() => toggleSaved(g)}>
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="rounded-xl border border-border bg-surface p-4">
        <h2 className="font-display text-2xl">Active profile</h2>
        <p className="mb-4 text-sm text-muted">Used as a default on towing and trip clearance notes. Stored on this device.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <Label>Year</Label>
            <Input className="mt-1" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} />
          </div>
          <div>
            <Label>VIN</Label>
            <Input className="mt-1 font-mono uppercase" value={form.vin} onChange={(e) => setForm({ ...form, vin: e.target.value })} />
          </div>
          <div>
            <Label>Make</Label>
            <FieldSelect
              className="mt-1"
              value={form.make}
              onChange={(e) => {
                const make = e.target.value;
                setForm({ ...form, make, model: modelsForMake(make)[0] ?? "" });
              }}
            >
              {MAKES.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </FieldSelect>
          </div>
          <div>
            <Label>Model</Label>
            <FieldSelect className="mt-1" value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })}>
              {modelsForMake(form.make).map((m) => (
                <option key={m}>{m}</option>
              ))}
            </FieldSelect>
          </div>
          <div>
            <Label>Length (ft)</Label>
            <Input className="mt-1" value={form.lengthFt} onChange={(e) => setForm({ ...form, lengthFt: e.target.value })} />
          </div>
          <div>
            <Label>Height (ft)</Label>
            <Input className="mt-1" value={form.heightFt} onChange={(e) => setForm({ ...form, heightFt: e.target.value })} />
          </div>
        </div>
        <Button
          className="mt-4"
          type="button"
          onClick={() => {
            setProfile(form);
          }}
        >
          Save profile
        </Button>
        {profile ? (
          <Link
            to="/rv/$slug"
            params={{ slug: rvSlug(profile.make, profile.model) }}
            search={{ year: profile.year, floorplan: profile.floorplan }}
            className="ml-3 text-sm text-primary"
          >
            Open in catalog
          </Link>
        ) : null}
      </section>
    </div>
  );
}
