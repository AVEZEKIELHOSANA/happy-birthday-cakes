"use client";

import { useJourneyStore } from "../../stores/JourneyStore";
import { ParticleField } from "../../components/ui/ParticleField";
import { HomeButton } from "../../components/ui/HomeButton";
import { WelcomeView } from "../../components/views/WelcomeView";
import { BirthdayMenuView } from "../../components/views/BirthdayMenuView";
import { LettersView } from "../../components/views/LettersView";
import { LetterReaderView } from "../../components/views/LetterReaderView";
import { PoemView } from "../../components/views/PoemView";
import { MemoriesView } from "../../components/views/MemoriesView";
import { MysteryPlacesView } from "../../components/views/MysteryPlacesView";
import { GamesView } from "../../components/views/GamesView";
import { DatesView } from "../../components/views/DatesView";
import { EmailView } from "../../components/views/EmailView";
import { FinalView } from "../../components/views/FinalView";
import type { ViewKey } from "../../types/content";

// Instead of using a static map, use a render function that passes props
export function JourneyShell() {
  const view = useJourneyStore((s) => s.view);
  const goto = useJourneyStore((s) => s.goto);
  const setLetterIndex = useJourneyStore((s) => s.setLetterIndex);
  const letterIndex = useJourneyStore((s) => s.letterIndex);

  // Render the active view with its required props
  const renderView = () => {
    switch (view) {
      case 'welcome':
        return <WelcomeView />;
      case 'menu':
        return <BirthdayMenuView />;
      case 'letters':
        return <LettersView />; // LettersView uses store internally
      case 'letterReader':
        return <LetterReaderView />;
      case 'poem':
        return <PoemView />;
      case 'memories':
        return <MemoriesView />;
      case 'mystery':
        return <MysteryPlacesView />;
      case 'games':
        return <GamesView />;
      case 'dates':
        return <DatesView />;
      case 'email':
        return <EmailView />;
      case 'final':
        return <FinalView />;
      default:
        return <WelcomeView />;
    }
  };

  return (
    <>
      <ParticleField />
      <HomeButton />
      <div className="relative z-[2] flex min-h-screen items-center justify-center px-4 py-7">
        <div className="relative flex min-h-[min(78vh,640px)] w-full max-w-[720px] flex-col overflow-hidden rounded-[26px] bg-paper p-8 shadow-[0_30px_60px_-20px_rgba(27,37,64,0.2)] ring-1 ring-black/[0.03] sm:p-9">
          {renderView()}
        </div>
      </div>
    </>
  );
}