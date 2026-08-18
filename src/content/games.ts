import type { QuizQuestion, BalloonMessage, FuturePair } from "../types/content";

export const quizTitle = "How Well Do I Know You?";
export const quizDesc = "A completely unscientific quiz about you. There are no wrong answers, only funny ones.";

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Your comfort food, no contest, is...",
    options: [
      { label: "Something cheesy", response: "Extremely correct and I will not be taking questions." },
      { label: "Something spicy", response: "Of course it is. You never do anything the mild way." },
      { label: "Something sweet", response: "That tracks — you've always had a soft side you don't admit to." },
      { label: "Whatever's in the fridge", response: "The most honest answer on this entire quiz." },
    ],
  },
  {
    question: "It's 2am and you're still awake because...",
    options: [
      { label: "One more episode, I swear", response: "Six seasons later, same energy, zero regrets." },
      { label: "A truly unnecessary internet rabbit hole", response: "You will know an alarming amount about something irrelevant by morning." },
      { label: "Overthinking something small", response: "The 2am thoughts hit different and we both know it." },
      { label: "I'm asleep by 10, actually", response: "Suspiciously responsible. I don't believe you, but okay." },
    ],
  },
  {
    question: "In a group project, you are...",
    options: [
      { label: "The one doing everyone else's part too", response: "A cry for help disguised as competence. Iconic." },
      { label: "The one making it unnecessarily funny", response: "Productivity down 40%, morale up 200%. Worth it." },
      { label: "The one who disappears until it's due", response: "A bold strategy. Somehow it always works out for you." },
      { label: "The one actually in charge", response: "Born to run a meeting that could've been an email." },
    ],
  },
  {
    question: "Your karaoke song, if forced at gunpoint, would be...",
    options: [
      { label: "A power ballad, full commitment", response: "No half measures. Respect." },
      { label: "Something no one else knows", response: "Confusing the room on purpose, I see." },
      { label: "I don't do karaoke", response: "We both know that's a lie waiting to be disproven." },
      { label: "Whatever's playing when they hand me the mic", response: "Chaotic and unbothered. A menace, honestly." },
    ],
  },
  {
    question: "Your most-used emoji is basically...",
    options: [
      { label: "💀 for everything, tragedy or comedy", response: "The most versatile emoji and you know it." },
      { label: "One specific inside joke one", response: "A weapon only a select few understand. Feared." },
      { label: "😐 because words are hard", response: "Efficient. Devastatingly efficient." },
      { label: "I type 'lol' like it's 2009", response: "A man of tradition. Respect the classics." },
    ],
  },
  {
    question: "If your life had a theme song right now, it'd be...",
    options: [
      { label: "Something dramatically over-the-top", response: "Every trip to the fridge deserves a soundtrack, honestly." },
      { label: "Something suspiciously calm", response: "Main character energy, minimal effort required." },
      { label: "Whatever's stuck in my head this week", response: "A mystery even to you. Iconic and unpredictable." },
      { label: "Elevator music, unfortunately", response: "Bold of you to admit it. Respect the honesty." },
    ],
  },
  {
    question: "When you're stressed, your go-to move is...",
    options: [
      { label: "Go quiet for a bit", response: "I've learned to just sit with you through it. No fixing needed." },
      { label: "Talk it out loud, at length", response: "I love that you let me in on the messy parts too." },
      { label: "Pretend it's fine and eat something", response: "A classic, deeply relatable strategy." },
      { label: "Reorganize something completely unrelated", response: "Your desk has never been tidier under pressure. Iconic coping mechanism." },
    ],
  },
  {
    question: "Your birthday wish this year is probably about...",
    options: [
      { label: "Something ambitious", response: "Go big. You've earned the audacity." },
      { label: "Something small and cozy", response: "Underrated wish energy. The best ones usually are." },
      { label: "Something you'd never say out loud", response: "Noted. I won't ask. But I hope it comes true anyway." },
      { label: "More cake, honestly", response: "A wish so pure and achievable I might grant it myself." },
    ],
  },
];

export const balloonsTitle = "Pop a Balloon";
export const balloonsDesc = "Each one is hiding something different — a compliment, a memory, or pure nonsense.";

export const balloonMessages: BalloonMessage[] = [
  { text: "You make hard days feel survivable just by texting back." },
  { text: "Scientifically speaking, you get funnier with age. This is a documented fact." },
  { text: "You're the calmest person I know in a crisis. Genuinely impressive." },
  { text: "You've never once made me feel silly for caring about something." },
  { text: "Your taste in snacks is questionable but your heart is in the right place." },
  { text: "You remember things people say once and never repeat. That's not nothing." },
  { text: "Somehow you're always right about the weather and it's annoying." },
  { text: "You give surprisingly good advice for someone who can't decide what to eat for dinner." },
  { text: "Whatever this year holds, I'm glad I get to watch you have it." },
];

export const futureTitle = "Your Future, Probably";
export const futureDesc = "Pick a side. There are no wrong answers, only extremely telling ones.";

export const futurePairs: FuturePair[] = [
  {
    label: "Career plot twist",
    a: "Join the FBI",
    b: "Go into medicine",
    responseA: "I'd have so many questions. All of them classified, apparently.",
    responseB: "Future doctor energy. I'd brag about you to literally everyone, unprompted.",
  },
  {
    label: "Alternate career #2",
    a: "Professional footballer",
    b: "Become a chef",
    responseA: "I'd be insufferable in the stands. Front row, every game, painted face.",
    responseB: "I would eat every single thing you made and never once complain.",
  },
  {
    label: "Retirement plan",
    a: "Retire at 30 doing absolutely nothing",
    b: "Work forever doing something you love",
    responseA: "Respect the ambition. I expect a full report on how boring it gets by year two.",
    responseB: "Deeply on brand. You'd complain the whole time and still not stop.",
  },
  {
    label: "Fame, hypothetically",
    a: "Famous, but everyone finds you slightly annoying",
    b: "Rich, but completely unknown",
    responseA: "Bold choice. I'd defend your honor in the comments section daily.",
    responseB: "The smart choice, honestly. No paparazzi, just vibes and a nice couch.",
  },
  {
    label: "Superpower, if you had to pick",
    a: "Read minds",
    b: "Time travel",
    responseA: "Terrifying. You'd know exactly how many people find your jokes funny out of pity.",
    responseB: "You'd just go back to fix embarrassing things you said in 2015. We all would.",
  },
  {
    label: "Dream pet",
    a: "A dog that thinks it's a person",
    b: "A cat that ignores you completely",
    responseA: "You'd talk to it in a baby voice in public. I already know this about you.",
    responseB: "An unbothered little menace, just like someone I know.",
  },
  {
    label: "Tonight, hypothetically",
    a: "A wild spontaneous night out",
    b: "Pajamas and doing absolutely nothing",
    responseA: "Bold pick for a Tuesday. I respect the chaos.",
    responseB: "The correct answer. It's your birthday, you're allowed to do nothing spectacularly.",
  },
];