"use client";

import clsx from "clsx";
import { BackLink } from "../../components/ui/BackLink";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { quizTitle, quizDesc, quizQuestions } from "../../content/games";
import { useJourneyStore } from "../../stores/JourneyStore";

export function QuizGame() {
  const quizAnswers = useJourneyStore((s) => s.quizAnswers);
  const answerQuiz = useJourneyStore((s) => s.answerQuiz);

  return (
    <div className="animate-view-in flex flex-1 flex-col">
      <BackLink label="Back to Games" to="games" />
      <SectionHeader eyebrow={quizTitle} title={quizDesc} className="mb-4" />
      <div className="flex-1 space-y-4 overflow-y-auto pr-1">
        {quizQuestions.map((q, qi) => {
          const picked = quizAnswers[qi];
          return (
            <div key={qi} className="rounded-2xl border border-line bg-paper-soft p-4">
              <div className="mb-2.5 font-display text-[1.02rem] text-ink">{q.question}</div>
              <div className="flex flex-wrap gap-2">
                {q.options.map((opt, oi) => (
                  <button
                    key={oi}
                    onClick={() => answerQuiz(qi, oi)}
                    className={clsx(
                      "rounded-full border-[1.5px] px-4 py-2 text-sm font-semibold transition-colors",
                      picked === oi
                        ? "border-wine bg-wine text-cream"
                        : "border-line bg-paper text-ink hover:border-wine"
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              {picked !== undefined && (
                <div className="mt-2.5 animate-view-in rounded-xl bg-highlight px-3 py-2.5 text-sm text-wine">
                  {q.options[picked].response}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}