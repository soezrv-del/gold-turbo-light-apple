import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-fg hover:bg-glow",
        secondary: "bg-surface-2 text-fg border border-border hover:border-primary/40",
        outline: "border border-border bg-transparent text-fg hover:bg-surface",
        ghost: "text-muted hover:text-fg hover:bg-surface",
        danger: "bg-danger text-fg hover:brightness-110",
        success: "bg-success text-primary-fg hover:brightness-110",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-4 rounded-md text-sm",
        sm: "h-9 px-3 rounded-sm text-sm",
        lg: "h-12 px-5 rounded-lg text-base",
        icon: "size-11 rounded-md",
        pill: "h-9 px-3.5 rounded-full text-sm",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };
