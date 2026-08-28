import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/input";
import { askGrok } from "@/lib/server/ai";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/grok")({
  validateSearch: (s: Record<string, unknown>) => ({
    q: typeof s.q === "string" ? s.q : "",
  }),
  component: GrokPage,
});

const STARTERS = [
  "Diesel pusher vs gas Class A for full-timing",
  "What should I inspect on a 2019 Grand Design Reflection?",
  "Fifth wheel hitch weight and payload math",
  "COVID-era (2020–2023) build quality issues",
];

interface Msg {
  role: "user" | "assistant";
  content: string;
}

function GrokPage() {
  const { q } = Route.useSearch();
  const [input, setInput] = useState(q);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const scroller = useRef<HTMLDivElement>(null);

  async function send(text?: string) {
    const prompt = (text ?? input).trim();
    if (!prompt || busy) return;
    setInput("");
    setErr("");
    const next = [...msgs, { role: "user" as const, content: prompt }];
    setMsgs(next);
    setBusy(true);
    const res = await askGrok({
      data: {
        prompt,
        history: msgs.slice(-8).map((m) => ({ role: m.role, content: m.content })),
      },
    });
    setBusy(false);
    if (!res.ok) {
      setErr(res.error);
      return;
    }
    setMsgs([...next, { role: "assistant", content: res.text }]);
    requestAnimationFrame(() => scroller.current?.scrollTo({ top: 99999, behavior: "smooth" }));
  }

  return (
    <div className="flex min-h-[70dvh] flex-col gap-4">
      <header>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">RvGROK</p>
        <h1 className="font-display text-4xl font-semibold">RV specialist assistant</h1>
        <p className="mt-1 max-w-xl text-sm text-muted">
          Ask about classes, chassis, towing, recalls, and 2024–2026 market conditions. Not legal or personalized financial advice.
        </p>
      </header>

      <div ref={scroller} className="flex-1 space-y-3 overflow-y-auto rounded-xl border border-border bg-navy p-4">
        {msgs.length === 0 && (
          <div className="grid gap-2 sm:grid-cols-2">
            {STARTERS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => send(s)}
                className="min-h-11 rounded-lg border border-border bg-surface px-3 py-2 text-left text-sm hover:border-primary/40"
              >
                {s}
              </button>
            ))}
          </div>
        )}
        {msgs.map((m, i) => (
          <div
            key={`${m.role}-${i}`}
            className={cn(
              "max-w-[42rem] whitespace-pre-wrap rounded-lg px-3 py-2 text-sm leading-relaxed",
              m.role === "user" ? "ml-auto bg-primary/15 text-fg" : "bg-surface text-fg",
            )}
          >
            {m.content}
          </div>
        ))}
        {busy ? <p className="text-sm text-primary">Thinking…</p> : null}
        {err ? <p className="text-sm text-danger">{err}</p> : null}
      </div>

      <form
        className="flex flex-col gap-2 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          void send();
        }}
      >
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about a year, make, and model…"
          className="min-h-11 flex-1 sm:min-h-11"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              void send();
            }
          }}
        />
        <Button type="submit" disabled={busy || !input.trim()} className="sm:self-end">
          <Send className="size-4" /> Ask
        </Button>
      </form>
    </div>
  );
}
