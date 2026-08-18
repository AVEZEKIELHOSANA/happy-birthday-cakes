"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageIcon, CloseIcon, SparkleIcon } from "./icons";

export function FloatingAssistant({ href = "/onboarding" }: { href?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 animate-[slideInRight_0.25s_ease-out] rounded-2xl bg-paper p-4 shadow-xl ring-1 ring-ink/10">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-canopy text-paper">
                <SparkleIcon className="h-4 w-4" />
              </span>
              <p className="font-display text-sm font-600 text-ink">Coach IA</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Fermer" className="text-ink-soft transition-colors hover:text-ink">
              <CloseIcon className="h-4 w-4" />
            </button>
          </div>
          <p className="text-xs text-ink-soft">
            Une question sur votre enfant ? Discutez avec le Coach IA, disponible 24h/24, sans jugement.
          </p>
          <Link
            href={href}
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-canopy px-4 py-2 text-sm font-semibold text-paper transition-transform duration-200 hover:scale-[1.02]"
          >
            Commencer une conversation
          </Link>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Ouvrir le Coach IA"
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-canopy text-paper shadow-lg transition-transform duration-200 hover:scale-105"
      >
        {open ? <CloseIcon className="h-6 w-6" /> : <MessageIcon className="h-6 w-6" />}
      </button>
    </div>
  );
}