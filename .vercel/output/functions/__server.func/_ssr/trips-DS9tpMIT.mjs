import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as DESTINATIONS } from "./catalog-DjbtJjNv.mjs";
import { t as Button } from "./button-Cg_PeIRX.mjs";
import { n as Input, r as Label } from "./input-opqfG9iy.mjs";
import { t as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-C1p7zOu_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trips-DS9tpMIT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var geocode = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("e678b4963d047f42b4b3c286d0b79f67b81dd3032aa04d596e94e1b427144aac"));
var routeDrive = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("a02c17e6e9610953c5b8400432887fabb6e315d98cf7af671e04c007a28dcb22"));
var nearbyCampgrounds = createServerFn({ method: "POST" }).validator((input) => input).handler(createSsrRpc("f14179d9766e8a14f8c6ad68d44aaba6c4f72681134fb588f261077c4632e9a5"));
function TripsPage() {
	const [from, setFrom] = (0, import_react.useState)("Phoenix, AZ");
	const [to, setTo] = (0, import_react.useState)("Zion National Park, UT");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)("");
	const [result, setResult] = (0, import_react.useState)(null);
	async function plan() {
		setBusy(true);
		setErr("");
		const a = await geocode({ data: { q: from } });
		const b = await geocode({ data: { q: to } });
		if (!a.ok || !b.ok) {
			setBusy(false);
			setErr((!a.ok ? a.error : b.error) ?? "Place not found");
			return;
		}
		const r = await routeDrive({ data: {
			from: {
				lat: a.lat,
				lon: a.lon
			},
			to: {
				lat: b.lat,
				lon: b.lon
			}
		} });
		if (!r.ok) {
			setBusy(false);
			setErr(r.error);
			return;
		}
		const camps = await nearbyCampgrounds({ data: {
			lat: b.lat,
			lon: b.lon
		} });
		setResult({
			distanceMi: r.distanceMi,
			durationMin: r.durationMin,
			fromLabel: a.label,
			toLabel: b.label,
			steps: r.steps.slice(0, 12),
			sites: camps.sites
		});
		setBusy(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-primary",
					children: "RvTRIPS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl font-semibold",
					children: "Drive plan"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Road distance, time, and campgrounds near the destination."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 md:grid-cols-[1fr_1fr_auto] md:items-end",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "From" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "mt-1",
						value: from,
						onChange: (e) => setFrom(e.target.value)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "To" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "mt-1",
						value: to,
						onChange: (e) => setTo(e.target.value)
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						onClick: () => void plan(),
						disabled: busy,
						children: busy ? "Routing…" : "Plan drive"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: DESTINATIONS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTo(d.q),
					className: "min-h-11 rounded-full border border-border px-3 text-xs font-medium text-muted hover:border-primary/40 hover:text-fg",
					children: d.name
				}, d.name))
			}),
			err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-danger",
				children: err
			}) : null,
			result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
								k: "Distance",
								v: `${result.distanceMi.toFixed(0)} mi`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
								k: "Drive time",
								v: `${Math.round(result.durationMin / 60)} hr ${Math.round(result.durationMin % 60)} min`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
								k: "Fuel (est. 8 mpg)",
								v: `${Math.round(result.distanceMi / 8)} gal`
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-dim",
						children: [
							result.fromLabel,
							" → ",
							result.toLabel
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-1 rounded-xl border border-border bg-surface p-4 text-sm",
						children: result.steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.instruction }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular text-muted",
								children: [s.distanceMi.toFixed(1), " mi"]
							})]
						}, `${s.instruction}-${i}`))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-2 font-display text-2xl",
						children: "Campgrounds near arrival"
					}), result.sites.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "No campgrounds returned for that area."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-2 sm:grid-cols-2",
						children: result.sites.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-md border border-border bg-navy px-3 py-2 text-sm",
							children: s.name
						}, s.id))
					})] })
				]
			})
		]
	});
}
function Tile({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[11px] uppercase tracking-wide text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 font-display text-2xl tabular",
			children: v
		})]
	});
}
//#endregion
export { TripsPage as component };
