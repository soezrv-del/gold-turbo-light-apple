import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as TOTAL_MODELS, i as MAKES, s as TOTAL_FLOORPLANS } from "./catalog-DjbtJjNv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-C0jAdSLi.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/rv/rvmax-logo-circle.jpeg",
					alt: "",
					className: "size-16 rounded-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-primary",
					children: "About"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl font-semibold",
					children: "Know before you buy"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-lg leading-relaxed text-muted",
				children: "RVFAX is a buyer-side spec desk: catalog data, ratings, towing math, VIN/recall lookup, and a Grok-powered specialist — so a dealer pitch is not the only source on the lot."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "overflow-hidden rounded-xl border border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/rv/story-verification.png",
						alt: "",
						className: "h-48 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "p-3 text-sm text-muted",
						children: "Verify claims against specs, NHTSA, and market bands."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "overflow-hidden rounded-xl border border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/rv/story-success.png",
						alt: "",
						className: "h-48 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "p-3 text-sm text-muted",
						children: "Walk in with numbers, not a brochure."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						n: TOTAL_MODELS,
						l: "Models in this build"
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-surface p-5 text-sm leading-relaxed text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-2 font-display text-2xl text-fg",
						children: "What this hybrid includes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "list-disc space-y-1 pl-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Expo catalog from the first dump (specs, ratings, maintenance, reviews)." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Full-source overlay: powertrain-by-year, 12 extra models, ZIP→state tax tables, DMV fee math." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Match quiz and book-value compare that run on-device against the bundled catalog." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Live VIN decode / recalls (NHTSA), routing, and RvGROK when you ask — not on page load." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-dim",
						children: "Ratings are heuristics. Reviews are illustrative owner-style notes. Market bands are a depreciation model, not a licensed guidebook. Confirm tax and registration with the state DMV."
					})
				]
			})
		]
	});
}
function Stat({ n, l }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-navy p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-display text-3xl tabular text-primary",
			children: n.toLocaleString()
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[11px] uppercase tracking-wide text-muted",
			children: l
		})]
	});
}
//#endregion
export { AboutPage as component };
