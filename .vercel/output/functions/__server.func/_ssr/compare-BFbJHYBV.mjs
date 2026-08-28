import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as formatUsd, s as formatLbs } from "./router-CPdh4L2m.mjs";
import { b as typeImage, f as getBySlug } from "./catalog-DjbtJjNv.mjs";
import { t as Button } from "./button-Cg_PeIRX.mjs";
import { n as TypeChip, t as Stars } from "./Stars-DPyjXKNQ.mjs";
import { t as computeRating } from "./ratingData-BWm-u2SY.mjs";
import { t as useAppStore } from "./store-aQs7QiOF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/compare-BFbJHYBV.js
var import_jsx_runtime = require_jsx_runtime();
function ComparePage() {
	const compare = useAppStore((s) => s.compare);
	const toggleCompare = useAppStore((s) => s.toggleCompare);
	const entries = compare.map((slug) => getBySlug(slug)).filter(Boolean);
	if (entries.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Nothing to compare"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Tap Compare on up to three catalog cards."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-4 inline-block text-sm text-primary",
				children: "Browse catalog"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-primary",
			children: "Compare"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl font-semibold",
			children: "Side by side"
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[640px] border-separate border-spacing-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "w-28" }), entries.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
					className: "rounded-xl border border-border bg-surface p-0 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: typeImage(e.spec.type),
						alt: "",
						className: "h-28 w-full rounded-t-xl object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1 p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeChip, { type: e.spec.type }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/rv/$slug",
								params: { slug: e.slug },
								search: {
									year: "2024",
									floorplan: ""
								},
								className: "block font-display text-xl",
								children: [
									e.make,
									" ",
									e.model
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { rating: computeRating(e.make, e.model, "2024") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular text-primary",
									children: computeRating(e.make, e.model, "2024").toFixed(1)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								size: "sm",
								variant: "ghost",
								onClick: () => toggleCompare(e.slug),
								children: "Remove"
							})
						]
					})]
				}, e.slug))] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
					{
						k: "Type",
						v: (e) => e.spec.type
					},
					{
						k: "Sleeps",
						v: (e) => String(e.spec.sleeps)
					},
					{
						k: "Slides",
						v: (e) => String(e.spec.slideouts)
					},
					{
						k: "Length",
						v: (e) => `${e.spec.lengthRange[0]}–${e.spec.lengthRange[1]} ft`
					},
					{
						k: "Weight",
						v: (e) => `${formatLbs(e.spec.weightRange[0])}–${formatLbs(e.spec.weightRange[1])}`
					},
					{
						k: "MSRP",
						v: (e) => `${formatUsd(e.spec.msrpRange[0], true)}–${formatUsd(e.spec.msrpRange[1], true)}`
					},
					{
						k: "Fuel",
						v: (e) => e.spec.fuelType
					},
					{
						k: "Engine",
						v: (e) => e.spec.engine ?? "—"
					},
					{
						k: "Towing",
						v: (e) => e.spec.towingCapacity ? formatLbs(e.spec.towingCapacity) : "—"
					},
					{
						k: "Fresh water",
						v: (e) => e.spec.freshWater ? `${e.spec.freshWater} gal` : "—"
					}
				].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "align-top text-xs uppercase tracking-wide text-muted",
					children: row.k
				}), entries.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: "rounded-md bg-navy px-3 py-2 text-sm",
					children: row.v(e)
				}, e.slug))] }, row.k)) })]
			})
		})]
	});
}
//#endregion
export { ComparePage as component };
