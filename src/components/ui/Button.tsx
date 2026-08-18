"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "ghost";
type Size = "md" | "sm";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold font-body transition-transform duration-300 ease-out cursor-pointer select-none disabled:opacity-40 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-wine text-cream shadow-[0_14px_26px_-12px_rgba(123,59,62,0.55)] hover:bg-[#5f2e30] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
  ghost:
    "bg-transparent text-wine border-[1.5px] border-line hover:bg-highlight hover:border-highlight",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3.5 min-h-12 text-[0.98rem]",
  sm: "px-4 py-2.5 min-h-10 text-sm",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx(base, variants[variant], sizes[size], className)} {...props} />
  );
}

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  ...props
}: BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className={clsx(base, variants[variant], sizes[size], className)} {...props} />;
}