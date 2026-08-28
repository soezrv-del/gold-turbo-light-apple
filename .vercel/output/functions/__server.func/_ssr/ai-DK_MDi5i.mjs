import { t as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-A6pJPYTF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-DK_MDi5i.js
var SYSTEM = `You are RvGROK, an elite RV industry expert for buyers, dealers, appraisers, and lenders.
Cover: RV classes, OEMs, GVWR/GCWR/payload/chassis, financing, NHTSA recalls, towing, diesel vs gas maintenance, 2024–2026 market conditions.
Style: concise, numbered when listing, professional. Cite NHTSA.gov for recalls. Never give legal or personalized financial advice.
When a specific year/make/model is mentioned, include typical length, weight band, and known ownership issues.`;
var askGrok_createServerFn_handler = createServerRpc({
	id: "73e2432317d6fb9102b99cf9d558cb55438438c9dda3d996ac7f1eada83ee90e",
	name: "askGrok",
	filename: "src/lib/server/ai.ts"
}, (opts) => askGrok.__executeServer(opts));
var askGrok = createServerFn({ method: "POST" }).validator((input) => input).handler(askGrok_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "AI is not available in this environment"
	};
	const messages = [
		{
			role: "system",
			content: SYSTEM
		},
		...(data.history ?? []).slice(-10),
		{
			role: "user",
			content: data.prompt.slice(0, 4e3)
		}
	];
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			messages,
			temperature: .4,
			max_tokens: 900
		})
	});
	if (!res.ok) return {
		ok: false,
		error: `xAI API error ${res.status}`
	};
	return {
		ok: true,
		text: (await res.json()).choices[0]?.message.content ?? ""
	};
});
var liveMarketValue_createServerFn_handler = createServerRpc({
	id: "96d82fae5d1ce13d9975c20eb98f1be952d2680d0ad9b160ffb02b4ed19754ab",
	name: "liveMarketValue",
	filename: "src/lib/server/ai.ts"
}, (opts) => liveMarketValue.__executeServer(opts));
var liveMarketValue = createServerFn({ method: "POST" }).validator((input) => input).handler(liveMarketValue_createServerFn_handler, async ({ data }) => {
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return {
		ok: false,
		error: "AI is not available"
	};
	const desc = `${data.year} ${data.make} ${data.model}${data.floorplan ? ` ${data.floorplan}` : ""}`;
	const res = await fetch("https://api.x.ai/v1/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`
		},
		body: JSON.stringify({
			model: "grok-4.5",
			messages: [{
				role: "system",
				content: "You are an RV market analyst. Return ONLY valid JSON with keys tradeIn, retailLow, retailHigh (integers USD), conditionNote (one sentence), source (short string). No markdown."
			}, {
				role: "user",
				content: `Current US used market value for a ${desc}. Use typical mileage/condition for age. National average.`
			}],
			temperature: .2,
			max_tokens: 280
		})
	});
	if (!res.ok) return {
		ok: false,
		error: `xAI API error ${res.status}`
	};
	const jsonMatch = ((await res.json()).choices[0]?.message.content ?? "").match(/\{[\s\S]*\}/);
	if (!jsonMatch) return {
		ok: false,
		error: "Could not parse market estimate"
	};
	try {
		return {
			ok: true,
			...JSON.parse(jsonMatch[0])
		};
	} catch {
		return {
			ok: false,
			error: "Could not parse market estimate"
		};
	}
});
//#endregion
export { askGrok_createServerFn_handler, liveMarketValue_createServerFn_handler };
