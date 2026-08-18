import { siteConfig } from "../config/site.config";
import type { Poem } from "../types/content";

export const poem: Poem = {
  title: "Another Year of You",
  stanzas: [
    {
      lines: [
        "They say the years go quicker",
        "the older that you get —",
        "so let's slow this one down a little,",
        "it's a day I won't forget.",
      ],
    },
    {
      lines: [
        "Not for the candles or the cake,",
        "though I do love a good excuse for cake —",
        "but for one more year of knowing you,",
        "which is the gift I'll never shake.",
      ],
    },
    {
      lines: [
        "A little older, somehow lighter,",
        "still my favorite company to keep —",
        "here's to the version of you standing here,",
        "and the ones I've yet to meet.",
      ],
    },
    {
      lines: [
        "So happy birthday, truly —",
        "however far this year may roam,",
        "you make ordinary days feel like",
        "something worth calling home.",
      ],
    },
  ],
  signature: siteConfig.yourName,
};