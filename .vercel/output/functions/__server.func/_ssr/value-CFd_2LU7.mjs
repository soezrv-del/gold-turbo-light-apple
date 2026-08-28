import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as formatUsd, l as rvSlug, s as formatLbs } from "./router-CPdh4L2m.mjs";
import { _ as modelsForMake, b as typeImage, d as estimateMarket, f as getBySlug, i as MAKES, t as CATALOG } from "./catalog-DjbtJjNv.mjs";
import { n as TypeChip } from "./Stars-DPyjXKNQ.mjs";
import { t as useAppStore } from "./store-aQs7QiOF.mjs";
import { r as Label, t as FieldSelect } from "./input-opqfG9iy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/value-CFd_2LU7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function pickDefault(i) {
	const e = CATALOG[i] ?? CATALOG[0];
	return {
		make: e.make,
		model: e.model,
		year: String(e.spec.yearEnd ?? 2022)
	};
}
function ValuePage() {
	const compare = useAppStore((s) => s.compare);
	const a0 = compare[0] ? getBySlug(compare[0]) : void 0;
	const b0 = compare[1] ? getBySlug(compare[1]) : void 0;
	const [left, setLeft] = (0, import_react.useState)(a0 ? {
		make: a0.make,
		model: a0.model,
		year: String(a0.spec.yearEnd ?? 2022)
	} : pickDefault(4));
	const [right, setRight] = (0, import_react.useState)(b0 ? {
		make: b0.make,
		model: b0.model,
		year: String(b0.spec.yearEnd ?? 2024)
	} : pickDefault(20));
	const cards = [left, right].map((sel) => {
		return {
			sel,
			e: getBySlug(rvSlug(sel.make, sel.model)) ?? CATALOG.find((c) => c.make === sel.make && c.model === sel.model)
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-primary",
					children: "Book value"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl font-semibold",
					children: "Side-by-side market bands"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Wholesale / trade / retail from the in-app depreciation model (not a NADA subscription). Pre-fills from Compare if you picked two."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: cards.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Picker, {
					label: i === 0 ? "Unit A" : "Unit B",
					make: c.sel.make,
					model: c.sel.model,
					year: c.sel.year,
					onChange: i === 0 ? setLeft : setRight
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: cards.map((c, i) => c.e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookCard, {
					make: c.e.make,
					model: c.e.model,
					year: c.sel.year
				}, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Not in catalog" }, i))
			})
		]
	});
}
function Picker({ label, make, model, year, onChange }) {
	const models = modelsForMake(make);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2 rounded-xl border border-border bg-surface p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] uppercase tracking-wide text-muted",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSelect, {
				value: make,
				onChange: (e) => {
					const mk = e.target.value;
					onChange({
						make: mk,
						model: modelsForMake(mk)[0] ?? "",
						year
					});
				},
				children: MAKES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: m }, m))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSelect, {
				value: model,
				onChange: (e) => onChange({
					make,
					model: e.target.value,
					year
				}),
				children: models.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: m }, m))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Year" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSelect, {
				className: "mt-1",
				value: year,
				onChange: (e) => onChange({
					make,
					model,
					year: e.target.value
				}),
				children: Array.from({ length: 27 }, (_, i) => String(2026 - i)).map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: y }, y))
			})] })
		]
	});
}
function BookCard({ make, model, year }) {
	const e = (0, import_react.useMemo)(() => getBySlug(rvSlug(make, model)) ?? CATALOG.find((c) => c.make === make && c.model === model), [make, model]);
	if (!e) return null;
	const y = parseInt(year, 10) || 2022;
	const mid = Math.round((e.spec.msrpRange[0] + e.spec.msrpRange[1]) / 2);
	const mv = estimateMarket(mid, y);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "overflow-hidden rounded-xl border border-border bg-navy",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: typeImage(e.spec.type),
			alt: "",
			className: "h-36 w-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeChip, { type: e.spec.type }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-2xl",
					children: [
						year,
						" ",
						make,
						" ",
						model
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted",
					children: [
						"Age ",
						mv.age,
						" yr · ~",
						mv.depreciationPercent,
						"% off MSRP midpoint ",
						formatUsd(mid)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
					k: "Wholesale",
					v: `${formatUsd(mv.wholesaleLow)} – ${formatUsd(mv.wholesaleHigh)}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
					k: "Trade-in",
					v: `${formatUsd(Math.round(mv.tradeIn * .9))} – ${formatUsd(mv.tradeIn)}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
					k: "Suggested retail",
					v: formatUsd(mv.suggestedRetail),
					accent: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-dim",
					children: [
						e.spec.lengthRange[0],
						"–",
						e.spec.lengthRange[1],
						" ft · ",
						formatLbs(e.spec.weightRange[1]),
						" · ",
						e.spec.engine ?? e.spec.fuelType
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/rv/$slug",
					params: { slug: e.slug },
					search: {
						year,
						floorplan: ""
					},
					className: "text-sm text-primary",
					children: "Open spec sheet"
				})
			]
		})]
	});
}
function Row({ k, v, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `tabular ${accent ? "text-success" : ""}`,
			children: v
		})]
	});
}
//#endregion
export { ValuePage as component };
