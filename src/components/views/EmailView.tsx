"use client";

import { FormEvent, useState } from "react";
import { BackLink } from "../../components/ui/BackLink";
import { Button } from "../../components/ui/Button";
import { dateOptions } from "../../content/dates";
import { microcopy } from "../../content/microcopy";
import { isValidEmail } from "../../lib/validateEmail";
import { useJourneyStore } from "../../stores/JourneyStore";

export function EmailView() {
  const selectedDateId = useJourneyStore((s) => s.selectedDateId);
  const customDates = useJourneyStore((s) => s.customDates);
  const sendStatus = useJourneyStore((s) => s.sendStatus);
  const setSendStatus = useJourneyStore((s) => s.setSendStatus);
  const goto = useJourneyStore((s) => s.goto);

  const [email, setEmail] = useState("");
  const [fieldError, setFieldError] = useState("");
  const [copied, setCopied] = useState(false);

  const allDates = [...dateOptions, ...customDates];
  const selected = allDates.find((d) => d.id === selectedDateId);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setFieldError("That doesn't look like a valid email — mind double-checking?");
      return;
    }
    setFieldError("");
    setSendStatus("sending");

    try {
      const res = await fetch("/api/send-choice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          dateTitle: selected?.title,
          dateDescription: selected?.description,
          isCustom: selected?.isCustom ?? false,
        }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setSendStatus("ok");
      } else {
        setSendStatus("error", data.error || "Something went wrong.");
      }
    } catch {
      setSendStatus("error", "Couldn't reach the server — check your connection.");
    }
  }

  async function copyChoice() {
    const text = `I chose: ${selected?.title}. My email is ${email}.`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — silently ignore, button label won't change
    }
  }

  return (
    <div className="animate-view-in flex flex-1 flex-col">
      <BackLink label="Change my mind" to="dates" />

      <div className="mb-5 rounded-2xl bg-highlight px-4 py-3.5">
        <div className="text-[0.68rem] font-bold uppercase tracking-wide text-wine">Your choice</div>
        <div className="font-display text-lg text-ink">{selected ? selected.title : "—"}</div>
      </div>

      {sendStatus !== "ok" && (
        <form onSubmit={onSubmit} noValidate>
          <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-ink">
            Your email
          </label>
          <p className="mb-3.5 text-sm text-ink-soft">
            So I can reply to you personally and tell you when we&rsquo;re making this happen.
          </p>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            required
            className="w-full rounded-xl border-[1.5px] border-line bg-paper px-4 py-3.5 text-base text-ink outline-none focus:border-wine"
          />
          {fieldError && (
            <div className="mt-2 min-h-[1.2em] text-sm text-wine" aria-live="polite">
              {fieldError}
            </div>
          )}
          <Button type="submit" className="mt-3.5" disabled={sendStatus === "sending"}>
            {sendStatus === "sending" ? "Sending..." : microcopy.sendChoice}
          </Button>
        </form>
      )}

      {sendStatus === "ok" && (
        <div className="animate-view-in rounded-xl bg-[#e9f2e6] px-4 py-3.5 text-sm text-[#3f5c3a]" aria-live="polite">
          It&rsquo;s on its way to me. Now you just have to wait...
          <div className="mt-2.5">
            <Button size="sm" onClick={() => goto("final")}>
              Continue →
            </Button>
          </div>
        </div>
      )}

      {sendStatus === "error" && (
        <div className="mt-3.5 animate-view-in rounded-xl border border-line bg-paper-soft px-4 py-3.5 text-sm text-ink" aria-live="polite">
          That didn&rsquo;t quite make it through. You can try again, or copy your choice and send it to me another way.
          <div className="mt-2.5 flex flex-wrap gap-2.5">
            <Button size="sm" onClick={() => setSendStatus("idle")}>
              Try Again
            </Button>
            <Button size="sm" variant="ghost" onClick={copyChoice}>
              {copied ? "Copied ✓" : "Copy My Choice"}
            </Button>
            <Button size="sm" variant="ghost" onClick={() => goto("final")}>
              Continue Anyway →
            </Button>
          </div>
        </div>
      )}

      <p className="mt-3 text-xs text-ink-soft">
        Only your email and chosen date are sent — nothing else, no account, no tracking.
      </p>
    </div>
  );
}