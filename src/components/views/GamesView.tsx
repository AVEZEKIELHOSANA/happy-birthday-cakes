"use client";

import { BackLink } from "../../components/ui/BackLink";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { useJourneyStore } from "../../stores/JourneyStore";
import { quizTitle, quizDesc, balloonsTitle, balloonsDesc, futureTitle, futureDesc } from "../../content/games";
import { QuizGame } from "../../components/views/QuizGame";
import { BalloonsGame } from "../../components/views/BalloonsGame";
import { FutureGame } from "../../components/views/FutureGame";

const CARDS = [
  { key: "quiz" as const, icon: "❓", title: quizTitle, desc: quizDesc },
  { key: "balloons" as const, icon: "🎈", title: balloonsTitle, desc: balloonsDesc },
  { key: "future" as const, icon: "🔮", title: futureTitle, desc: futureDesc },
];

export function GamesView() {
  const gameView = useJourneyStore((s) => s.gameView);
  const openGame = useJourneyStore((s) => s.openGame);

  if (gameView === "quiz") return <QuizGame />;
  if (gameView === "balloons") return <BalloonsGame />;
  if (gameView === "future") return <FutureGame />;

  return (
    <div className="animate-view-in flex flex-1 flex-col">
      <BackLink />
      <SectionHeader eyebrow="Games" title="Nothing to win. Just fun to play." className="mb-4" />
      <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-3">
        {CARDS.map((c) => (
          <button
            key={c.key}
            onClick={() => openGame(c.key)}
            className="flex flex-col items-center justify-center rounded-2xl border border-line bg-paper-soft px-4 py-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:border-wine"
          >
            <span className="mb-2 text-3xl" aria-hidden="true">{c.icon}</span>
            <span className="mb-1 font-display font-semibold text-ink">{c.title}</span>
            <span className="text-xs text-ink-soft">{c.desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
}