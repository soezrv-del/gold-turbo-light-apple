import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Star } from "../_libs/lucide-react.mjs";
import { o as cn } from "./router-CPdh4L2m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Stars-DPyjXKNQ.js
var import_jsx_runtime = require_jsx_runtime();
function Stars({ rating, size = 14 }) {
	const rounded = Math.round(rating);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex items-center gap-0.5",
		"aria-label": `${rating} out of 5`,
		children: [
			1,
			2,
			3,
			4,
			5
		].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
			className: cn(s <= rounded ? "fill-primary text-primary" : "text-dim"),
			style: {
				width: size,
				height: size
			}
		}, s))
	});
}
function TypeChip({ type }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary",
		children: type
	});
}
//#endregion
export { TypeChip as n, Stars as t };
