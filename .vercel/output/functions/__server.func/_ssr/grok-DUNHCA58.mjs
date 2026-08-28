import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as Send } from "../_libs/lucide-react.mjs";
import { i as Route$7, o as cn } from "./router-CPdh4L2m.mjs";
import { t as Button } from "./button-Cg_PeIRX.mjs";
import { i as Textarea } from "./input-opqfG9iy.mjs";
import { t as askGrok } from "./ai-Bx30ukzr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/grok-DUNHCA58.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STARTERS = [
	"Diesel pusher vs gas Class A for full-timing",
	"What should I inspect on a 2019 Grand Design Reflection?",
	"Fifth wheel hitch weight and payload math",
	"COVID-era (2020–2023) build quality issues"
];
function GrokPage() {
	const { q } = Route$7.useSearch();
	const [input, setInput] = (0, import_react.useState)(q);
	const [msgs, setMsgs] = (0, import_react.useState)([]);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)("");
	const scroller = (0, import_react.useRef)(null);
	async function send(text) {
		const prompt = (text ?? input).trim();
		if (!prompt || busy) return;
		setInput("");
		setErr("");
		const next = [...msgs, {
			role: "user",
			content: prompt
		}];
		setMsgs(next);
		setBusy(true);
		const res = await askGrok({ data: {
			prompt,
			history: msgs.slice(-8).map((m) => ({
				role: m.role,
				content: m.content
			}))
		} });
		setBusy(false);
		if (!res.ok) {
			setErr(res.error);
			return;
		}
		setMsgs([...next, {
			role: "assistant",
			content: res.text
		}]);
		requestAnimationFrame(() => scroller.current?.scrollTo({
			top: 99999,
			behavior: "smooth"
		}));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-[70dvh] flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-primary",
					children: "RvGROK"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl font-semibold",
					children: "RV specialist assistant"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 max-w-xl text-sm text-muted",
					children: "Ask about classes, chassis, towing, recalls, and 2024–2026 market conditions. Not legal or personalized financial advice."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: scroller,
				className: "flex-1 space-y-3 overflow-y-auto rounded-xl border border-border bg-navy p-4",
				children: [
					msgs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-2 sm:grid-cols-2",
						children: STARTERS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => send(s),
							className: "min-h-11 rounded-lg border border-border bg-surface px-3 py-2 text-left text-sm hover:border-primary/40",
							children: s
						}, s))
					}),
					msgs.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("max-w-[42rem] whitespace-pre-wrap rounded-lg px-3 py-2 text-sm leading-relaxed", m.role === "user" ? "ml-auto bg-primary/15 text-fg" : "bg-surface text-fg"),
						children: m.content
					}, `${m.role}-${i}`)),
					busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-primary",
						children: "Thinking…"
					}) : null,
					err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-danger",
						children: err
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-col gap-2 sm:flex-row",
				onSubmit: (e) => {
					e.preventDefault();
					send();
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					value: input,
					onChange: (e) => setInput(e.target.value),
					placeholder: "Ask about a year, make, and model…",
					className: "min-h-11 flex-1 sm:min-h-11",
					onKeyDown: (e) => {
						if (e.key === "Enter" && !e.shiftKey) {
							e.preventDefault();
							send();
						}
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					disabled: busy || !input.trim(),
					className: "sm:self-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-4" }), " Ask"]
				})]
			})
		]
	});
}
//#endregion
export { GrokPage as component };
