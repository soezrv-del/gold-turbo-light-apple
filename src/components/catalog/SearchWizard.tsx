import { useMemo, useState } from "react";
import { ChevronLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { YEARS, MAKES, RV_DATA, makesForYear, modelsForYearMake } from "@/data/catalog";
import { cn } from "@/lib/utils";

type Step = "year" | "make" | "model" | "floorplan";
const STEPS: Step[] = ["year", "make", "model", "floorplan"];

export interface WizardValue {
  year: string;
  make: string;
  model: string;
  floorplan: string;
}

export function SearchWizard({ onSearch }: { onSearch: (v: WizardValue) => void }) {
  const [step, setStep] = useState<Step>("year");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [q, setQ] = useState("");

  const makes = useMemo(() => (year ? makesForYear(year) : MAKES), [year]);
  const models = useMemo(() => (make ? modelsForYearMake(year, make) : []), [year, make]);
  const floorplans = useMemo(() => (make && model ? (RV_DATA[make]?.[model]?.floorplans ?? []) : []), [make, model]);

  const options = useMemo(() => {
    const needle = q.trim().toLowerCase();
    const list =
      step === "year" ? YEARS : step === "make" ? makes : step === "model" ? models : ["(All floorplans)", ...floorplans];
    if (!needle) return list;
    return list.filter((x) => x.toLowerCase().includes(needle));
  }, [step, q, makes, models, floorplans]);

  function pick(value: string) {
    setQ("");
    if (step === "year") {
      setYear(value);
      setMake("");
      setModel("");
      setStep("make");
      return;
    }
    if (step === "make") {
      setMake(value);
      setModel("");
      setStep("model");
      return;
    }
    if (step === "model") {
      setModel(value);
      setStep("floorplan");
      return;
    }
    const fp = value.startsWith("(All") ? "" : value;
    onSearch({ year, make, model, floorplan: fp });
  }

  function back() {
    setQ("");
    if (step === "make") {
      setStep("year");
      setMake("");
      return;
    }
    if (step === "model") {
      setStep("make");
      setModel("");
      return;
    }
    if (step === "floorplan") setStep("model");
  }

  return (
    <div className="rounded-xl border border-border bg-navy p-4 shadow-panel md:p-5">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {STEPS.map((s, i) => {
          const done = STEPS.indexOf(step) > i;
          const current = step === s;
          const label = s === "year" ? year : s === "make" ? make : s === "model" ? model : "";
          return (
            <button
              key={s}
              type="button"
              onClick={() => {
                if (done) setStep(s);
              }}
              className={cn(
                "rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide",
                current && "bg-primary text-primary-fg",
                done && "bg-success/15 text-success",
                !current && !done && "bg-white/5 text-dim",
              )}
            >
              {label || s}
            </button>
          );
        })}
        {step !== "year" && (
          <Button variant="ghost" size="sm" onClick={back} className="ml-auto">
            <ChevronLeft className="size-4" /> Back
          </Button>
        )}
      </div>
      <div className="relative mb-3">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-dim" />
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={
            step === "year"
              ? "Filter years…"
              : step === "make"
                ? "Search brands…"
                : step === "model"
                  ? "Search models…"
                  : "Search floorplans…"
          }
          className="pl-9"
        />
      </div>
      <div className="grid max-h-64 grid-cols-2 gap-1.5 overflow-y-auto sm:grid-cols-3 md:grid-cols-4">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => pick(opt)}
            className="min-h-11 truncate rounded-md border border-border bg-surface px-3 text-left text-sm text-fg hover:border-primary/50 hover:bg-surface-2"
          >
            {opt}
          </button>
        ))}
        {options.length === 0 && <p className="col-span-full py-6 text-center text-sm text-muted">No matches</p>}
      </div>
    </div>
  );
}
