"use client";

import { useState } from "react";
import { siteConfig } from "../../config/site.config";
import { microcopy } from "../../content/microcopy";
import { Button } from "../../components/ui/Button";
import { useJourneyStore } from "../../stores/JourneyStore";

export function FinalView() {
  const goto = useJourneyStore((s) => s.goto);
  const resetAll = useJourneyStore((s) => s.resetAll);
  const [surprise, setSurprise] = useState(false);

  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center animate-view-in">
      <div className="text-4xl text-wine" style={{ animation: "gentlePulse 1800ms ease-in-out infinite" }} aria-hidden="true">
        🎉
      </div>
      <h2 className="mt-3.5 text-2xl text-ink">You made it to the end.</h2>
      <p className="mt-2 max-w-[36ch] text-ink-soft">
        Happy birthday, {siteConfig.partnerName}. Thank you for opening every little piece of
        this. I hope it made you feel exactly as celebrated as you are.
      </p>

      {!surprise ? (
        <Button variant="ghost" className="mt-4" onClick={() => setSurprise(true)}>
          {microcopy.oneLastThing}
        </Button>
      ) : (
        <div className="mt-4 animate-view-in rounded-2xl border border-dashed border-gold bg-paper-soft px-5 py-4 font-hand text-xl text-wine">
          However this year unfolds — I&rsquo;m so glad I get to watch you have it. Happy birthday, again.
        </div>
      )}

      <div className="mt-6 flex justify-center gap-3">
        <Button onClick={resetAll}>{microcopy.startAgain}</Button>
        <Button variant="ghost" onClick={() => goto("menu")}>
          Explore Again
        </Button>
      </div>
    </div>
  );
}