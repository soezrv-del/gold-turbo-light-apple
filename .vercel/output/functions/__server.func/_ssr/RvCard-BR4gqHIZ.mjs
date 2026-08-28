import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as Heart, u as Scale } from "../_libs/lucide-react.mjs";
import { c as formatUsd, o as cn } from "./router-CPdh4L2m.mjs";
import { b as typeImage, d as estimateMarket } from "./catalog-DjbtJjNv.mjs";
import { n as TypeChip, t as Stars } from "./Stars-DPyjXKNQ.mjs";
import { t as computeRating } from "./ratingData-BWm-u2SY.mjs";
import { t as useAppStore } from "./store-aQs7QiOF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/RvCard-BR4gqHIZ.js
var import_jsx_runtime = require_jsx_runtime();
function RvCard({ entry, year = "2024", floorplan = "" }) {
	const { spec, make, model, slug } = entry;
	const rating = computeRating(make, model, year);
	const mid = Math.round((spec.msrpRange[0] + spec.msrpRange[1]) / 2);
	const mv = estimateMarket(mid, parseInt(year, 10) || 2024);
	const saved = useAppStore((s) => s.isSaved(slug, year));
	const toggleSaved = useAppStore((s) => s.toggleSaved);
	const compare = useAppStore((s) => s.compare);
	const toggleCompare = useAppStore((s) => s.toggleCompare);
	const inCompare = compare.includes(slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group overflow-hidden rounded-xl border border-border bg-surface shadow-panel",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/rv/$slug",
			params: { slug },
			search: {
				year,
				floorplan
			},
			className: "block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[16/9] overflow-hidden bg-navy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: typeImage(spec.type),
						alt: "",
						className: "size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-3 top-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypeChip, { type: spec.type })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.14em] text-muted",
						children: year
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-display text-xl font-semibold leading-tight",
						children: [
							make,
							" ",
							model
						]
					}),
					floorplan ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: ["Floorplan ", floorplan]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { rating }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular text-primary",
							children: rating.toFixed(1)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-1.5 text-[11px] text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-sm bg-white/5 px-2 py-1",
								children: [
									spec.lengthRange[0],
									"–",
									spec.lengthRange[1],
									" ft"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-sm bg-white/5 px-2 py-1",
								children: ["Sleeps ", spec.sleeps]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-sm bg-white/5 px-2 py-1",
								children: [spec.slideouts, " slides"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-sm bg-white/5 px-2 py-1",
								children: spec.fuelType
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3 pt-1 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted",
							children: ["Trade-in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular text-fg",
								children: formatUsd(mv.tradeIn, true)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted",
							children: ["Retail ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular text-success",
								children: formatUsd(mv.retailHigh, true)
							})]
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex border-t border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => toggleSaved({
					slug,
					make,
					model,
					year,
					floorplan
				}),
				className: cn("flex h-11 flex-1 items-center justify-center gap-1.5 text-xs font-medium", saved ? "text-danger" : "text-muted hover:text-fg"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-4", saved && "fill-danger") }), saved ? "Saved" : "Save"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => toggleCompare(slug),
				className: cn("flex h-11 flex-1 items-center justify-center gap-1.5 border-l border-border text-xs font-medium", inCompare ? "text-primary" : "text-muted hover:text-fg"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, { className: "size-4" }), inCompare ? "Comparing" : "Compare"]
			})]
		})]
	});
}
//#endregion
export { RvCard as t };
