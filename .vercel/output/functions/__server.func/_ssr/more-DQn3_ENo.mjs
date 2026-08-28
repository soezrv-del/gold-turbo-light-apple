import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as BookOpen, a as Sparkles, b as Car, g as GitCompare, l as ScanLine, t as Warehouse, v as Compass } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/more-DQn3_ENo.js
var import_jsx_runtime = require_jsx_runtime();
var ITEMS = [
	{
		to: "/match",
		title: "Find a match",
		body: "Quiz the catalog by class, use, and budget",
		icon: Sparkles
	},
	{
		to: "/value",
		title: "Book value",
		body: "Wholesale / trade / retail bands, two units",
		icon: Compass
	},
	{
		to: "/vin",
		title: "VIN decoder",
		body: "NHTSA vPIC + recalls",
		icon: ScanLine
	},
	{
		to: "/garage",
		title: "Garage",
		body: "Saved coaches and your rig profile",
		icon: Warehouse
	},
	{
		to: "/compare",
		title: "Compare",
		body: "Up to three models side by side",
		icon: GitCompare
	},
	{
		to: "/tow",
		title: "Tow match",
		body: "Truck trim vs trailer weight",
		icon: Car
	},
	{
		to: "/about",
		title: "About RVFAX",
		body: "What this hybrid catalog is — and isn’t",
		icon: BookOpen
	}
];
function MorePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-primary",
				children: "More"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-semibold",
				children: "Tools"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: ITEMS.map((item) => {
					const Icon = item.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						className: "flex gap-4 rounded-xl border border-border bg-surface p-4 hover:border-primary/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-11 items-center justify-center rounded-md bg-primary/15 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl font-semibold",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: item.body
						})] })]
					}, item.to);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-dim",
				children: "Catalog is bundled spec data (50 makes, 350+ models). Ratings are computed heuristics. Reviews are illustrative. Live market, VIN, and routing call external services when you ask."
			})
		]
	});
}
//#endregion
export { MorePage as component };
