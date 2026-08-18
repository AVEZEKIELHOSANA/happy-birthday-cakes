import type { MysteryPlace } from "../types/content";

/**
 * Real, named destinations — not vague "somewhere nice" cards.
 * Swap these four for places YOU actually have in mind for him.
 * Add a real photo by dropping a file in /public/images/mystery/
 * and setting `image` below (or pasting any image URL) — without
 * one, a clean placeholder with the location name is shown instead.
 */
export const mysteryPlaces: MysteryPlace[] = [
  {
    id: "santorini",
    title: "A Place With a View",
    location: "Santorini, Greece",
    clue: "White walls, blue domes, and a sunset people fly across the world for.",
    reveal:
      "Santorini — cliffside towns overlooking the caldera, famous for having maybe the best sunset view on the planet. Good for: doing nothing productive and being very smug about it.",
    image: "",
  },
  {
    id: "kyoto",
    title: "Somewhere We've Never Been",
    location: "Kyoto, Japan",
    clue: "Thousands of orange gates, quiet temples, and the best food you've never tried.",
    reveal:
      "Kyoto — a thousand-year-old capital with temples, bamboo groves, and enough food stalls to keep us busy for a week. First-time energy, made for two.",
    image: "",
  },
  {
    id: "banff",
    title: "Your Next Little Adventure",
    location: "Banff National Park, Canada",
    clue: "Turquoise lakes, mountains that look fake, and a very real chance we get lost.",
    reveal:
      "Banff — glacier-fed lakes so blue they look edited, mountain trails, and the kind of quiet that makes your phone feel irrelevant for a few days.",
    image: "",
  },
  {
    id: "paris",
    title: "Somewhere With Good Food",
    location: "Paris, France",
    clue: "Think: the kind of meal you'd talk about for a week after.",
    reveal:
      "Paris — pastries that ruin every other pastry for you afterward, a river walk at night, and a very real risk of us extending the trip.",
    image: "",
  },
];