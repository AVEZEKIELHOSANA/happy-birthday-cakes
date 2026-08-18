"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "../../config/site.config";
import { microcopy } from "../../content/microcopy";
import { useJourneyStore } from "../../stores/JourneyStore";
import { Button } from "../../components/ui/Button";

const WISH_RESPONSES = [
  "Wishes have a way of coming true when you say them out loud to the right person. Noted, and filed away.",
  "I won't ask what it was. But I hope it finds its way to you this year.",
  "That's a good one. I can tell by the pause before you typed it.",
];

function pickResponse(seed: string) {
  const idx = seed.length % WISH_RESPONSES.length;
  return WISH_RESPONSES[idx];
}

export function WelcomeView() {
  const startJourney = useJourneyStore((s) => s.startJourney);
  const wish = useJourneyStore((s) => s.wish);
  const setWish = useJourneyStore((s) => s.setWish);
  const candleBlown = useJourneyStore((s) => s.candleBlown);
  const blowCandle = useJourneyStore((s) => s.blowCandle);
  const [photoFailed, setPhotoFailed] = useState(false);

  const today = new Date().toLocaleDateString(undefined, { month: "long", day: "numeric" });

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-1 text-center animate-view-in">
      {/* His photo */}
      <div className="mb-5 h-41 w-40 overflow-hidden rounded-2xl border border-line border-2 border-paper shadow-[0_18px_30px_-14px_rgba(27,37,64,0.35)] ring-1 ring-line">
        {!photoFailed ? (
          <Image
            src={siteConfig.heroPhoto}
            alt={siteConfig.partnerName}
            width={238}
            height={238}
            className="h-full w-full object-cover"
            onError={() => setPhotoFailed(true)}
            unoptimized
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-gradient-to-br from-highlight to-cream-deep text-wine">
            <span className="text-2xl" aria-hidden="true">📷</span>
            <span className="text-[0.6rem] font-bold leading-tight px-2">
              Add his photo
            </span>
          </div>
        )}
      </div>

      <h1 className="text-[clamp(1.5rem,6vw,2.6rem)] text-ink">
        Happy Birthday,
        <br />
        <span className="font-hand text-wine text-[1em]">{siteConfig.partnerName}</span>
      </h1>
      <p className="max-w-[38ch] mx-auto mt-1.5 mb-2 text-ink-soft">
        My Love, may this year be full of hapiness and joy.
      </p>
      <p className="max-w-[38ch] mx-auto mt-1.5 mb-2 text-ink-soft">
        Want to play some boring games? I have a few ideas for you. 
        Let's start with a little game of wishes.
      </p>

      {/* Make a wish */}
      <div className="my-4 w-full max-w-xs rounded-2xl border border-line bg-paper-soft px-5 py-5">
        <div className="relative mx-auto mb-2 w-fit text-4xl" aria-hidden="true">
          🎂
          {!candleBlown && (
            <span
              className="absolute -top-3 left-1/2 -translate-x-1/2 text-base"
              style={{ animation: "flicker 900ms ease-in-out infinite", transformOrigin: "bottom center" }}
            >
              🕯️
            </span>
          )}
        </div>

        {!candleBlown ? (
          <>
            <label htmlFor="wish" className="mb-1.5 block text-sm font-bold text-ink">
              Make a wish
            </label>
            <input
              id="wish"
              type="text"
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              placeholder="(just for you — I won't peek)"
              className="w-full rounded-lg border border-line bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-wine"
            />
            <Button size="sm" variant="ghost" className="mt-3 w-full" onClick={blowCandle}>
              🕯️ Blow out the candle
            </Button>
          </>
        ) : (
          <p className="font-hand text-lg text-wine">{pickResponse(wish || today)}</p>
        )}
      </div>

      <Button onClick={startJourney}>{microcopy.startBtn}</Button>

      <div className="mt-6 text-xs tracking-wide text-ink-soft">{today} · made just for you</div>
    </div>
  );
}