"use client";

import Image from "next/image";
import { BackLink } from "../../components/ui/BackLink";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { memories } from "../../content/memories";

export function MemoriesView() {
  return (
    <div className="animate-view-in flex flex-1 flex-col">
      <BackLink />
      <SectionHeader eyebrow="Memory Lane" title="A look back at your story so far." className="mb-4" />
      <div className="flex-1 overflow-y-auto pr-1">
        <div className="relative pl-6">
          <div className="absolute bottom-1.5 left-[5px] top-1.5 w-0.5 bg-line" />
          {memories.map((m) => (
            <div key={m.id} className="relative mb-5 rounded-2xl border border-line bg-paper-soft p-4">
              <span className="absolute -left-[26px] top-5 h-2.5 w-2.5 rounded-full bg-wine ring-4 ring-paper" />
              <div className="mb-2.5 flex h-28 w-full items-center justify-center rounded-xl bg-gradient-to-br from-highlight to-cream-deep text-2xl text-wine">
                {m.image ? (
                  <Image src={m.image} alt="" width={400} height={220} className="h-full w-full rounded-xl object-cover" unoptimized />
                ) : (
                  <span aria-hidden="true">{m.icon}</span>
                )}
              </div>
              <div className="mb-0.5 text-[0.7rem] font-bold uppercase tracking-wide text-wine">{m.when}</div>
              <div className="mb-1 font-display text-base font-semibold text-ink">{m.title}</div>
              <p className="m-0 text-sm text-ink-soft">{m.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}