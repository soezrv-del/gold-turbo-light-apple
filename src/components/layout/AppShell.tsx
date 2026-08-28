import { Link, useRouterState } from "@tanstack/react-router";
import { FileSearch, MessageSquare, Calculator, Truck, Map, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const NAV = [
  { to: "/", label: "RvFAX", icon: FileSearch, match: (p: string) => p === "/" || p.startsWith("/rv") },
  { to: "/grok", label: "RvGROK", icon: MessageSquare, match: (p: string) => p.startsWith("/grok") },
  { to: "/finance", label: "RvCAL", icon: Calculator, match: (p: string) => p.startsWith("/finance") },
  { to: "/tow", label: "RvTOW", icon: Truck, match: (p: string) => p.startsWith("/tow") },
  { to: "/trips", label: "RvTRIPS", icon: Map, match: (p: string) => p.startsWith("/trips") },
  { to: "/more", label: "More", icon: Menu, match: (p: string) => ["/more", "/vin", "/garage", "/compare", "/match", "/value", "/about"].some((x) => p.startsWith(x)) },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/rv/icon.jpg" alt="" className="size-8 rounded-sm object-cover" />
            <div className="leading-none">
              <div className="font-display text-lg font-semibold tracking-wide">RVFAX</div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-muted">Know before you buy</div>
            </div>
          </Link>
          <nav className="ml-auto hidden items-center gap-1 md:flex">
            {NAV.map((item) => {
              const active = item.match(pathname);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors",
                    active ? "bg-primary/15 text-primary" : "text-muted hover:text-fg",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-5 md:pb-10">{children}</main>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-primary/40 bg-[#030b1e] md:hidden">
        <div className="grid grid-cols-6 px-1 pb-[max(0.4rem,env(safe-area-inset-bottom))] pt-1.5">
          {NAV.map((item) => {
            const active = item.match(pathname);
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wide",
                  active ? "text-primary" : "text-primary/40",
                )}
              >
                <Icon className="size-4" strokeWidth={active ? 2.4 : 1.8} />
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
