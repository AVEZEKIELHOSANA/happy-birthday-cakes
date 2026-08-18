"use client";

import Image from "next/image";
import { BackLink } from "../../components/ui/BackLink";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { Button } from "../../components/ui/Button";
import { mysteryPlaces } from "../../content/mysteryplaces";
import { useJourneyStore } from "../../stores/JourneyStore";

export function MysteryPlacesView() {
  const mystery = useJourneyStore((s) => s.mystery);
  const giveClue = useJourneyStore((s) => s.giveClue);
  const revealMystery = useJourneyStore((s) => s.revealMystery);

  return (
    <div className="animate-view-in flex flex-1 flex-col">
      <BackLink />
      <SectionHeader eyebrow="Mystery Places" title="A few places worth waiting for." className="mb-4" />
      <div className="grid flex-1 grid-cols-1 gap-4 overflow-y-auto pr-1 sm:grid-cols-2">
        {mysteryPlaces.map((m) => {
          const status = mystery[m.id] || "hidden";
          return (
            <div key={m.id} className="flex min-h-[220px] flex-col rounded-2xl border border-line bg-paper-soft p-4">
              {status === "revealed" && (
                <div className="mb-3 h-32 w-full overflow-hidden rounded-xl bg-gradient-to-br from-highlight to-cream-deep">
                  {m.image ? (
                    <Image src={m.image} alt={m.location} width={400} height={220} className="h-full w-full object-cover" unoptimized />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-1 text-wine">
                      <span className="text-2xl" aria-hidden="true">📍</span>
                      <span className="px-2 text-center text-xs font-bold">{m.location}</span>
                    </div>
                  )}
                </div>
              )}
              <div className="mb-1 text-lg" aria-hidden="true">{status === "revealed" ? "🔓" : "🔒"}</div>
              <div className={`mb-1.5 font-display text-base font-semibold text-ink ${status === "hidden" ? "select-none blur-[5px]" : ""}`}>
                {m.title}
              </div>
              {status !== "hidden" && (
                <>
                  <div className="mb-1 text-xs font-bold uppercase tracking-wide text-wine">{m.location}</div>
                  <div className="text-sm italic text-ink-soft">{m.clue}</div>
                </>
              )}
              {status === "revealed" && <p className="mt-2 text-sm text-ink">{m.reveal}</p>}
              <div className="mt-auto pt-3">
                {status === "hidden" && (
                  <Button size="sm" variant="ghost" onClick={() => giveClue(m.id)}>
                    Give me a clue
                  </Button>
                )}
                {status === "clued" && (
                  <Button size="sm" onClick={() => revealMystery(m.id)}>
                    Reveal the Mystery
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}