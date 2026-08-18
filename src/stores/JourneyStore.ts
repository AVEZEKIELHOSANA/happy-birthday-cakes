import { create } from "zustand";
import type { MysteryStatus, GameKey, ViewKey, SendStatus, DateOption } from "../types/content";
import { letters } from "../content/letters";

interface JourneyState {
  view: ViewKey;
  visited: Set<string>;

  // welcome / wish
  wish: string;
  candleBlown: boolean;

  // letters
  letterIndex: number;

  // poem
  poemRevealed: number;

  // mystery places
  mystery: Record<string, MysteryStatus>;

  // games
  gameView: GameKey | null;
  quizAnswers: Record<number, number>;
  balloonsOpen: Set<number>;
  futureAnswers: Record<number, "a" | "b">;

  // dates
  selectedDateId: string | null;
  customDates: DateOption[];

  // email
  sendStatus: SendStatus;
  sendError: string | null;

  // actions
  goto: (view: ViewKey) => void;
  startJourney: () => void;
  setLetterIndex: (index: number) => void;
  setWish: (text: string) => void;
  blowCandle: () => void;
  openLetter: (index: number) => void;
  nextLetter: () => void;
  revealPoemLine: () => void;
  giveClue: (id: string) => void;
  revealMystery: (id: string) => void;
  openGame: (key: GameKey) => void;
  answerQuiz: (qIndex: number, optIndex: number) => void;
  popBalloon: (index: number) => void;
  chooseFuture: (pairIndex: number, side: "a" | "b") => void;
  selectDate: (id: string) => void;
  addCustomDate: (option: DateOption) => void;
  setSendStatus: (status: SendStatus, error?: string | null) => void;
  resetAll: () => void;
}

const initial = {
  view: "welcome" as ViewKey,
  visited: new Set<string>(),
  wish: "",
  candleBlown: false,
  letterIndex: 0,
  poemRevealed: 0,
  mystery: {} as Record<string, MysteryStatus>,
  gameView: null as GameKey | null,
  quizAnswers: {} as Record<number, number>,
  balloonsOpen: new Set<number>(),
  futureAnswers: {} as Record<number, "a" | "b">,
  selectedDateId: null as string | null,
  customDates: [] as DateOption[],
  sendStatus: "idle" as SendStatus,
  sendError: null as string | null,
};

export const useJourneyStore = create<JourneyState>((set, get) => ({
  ...initial,

  goto: (view) =>
    set((s) => {
      const visited = new Set(s.visited);
      if (view !== "welcome" && view !== "menu") visited.add(view);
      return { view, visited };
    }),

  startJourney: () => set({ view: "menu" }),

  setLetterIndex: (index) => set({ letterIndex: index }),

  setWish: (text) => set({ wish: text }),
  blowCandle: () => set({ candleBlown: true }),

  openLetter: (index) => set({ letterIndex: index, view: "letterReader" }),

  nextLetter: () =>
    set((s) => {
      if (s.letterIndex < letters.length - 1) {
        return { letterIndex: s.letterIndex + 1 };
      }
      return { view: "menu" };
    }),

  revealPoemLine: () => set((s) => ({ poemRevealed: s.poemRevealed + 1 })),

  giveClue: (id) =>
    set((s) => ({ mystery: { ...s.mystery, [id]: "clued" } })),

  revealMystery: (id) =>
    set((s) => ({ mystery: { ...s.mystery, [id]: "revealed" } })),

  openGame: (key) =>
    set((s) => {
      const visited = new Set(s.visited);
      visited.add("games");
      return { gameView: key, visited };
    }),

  answerQuiz: (qIndex, optIndex) =>
    set((s) => ({ quizAnswers: { ...s.quizAnswers, [qIndex]: optIndex } })),

  popBalloon: (index) =>
    set((s) => {
      const next = new Set(s.balloonsOpen);
      next.add(index);
      return { balloonsOpen: next };
    }),

  chooseFuture: (pairIndex, side) =>
    set((s) => ({ futureAnswers: { ...s.futureAnswers, [pairIndex]: side } })),

  selectDate: (id) => set({ selectedDateId: id }),

  addCustomDate: (option) =>
    set((s) => ({
      customDates: [...s.customDates, option],
      selectedDateId: option.id,
    })),

  setSendStatus: (status, error = null) => set({ sendStatus: status, sendError: error }),

  resetAll: () => set({ ...initial, visited: new Set(), balloonsOpen: new Set(), mystery: {}, quizAnswers: {}, futureAnswers: {}, customDates: [] }),
}));

// convenience selector-free getter for non-component code if ever needed
export const getJourneyState = () => useJourneyStore.getState();