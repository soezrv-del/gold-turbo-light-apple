import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { o as cn } from "./router-CPdh4L2m.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-Cg_PeIRX.js
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-fg hover:bg-glow",
			secondary: "bg-surface-2 text-fg border border-border hover:border-primary/40",
			outline: "border border-border bg-transparent text-fg hover:bg-surface",
			ghost: "text-muted hover:text-fg hover:bg-surface",
			danger: "bg-danger text-fg hover:brightness-110",
			success: "bg-success text-primary-fg hover:brightness-110",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 px-4 rounded-md text-sm",
			sm: "h-9 px-3 rounded-sm text-sm",
			lg: "h-12 px-5 rounded-lg text-base",
			icon: "size-11 rounded-md",
			pill: "h-9 px-3.5 rounded-full text-sm"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
//#endregion
export { Button as t };
