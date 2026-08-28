import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as rvSlug } from "./router-CPdh4L2m.mjs";
import { _ as modelsForMake, i as MAKES } from "./catalog-DjbtJjNv.mjs";
import { t as Button } from "./button-Cg_PeIRX.mjs";
import { t as useAppStore } from "./store-aQs7QiOF.mjs";
import { n as Input, r as Label, t as FieldSelect } from "./input-opqfG9iy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/garage-DfZ0TVau.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GaragePage() {
	const garage = useAppStore((s) => s.garage);
	const profile = useAppStore((s) => s.profile);
	const setProfile = useAppStore((s) => s.setProfile);
	const toggleSaved = useAppStore((s) => s.toggleSaved);
	const [form, setForm] = (0, import_react.useState)(profile ?? {
		year: "2022",
		make: "Grand Design",
		model: "Reflection",
		floorplan: "",
		vin: "",
		heightFt: "13.2",
		widthFt: "8.5",
		lengthFt: "33",
		gvwr: "11995",
		axles: "2",
		hasPropane: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-primary",
				children: "Garage"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl font-semibold",
				children: "Your rigs"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-display text-2xl",
				children: "Saved"
			}), garage.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-xl border border-border bg-surface p-6 text-sm text-muted",
				children: "Nothing saved yet. Heart a model from the catalog."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: garage.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between gap-3 rounded-lg border border-border bg-surface px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/rv/$slug",
						params: { slug: g.slug },
						search: {
							year: g.year,
							floorplan: g.floorplan
						},
						className: "text-sm",
						children: [
							g.year,
							" ",
							g.make,
							" ",
							g.model
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						size: "sm",
						variant: "ghost",
						onClick: () => toggleSaved(g),
						children: "Remove"
					})]
				}, `${g.slug}-${g.year}`))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-surface p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Active profile"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-sm text-muted",
						children: "Used as a default on towing and trip clearance notes. Stored on this device."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Year" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								className: "mt-1",
								value: form.year,
								onChange: (e) => setForm({
									...form,
									year: e.target.value
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "VIN" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								className: "mt-1 font-mono uppercase",
								value: form.vin,
								onChange: (e) => setForm({
									...form,
									vin: e.target.value
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Make" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSelect, {
								className: "mt-1",
								value: form.make,
								onChange: (e) => {
									const make = e.target.value;
									setForm({
										...form,
										make,
										model: modelsForMake(make)[0] ?? ""
									});
								},
								children: MAKES.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: m }, m))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Model" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldSelect, {
								className: "mt-1",
								value: form.model,
								onChange: (e) => setForm({
									...form,
									model: e.target.value
								}),
								children: modelsForMake(form.make).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: m }, m))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Length (ft)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								className: "mt-1",
								value: form.lengthFt,
								onChange: (e) => setForm({
									...form,
									lengthFt: e.target.value
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Height (ft)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								className: "mt-1",
								value: form.heightFt,
								onChange: (e) => setForm({
									...form,
									heightFt: e.target.value
								})
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-4",
						type: "button",
						onClick: () => {
							setProfile(form);
						},
						children: "Save profile"
					}),
					profile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/rv/$slug",
						params: { slug: rvSlug(profile.make, profile.model) },
						search: {
							year: profile.year,
							floorplan: profile.floorplan
						},
						className: "ml-3 text-sm text-primary",
						children: "Open in catalog"
					}) : null
				]
			})
		]
	});
}
//#endregion
export { GaragePage as component };
