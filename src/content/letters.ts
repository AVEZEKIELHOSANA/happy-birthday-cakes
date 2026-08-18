import { siteConfig } from "../config/site.config";
import type { Letter } from "../types/content";

const { partnerName, yourName } = siteConfig;

export const letters: Letter[] = [
  {
    id: "smile",
    title: "Open When You Need a Smile",
    teaser: "For the days that need a little more light.",
    body: `Hey ${partnerName},

If you're reading this on a day that feels heavier than it should, start here.

I don't have a fix for hard days. What I have is this: you make ordinary moments better than they have any right to be — the way you laugh at your own jokes before you've even finished telling them, the way you narrate what the dog/cat/houseplant is "thinking" like it's a whole personality.

So take a breath. Whatever today is, it doesn't get to keep all of you.

I'm right here, and it's your birthday, so today you're legally required to feel good about yourself.`,
  },
  {
    id: "grown",
    title: "Who You've Become",
    teaser: "A small tribute to the person standing here today.",
    body: `${partnerName},

Another year down, and somehow you keep managing to be more you — more sure of what you care about, more patient than you give yourself credit for, still ridiculous in all the ways I love.

I've watched you handle things this year that weren't easy, and you did it without making a big production out of it. You just quietly figured it out and kept going. I notice that. I want you to know I notice that.

Happy birthday to someone who's genuinely worth celebrating — not because it's the socially correct thing to say today, but because it's true every other day too.`,
  },
  {
    id: "heart",
    title: "A Letter From My Heart",
    teaser: "No jokes in this one. Just the truth.",
    body: `My favorite person,

I wanted one letter today that wasn't clever or funny — just honest.

Knowing you has made my life better in ways I don't say out loud enough. You show up for people. You remember the small things. You make the room easier to be in just by being in it.

Happy birthday to the person who made an ordinary calendar date feel like something worth planning around every single year.

With so much love,
${yourName}`,
  },
  {
    id: "remember",
    title: "One Thing I Never Want You to Forget",
    teaser: "Just one. But it's the important one.",
    body: `${partnerName},

Whatever this year brings — the good, the hard, the completely uneventful Tuesdays — I need you to remember one thing:

You are loved. Completely, on purpose, and without conditions attached. Not for what you achieve this year. Not for how impressive your birthday is. Just for being exactly who you are.

Carry that with you. I mean every word of it.`,
  },
];