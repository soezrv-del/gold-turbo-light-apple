import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatUsd(n: number, compact = false): string {
  if (compact && Math.abs(n) >= 1000) {
    if (Math.abs(n) >= 1_000_000) {
      return `$${(n / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
    }
    return `$${Math.round(n / 1000)}k`;
  }
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export function formatLbs(n: number): string {
  return `${n.toLocaleString("en-US")} lbs`;
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function rvSlug(make: string, model: string): string {
  return `${slugify(make)}--${slugify(model)}`;
}
