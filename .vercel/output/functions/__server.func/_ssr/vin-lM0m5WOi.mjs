import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as rvSlug } from "./router-CPdh4L2m.mjs";
import { f as getBySlug } from "./catalog-DjbtJjNv.mjs";
import { t as Button } from "./button-Cg_PeIRX.mjs";
import { n as Input, r as Label } from "./input-opqfG9iy.mjs";
import { n as lookupRecalls, t as decodeVin } from "./nhtsa-705oFrAA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vin-lM0m5WOi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VinPage() {
	const [vin, setVin] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [decoded, setDecoded] = (0, import_react.useState)(null);
	const [recalls, setRecalls] = (0, import_react.useState)([]);
	async function run() {
		setBusy(true);
		const d = await decodeVin({ data: { vin } });
		setDecoded(d);
		if (d.valid && d.make && d.model && d.year) {
			const r = await lookupRecalls({ data: {
				make: d.make,
				model: d.model,
				year: d.year
			} });
			setRecalls(r.recalls);
		} else setRecalls([]);
		setBusy(false);
	}
	const catalogHit = decoded ? getBySlug(rvSlug(decoded.make, decoded.model)) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-primary",
					children: "VIN"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl font-semibold",
					children: "Decoder"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "NHTSA vPIC decode plus recall campaigns for year/make/model."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-col gap-2 sm:flex-row sm:items-end",
				onSubmit: (e) => {
					e.preventDefault();
					run();
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "vin",
						children: "17-character VIN"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "vin",
						className: "mt-1 font-mono uppercase",
						maxLength: 17,
						value: vin,
						onChange: (e) => setVin(e.target.value.toUpperCase()),
						placeholder: "1F66F5NY0N0A12345"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: busy || vin.trim().length < 17,
					children: busy ? "Decoding…" : "Decode"
				})]
			}),
			decoded && !decoded.valid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-danger",
				children: decoded.errorText || "Could not decode"
			}),
			decoded?.valid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-2 sm:grid-cols-2",
				children: [
					["Year", decoded.year],
					["Make", decoded.make],
					["Model", decoded.model],
					["Trim", decoded.trim],
					["Body", decoded.bodyClass],
					["Engine", [decoded.engineDisplacement && `${decoded.engineDisplacement}L`, decoded.engineHP && `${decoded.engineHP} hp`].filter(Boolean).join(" · ")],
					["Fuel", decoded.fuelType],
					["GVWR", decoded.gvwr],
					["Plant", [
						decoded.plantCity,
						decoded.plantState,
						decoded.plantCountry
					].filter(Boolean).join(", ")],
					["Manufacturer", decoded.manufacturer]
				].filter(([, v]) => v).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between rounded-md border border-border bg-surface px-3 py-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-right",
						children: v
					})]
				}, k))
			}),
			catalogHit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/rv/$slug",
				params: { slug: catalogHit.slug },
				search: {
					year: decoded?.year || "2024",
					floorplan: ""
				},
				className: "block rounded-xl border border-primary/40 bg-primary/10 p-4 text-sm",
				children: [
					"Open ",
					catalogHit.make,
					" ",
					catalogHit.model,
					" in the catalog"
				]
			}) : null,
			recalls.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-2 font-display text-2xl",
				children: "Recalls"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: recalls.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-lg border border-border bg-navy p-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-wide text-primary",
						children: r.component
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1",
						children: r.summary
					})]
				}, r.campaignNumber || r.summary))
			})] })
		]
	});
}
//#endregion
export { VinPage as component };
