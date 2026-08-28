import { createServerFn } from "@tanstack/react-start";

const SYSTEM = `You are RvGROK, an elite RV industry expert for buyers, dealers, appraisers, and lenders.
Cover: RV classes, OEMs, GVWR/GCWR/payload/chassis, financing, NHTSA recalls, towing, diesel vs gas maintenance, 2024–2026 market conditions.
Style: concise, numbered when listing, professional. Cite NHTSA.gov for recalls. Never give legal or personalized financial advice.
When a specific year/make/model is mentioned, include typical length, weight band, and known ownership issues.`;

export const askGrok = createServerFn({ method: "POST" })
  .validator((input: { prompt: string; history?: { role: "user" | "assistant"; content: string }[] }) => input)
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false as const, error: "AI is not available in this environment" };

    const messages = [
      { role: "system" as const, content: SYSTEM },
      ...(data.history ?? []).slice(-10),
      { role: "user" as const, content: data.prompt.slice(0, 4000) },
    ];

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        messages,
        temperature: 0.4,
        max_tokens: 900,
      }),
    });
    if (!res.ok) {
      return { ok: false as const, error: `xAI API error ${res.status}` };
    }
    const body = (await res.json()) as { choices: { message: { content: string } }[] };
    return { ok: true as const, text: body.choices[0]?.message.content ?? "" };
  });

export const liveMarketValue = createServerFn({ method: "POST" })
  .validator((input: { year: string; make: string; model: string; floorplan?: string }) => input)
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false as const, error: "AI is not available" };

    const desc = `${data.year} ${data.make} ${data.model}${data.floorplan ? ` ${data.floorplan}` : ""}`;
    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        messages: [
          {
            role: "system",
            content:
              "You are an RV market analyst. Return ONLY valid JSON with keys tradeIn, retailLow, retailHigh (integers USD), conditionNote (one sentence), source (short string). No markdown.",
          },
          {
            role: "user",
            content: `Current US used market value for a ${desc}. Use typical mileage/condition for age. National average.`,
          },
        ],
        temperature: 0.2,
        max_tokens: 280,
      }),
    });
    if (!res.ok) return { ok: false as const, error: `xAI API error ${res.status}` };
    const body = (await res.json()) as { choices: { message: { content: string } }[] };
    const raw = body.choices[0]?.message.content ?? "";
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return { ok: false as const, error: "Could not parse market estimate" };
    try {
      const parsed = JSON.parse(jsonMatch[0]) as {
        tradeIn: number;
        retailLow: number;
        retailHigh: number;
        conditionNote?: string;
        source?: string;
      };
      return { ok: true as const, ...parsed };
    } catch {
      return { ok: false as const, error: "Could not parse market estimate" };
    }
  });
