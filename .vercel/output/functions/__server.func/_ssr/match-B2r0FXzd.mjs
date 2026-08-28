import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as cn } from "./router-CPdh4L2m.mjs";
import { o as RV_TYPES, t as CATALOG } from "./catalog-DjbtJjNv.mjs";
import { t as Button } from "./button-Cg_PeIRX.mjs";
import { n as Input, r as Label } from "./input-opqfG9iy.mjs";
import { t as RvCard } from "./RvCard-BR4gqHIZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/match-B2r0FXzd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var USAGE = [
	{
		id: "weekend",
		label: "Weekend trips",
		hint: "Shorter, easier to store"
	},
	{
		id: "seasonal",
		label: "Seasonal travel",
		hint: "Weeks at a time"
	},
	{
		id: "fulltime",
		label: "Full-time living",
		hint: "Space, tanks, slides"
	}
];
function scoreEntry(e, prefs) {
	let score = 40;
	const why = [];
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
	if (midLen >= prefs.minLen && midLen <= prefs.maxLen) score += 10;
	else score -= 8;
	const midMsrp = (e.spec.msrpRange[0] + e.spec.msrpRange[1]) / 2;
	if (midMsrp >= prefs.minPrice && midMsrp <= prefs.maxPrice) score += 10;
	else score -= 6;
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
		if (`${e.make} ${e.model} ${e.spec.description ?? ""} ${e.spec.floorplans.join(" ")}`.toLowerCase().includes(needle)) {
			score += 14;
			why.push("Keyword");
		}
	}
	score += e.spec.rating * 2;
	return {
		score,
		why
	};
}
function MatchPage() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [type, setType] = (0, import_react.useState)("");
	const [engine, setEngine] = (0, import_react.useState)("any");
	const [usage, setUsage] = (0, import_react.useState)("seasonal");
	const [minLen, setMinLen] = (0, import_react.useState)("18");
	const [maxLen, setMaxLen] = (0, import_react.useState)("45");
	const [minPrice, setMinPrice] = (0, import_react.useState)("20000");
	const [maxPrice, setMaxPrice] = (0, import_react.useState)("400000");
	const [keywords, setKeywords] = (0, import_react.useState)("");
	const [slides, setSlides] = (0, import_react.useState)("");
	const results = (0, import_react.useMemo)(() => {
		const prefs = {
			type,
			engine,
			usage,
			minLen: Number(minLen) || 0,
			maxLen: Number(maxLen) || 80,
			minPrice: Number(minPrice) || 0,
			maxPrice: Number(maxPrice) || 9e9,
			keywords,
			slides
		};
		return CATALOG.map((e) => ({
			e,
			...scoreEntry(e, prefs)
		})).sort((a, b) => b.score - a.score).slice(0, 12);
	}, [
		type,
		engine,
		usage,
		minLen,
		maxLen,
		minPrice,
		maxPrice,
		keywords,
		slides
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-primary",
					children: "Find a match"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl font-semibold",
					children: "What should you be looking at?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Local scoring against the bundled catalog — no dealer API required."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 text-[11px] font-semibold uppercase tracking-wide",
				children: [
					"Type",
					"Use",
					"Filters",
					"Results"
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setStep(i),
					className: cn("rounded-full px-3 py-1", step === i ? "bg-primary text-primary-fg" : "bg-surface text-muted"),
					children: s
				}, s))
			}),
			step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setType("");
						setStep(1);
					},
					className: cn("min-h-11 rounded-lg border px-4 py-3 text-left", !type ? "border-primary bg-primary/10" : "border-border bg-surface"),
					children: "Any class"
				}), RV_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						setType(t);
						setStep(1);
					},
					className: cn("min-h-11 rounded-lg border px-4 py-3 text-left", type === t ? "border-primary bg-primary/10" : "border-border bg-surface"),
					children: t
				}, t))]
			}),
			step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2 sm:grid-cols-3",
						children: [
							"any",
							"diesel",
							"gas"
						].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setEngine(id),
							className: cn("min-h-11 rounded-lg border capitalize", engine === id ? "border-primary bg-primary/10" : "border-border bg-surface"),
							children: id === "any" ? "No engine preference" : id
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2 sm:grid-cols-3",
						children: USAGE.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setUsage(u.id),
							className: cn("rounded-lg border p-4 text-left", usage === u.id ? "border-primary bg-primary/10" : "border-border bg-surface"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg",
								children: u.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted",
								children: u.hint
							})]
						}, u.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						onClick: () => setStep(2),
						children: "Next"
					})
				]
			}),
			step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Min length (ft)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "mt-1",
						value: minLen,
						onChange: (e) => setMinLen(e.target.value)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Max length (ft)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "mt-1",
						value: maxLen,
						onChange: (e) => setMaxLen(e.target.value)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Min MSRP" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "mt-1",
						value: minPrice,
						onChange: (e) => setMinPrice(e.target.value)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Max MSRP" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "mt-1",
						value: maxPrice,
						onChange: (e) => setMaxPrice(e.target.value)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Min slides" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "mt-1",
						value: slides,
						onChange: (e) => setSlides(e.target.value),
						placeholder: "optional"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Keywords" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "mt-1",
						value: keywords,
						onChange: (e) => setKeywords(e.target.value),
						placeholder: "Cummins, toy hauler…"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						className: "sm:col-span-2",
						onClick: () => setStep(3),
						children: "See matches"
					})
				]
			}),
			step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							"Top ",
							results.length,
							" from ",
							CATALOG.length,
							" models."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: results.map(({ e, score, why }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RvCard, { entry: e }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "px-1 text-xs text-dim",
								children: [
									"Score ",
									Math.round(score),
									" · ",
									why.slice(0, 3).join(" · ") || "Spec fit"
								]
							})]
						}, e.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-sm text-primary",
						children: "Browse full catalog"
					})
				]
			})
		]
	});
}
//#endregion
export { MatchPage as component };
