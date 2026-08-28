import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Search, l as ScanLine, m as History, y as ChevronLeft } from "../_libs/lucide-react.mjs";
import { l as rvSlug, o as cn } from "./router-CPdh4L2m.mjs";
import { a as RV_DATA, c as TOTAL_MODELS, g as makesForYear, i as MAKES, l as YEARS, o as RV_TYPES, r as ERAS, s as TOTAL_FLOORPLANS, t as CATALOG, u as eraMatches, v as modelsForYearMake } from "./catalog-DjbtJjNv.mjs";
import { t as Button } from "./button-Cg_PeIRX.mjs";
import { t as useAppStore } from "./store-aQs7QiOF.mjs";
import { n as Input } from "./input-opqfG9iy.mjs";
import { t as RvCard } from "./RvCard-BR4gqHIZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-aR_PkNaV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	"year",
	"make",
	"model",
	"floorplan"
];
function SearchWizard({ onSearch }) {
	const [step, setStep] = (0, import_react.useState)("year");
	const [year, setYear] = (0, import_react.useState)("");
	const [make, setMake] = (0, import_react.useState)("");
	const [model, setModel] = (0, import_react.useState)("");
	const [q, setQ] = (0, import_react.useState)("");
	const makes = (0, import_react.useMemo)(() => year ? makesForYear(year) : MAKES, [year]);
	const models = (0, import_react.useMemo)(() => make ? modelsForYearMake(year, make) : [], [year, make]);
	const floorplans = (0, import_react.useMemo)(() => make && model ? RV_DATA[make]?.[model]?.floorplans ?? [] : [], [make, model]);
	const options = (0, import_react.useMemo)(() => {
		const needle = q.trim().toLowerCase();
		const list = step === "year" ? YEARS : step === "make" ? makes : step === "model" ? models : ["(All floorplans)", ...floorplans];
		if (!needle) return list;
		return list.filter((x) => x.toLowerCase().includes(needle));
	}, [
		step,
		q,
		makes,
		models,
		floorplans
	]);
	function pick(value) {
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
		onSearch({
			year,
			make,
			model,
			floorplan: fp
		});
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-navy p-4 shadow-panel md:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex flex-wrap items-center gap-2",
				children: [STEPS.map((s, i) => {
					const done = STEPS.indexOf(step) > i;
					const current = step === s;
					const label = s === "year" ? year : s === "make" ? make : s === "model" ? model : "";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							if (done) setStep(s);
						},
						className: cn("rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide", current && "bg-primary text-primary-fg", done && "bg-success/15 text-success", !current && !done && "bg-white/5 text-dim"),
						children: label || s
					}, s);
				}), step !== "year" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: back,
					className: "ml-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), " Back"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-dim" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: step === "year" ? "Filter years…" : step === "make" ? "Search brands…" : step === "model" ? "Search models…" : "Search floorplans…",
					className: "pl-9"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid max-h-64 grid-cols-2 gap-1.5 overflow-y-auto sm:grid-cols-3 md:grid-cols-4",
				children: [options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => pick(opt),
					className: "min-h-11 truncate rounded-md border border-border bg-surface px-3 text-left text-sm text-fg hover:border-primary/50 hover:bg-surface-2",
					children: opt
				}, opt)), options.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "col-span-full py-6 text-center text-sm text-muted",
					children: "No matches"
				})]
			})
		]
	});
}
function Home() {
	const navigate = useNavigate();
	const [era, setEra] = (0, import_react.useState)("all");
	const [type, setType] = (0, import_react.useState)("");
	const [make, setMake] = (0, import_react.useState)("");
	const [q, setQ] = (0, import_react.useState)("");
	const [wizard, setWizard] = (0, import_react.useState)(null);
	const recent = useAppStore((s) => s.recent);
	const bumpSearch = useAppStore((s) => s.bumpSearch);
	const pushRecent = useAppStore((s) => s.pushRecent);
	function runWizard(v) {
		bumpSearch();
		pushRecent(v);
		setWizard(v);
		navigate({
			to: "/rv/$slug",
			params: { slug: rvSlug(v.make, v.model) },
			search: {
				year: v.year,
				floorplan: v.floorplan
			}
		});
	}
	const results = (0, import_react.useMemo)(() => {
		const needle = q.trim().toLowerCase();
		return CATALOG.filter((e) => {
			if (wizard && (e.make !== wizard.make || e.model !== wizard.model)) return false;
			if (make && e.make !== make) return false;
			if (type && e.spec.type !== type) return false;
			if (!eraMatches(e.spec, e.make, era)) return false;
			if (needle) {
				if (!`${e.make} ${e.model} ${e.spec.type} ${e.spec.floorplans.join(" ")}`.toLowerCase().includes(needle)) return false;
			}
			return true;
		});
	}, [
		era,
		type,
		make,
		q,
		wizard
	]);
	const shown = results.slice(0, 24);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden rounded-xl border border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/rv/hero.png",
						alt: "",
						className: "absolute inset-0 size-full object-cover opacity-35"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative space-y-4 px-5 py-8 md:px-8 md:py-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-semibold uppercase tracking-[0.22em] text-primary",
								children: "RvFAX catalog"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "max-w-xl font-display text-4xl font-semibold tracking-tight md:text-5xl",
								children: "Specs, ratings, and value before you buy."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "max-w-lg text-sm text-muted md:text-base",
								children: [
									TOTAL_MODELS,
									" models · ",
									MAKES.length,
									" brands · ",
									TOTAL_FLOORPLANS.toLocaleString(),
									" floorplans. Towing, financing, VIN decode, and an RV specialist assistant."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-6 pt-2 font-display text-2xl tabular",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										n: TOTAL_MODELS,
										l: "Models"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										n: MAKES.length,
										l: "Makes"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
										n: TOTAL_FLOORPLANS,
										l: "Floorplans"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/match",
										children: "Find a match"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/value",
										children: "Book value"
									})
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchWizard, { onSearch: runWizard }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: ERAS.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setEra(e.id),
					className: cn("min-h-11 rounded-full border px-3.5 text-xs font-semibold uppercase tracking-wide", era === e.id ? "border-primary bg-primary/15 text-primary" : "border-border text-muted"),
					children: [e.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-1.5 text-dim",
						children: e.hint
					})]
				}, e.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2 overflow-x-auto pb-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeBtn, {
					label: "All types",
					active: !type,
					onClick: () => setType("")
				}), RV_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeBtn, {
					label: t,
					active: type === t,
					onClick: () => setType(t)
				}, t))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 md:grid-cols-[1fr_220px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Filter by name, type, or floorplan…"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: make,
					onChange: (e) => setMake(e.target.value),
					className: "h-11 rounded-md border border-border bg-navy px-3 text-sm text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "All makes"
					}), MAKES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: m,
						children: m
					}, m))]
				})]
			}),
			recent.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(History, { className: "size-3.5" }), " Recent"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: recent.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/rv/$slug",
					params: { slug: rvSlug(r.make, r.model) },
					search: {
						year: r.year,
						floorplan: r.floorplan
					},
					className: "rounded-full border border-border bg-surface px-3 py-2 text-xs text-fg hover:border-primary/50",
					children: [
						r.year,
						" ",
						r.make,
						" ",
						r.model
					]
				}, r.id))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-semibold",
					children: wizard ? `${wizard.year} ${wizard.make} ${wizard.model}` : "Browse catalog"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted tabular",
					children: [results.length, " matches"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: shown.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RvCard, {
					entry: e,
					year: wizard?.year || String(e.spec.yearEnd ?? 2024),
					floorplan: wizard?.floorplan || ""
				}, e.slug))
			}),
			results.length > shown.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-center text-sm text-muted",
				children: [
					"Showing 24 of ",
					results.length,
					". Narrow filters to see more."
				]
			}),
			results.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-lg border border-border bg-surface p-8 text-center text-sm text-muted",
				children: "No models match those filters. Try All years or clear the type."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/vin",
				className: "flex items-center gap-4 rounded-xl border border-border bg-navy p-4 hover:border-primary/40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-12 items-center justify-center rounded-md bg-primary/15 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanLine, { className: "size-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg font-semibold",
						children: "VIN decoder"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "NHTSA vPIC decode plus recall lookup"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "ml-auto hidden sm:inline-flex",
						type: "button",
						children: "Decode"
					})
				]
			})
		]
	});
}
function Stat({ n, l }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-primary",
		children: n.toLocaleString()
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[11px] uppercase tracking-[0.14em] text-muted",
		children: l
	})] });
}
function TypeBtn({ label, active, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("shrink-0 rounded-full border px-3 py-2 text-xs font-medium", active ? "border-primary bg-primary text-primary-fg" : "border-border text-muted"),
		children: label
	});
}
//#endregion
export { Home as component };
