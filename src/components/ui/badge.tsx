import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Badge({
  className,
  tone = "default",
  ...props
}: HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "primary" | "success" | "danger" | "muted";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide",
        tone === "default" && "bg-surface-2 text-fg border border-border",
        tone === "primary" && "bg-primary/15 text-primary border border-primary/30",
        tone === "success" && "bg-success/15 text-success border border-success/30",
        tone === "danger" && "bg-danger/15 text-danger border border-danger/30",
        tone === "muted" && "bg-white/5 text-muted border border-border",
        className,
      )}
      {...props}
    />
  );
}
