/**
 * SITE CONFIG
 * ------------------------------------------------------------------
 * The handful of values that make this site "his" instead of a
 * template. Change these first.
 * ------------------------------------------------------------------
 */
export const siteConfig = {
  /** His name or nickname — shown throughout the site. */
  partnerName: "Malone ( A.K.A. Mr. Babes)",

  /** Your name — used as the signature on letters and the poem. */
  yourName: "Hosana",

  /** His birthday, used for the countdown/date-tag on the welcome page. ISO format. */
  birthday: "2004-08-18",

  /**
   * Where the site owner (you) receives the date-choice email.
   * Never rendered on the page — only used server-side in the API route.
   */
  ownerEmail: "aveze96@gmail.com",

  /**
   * Optional path to his photo, dropped into /public/images/hero/.
   * If the file doesn't exist, the welcome page shows a tasteful
   * placeholder frame instead of a broken image.
   */
  heroPhoto: "/images/welcome.jpeg",
};