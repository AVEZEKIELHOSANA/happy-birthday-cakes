// Shared content types. Keep content itself in /src/content/*, keep shape here.

export interface Letter {
  id: string;
  title: string;
  teaser: string;
  body: string; // use \n\n for paragraph breaks
}

export interface PoemStanza {
  lines: string[];
}

export interface Poem {
  title: string;
  stanzas: PoemStanza[];
  signature: string;
}

export interface Memory {
  id: string;
  when: string; // e.g. "Age 7" or "2014"
  title: string;
  caption: string;
  icon: string; // emoji fallback
  image?: string; // optional real photo URL/path
}

export interface MysteryPlace {
  id: string;
  title: string;
  location: string; // real, named place, e.g. "Kyoto, Japan"
  clue: string;
  reveal: string;
  image?: string; // optional real photo URL/path, shown on reveal
}

export interface QuizOption {
  label: string;
  response: string;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export interface BalloonMessage {
  text: string;
}

export interface FuturePair {
  label: string;
  a: string;
  b: string;
  responseA: string;
  responseB: string;
}

export interface DateOption {
  id: string;
  mood: string;
  title: string;
  description: string;
  duration: string;
  isCustom?: boolean;
}

export type MysteryStatus = "hidden" | "clued" | "revealed";
export type GameKey = "quiz" | "balloons" | "future";
export type ViewKey =
  | "welcome"
  | "menu"
  | "letters"
  | "letterReader"
  | "poem"
  | "memories"
  | "mystery"
  | "games"
  | "dates"
  | "email"
  | "final";

export type SendStatus = "idle" | "sending" | "ok" | "error";