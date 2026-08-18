/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          a: '#f7ecdf',
          b: '#f3ddd2',
        },
        paper: {
          DEFAULT: '#fffaf3',
          soft: '#fbf3e8',
        },
        rose: {
          DEFAULT: '#c1707c',
          deep: '#8a4a56',
        },
        champagne: {
          DEFAULT: '#e3c193',
          soft: '#eeddc0',
        },
        ink: {
          DEFAULT: '#3d2b2e',
          soft: '#75585c',
        },
        highlight: '#f9d9de',
        wine: '#8a4a56',
        line: '#eeddc0',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-karla)', 'sans-serif'],
        hand: ['var(--font-caveat)', 'cursive'],
      },
      borderRadius: {
        lg: '26px',
        md: '16px',
        sm: '10px',
      },
      boxShadow: {
        soft: '0 8px 20px -8px rgba(61,43,46,0.16)',
        card: '0 30px 60px -20px rgba(61,43,46,0.16), 0 2px 0 rgba(255,255,255,0.6) inset',
      },
    },
  },
  plugins: [],
};