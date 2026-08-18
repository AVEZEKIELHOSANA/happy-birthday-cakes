"use client";

import clsx from "clsx";
import { siteConfig } from "../../config/site.config";

interface EnvelopeProps {
  title: string;
  teaser: string;
  rotation: string; // tailwind rotate class
  onClick: () => void;
}

export function Envelope({ title, teaser, rotation, onClick }: EnvelopeProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "group relative block w-full rounded-md border border-line bg-paper-soft p-4 pt-9 text-left shadow-[0_10px_20px_-12px_rgba(27,37,64,0.3)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:rotate-0 hover:border-wine",
        rotation
      )}
      style={{
        backgroundImage:
          "linear-gradient(135deg, transparent 49.3%, var(--color-line) 49.3%, var(--color-line) 50.7%, transparent 50.7%)," +
          "linear-gradient(45deg, transparent 49.3%, var(--color-line) 49.3%, var(--color-line) 50.7%, transparent 50.7%)",
        backgroundSize: "100% 46px",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* stamp */}
      <span
        aria-hidden="true"
        className="absolute right-3 top-3 flex h-8 w-7 items-center justify-center rounded-[2px] border border-dashed border-gold text-[0.9rem]"
      >
        🎂
      </span>
      {/* wax seal */}
      <span
        aria-hidden="true"
        className="absolute -top-3 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-wine text-xs text-cream shadow-[0_4px_8px_-2px_rgba(27,37,64,0.4)]"
      >
        ✦
      </span>

      <div className="mt-2 font-hand text-sm text-ink-soft">To: {siteConfig.partnerName}</div>
      <div className="mt-1 font-display text-base font-semibold text-ink">{title}</div>
      <div className="mt-0.5 text-xs text-ink-soft">{teaser}</div>
    </button>
  );
}