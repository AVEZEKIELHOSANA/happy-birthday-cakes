"use client";

import { useState } from "react";
import clsx from "clsx";
import { BackLink } from "../../components/ui/BackLink";
import { SectionHeader } from "../../components/ui/SectionHeader";
import { Button } from "../../components/ui/Button";
import { dateOptions } from "../../content/dates";
import { microcopy } from "../../content/microcopy";
import { useJourneyStore } from "../../stores/JourneyStore";

export function DatesView() {
  const selectedDateId = useJourneyStore((s) => s.selectedDateId);
  const selectDate = useJourneyStore((s) => s.selectDate);
  const customDates = useJourneyStore((s) => s.customDates);
  const addCustomDate = useJourneyStore((s) => s.addCustomDate);
  const goto = useJourneyStore((s) => s.goto);

  const [showForm, setShowForm] = useState(false);
  const [customTitle, setCustomTitle] = useState("");
  const [customDesc, setCustomDesc] = useState("");

  const allDates = [...dateOptions, ...customDates];
  const selected = allDates.find((d) => d.id === selectedDateId);

  function submitCustom() {
    if (!customTitle.trim()) return;
    addCustomDate({
      id: `custom-${Date.now()}`,
      mood: "Your idea",
      title: customTitle.trim(),
      description: customDesc.trim() || "Whatever you have in mind — I'm in.",
      duration: "Up to you",
      isCustom: true,
    });
    setCustomTitle("");
    setCustomDesc("");
    setShowForm(false);
  }

  return (
    <div className="animate-view-in flex flex-1 flex-col">
      <BackLink />
      <SectionHeader eyebrow="Choose Our Date" title="Pick our next adventure." className="mb-4" />

      <div className="flex-1 overflow-y-auto pr-1">
        <div className="mb-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {allDates.map((d) => (
            <button
              key={d.id}
              onClick={() => selectDate(d.id)}
              className={clsx(
                "relative rounded-2xl border-2 px-4 py-4 text-left transition-colors",
                selectedDateId === d.id ? "border-wine bg-highlight" : "border-line bg-paper-soft hover:border-wine"
              )}
            >
              {selectedDateId === d.id && (
                <span className="absolute right-3.5 top-3.5 text-sm font-bold text-wine" aria-hidden="true">
                  ✓ chosen
                </span>
              )}
              <div className="mb-1.5 text-[0.68rem] font-bold uppercase tracking-wide text-wine">
                {d.mood}
              </div>
              <div className="mb-1 font-display text-[1.05rem] font-semibold text-ink">{d.title}</div>
              <div className="mb-2 text-sm text-ink-soft">{d.description}</div>
              <div className="text-xs text-ink-soft">{d.duration}</div>
            </button>
          ))}

          {/* Add another */}
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="flex min-h-[130px] items-center justify-center rounded-2xl border-2 border-dashed border-line px-4 py-4 text-sm font-bold text-wine transition-colors hover:border-wine hover:bg-highlight"
            >
              {microcopy.addAnother}
            </button>
          ) : (
            <div className="rounded-2xl border-2 border-dashed border-wine bg-paper-soft px-4 py-4">
              <label className="mb-1 block text-xs font-bold text-ink">Your idea</label>
              <input
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                placeholder="e.g. Road trip, no destination"
                className="mb-2 w-full rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-wine"
              />
              <label className="mb-1 block text-xs font-bold text-ink">A little detail (optional)</label>
              <textarea
                value={customDesc}
                onChange={(e) => setCustomDesc(e.target.value)}
                placeholder="Whatever you want me to know"
                rows={2}
                className="mb-3 w-full resize-none rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink outline-none focus:border-wine"
              />
              <div className="flex gap-2">
                <Button size="sm" onClick={submitCustom}>
                  Add it
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {selected && (
        <div className="sticky bottom-0 -mx-6 -mb-7 flex items-center gap-3 bg-gradient-to-t from-paper via-paper to-transparent px-6 pb-7 pt-4 sm:-mx-8 sm:-mb-8 sm:px-8 sm:pb-8">
          <span className="text-sm text-ink">
            You picked <strong className="text-wine">{selected.title}</strong>.
          </span>
          <span className="flex-1" />
          <Button onClick={() => goto("email")}>Continue →</Button>
        </div>
      )}
    </div>
  );
}