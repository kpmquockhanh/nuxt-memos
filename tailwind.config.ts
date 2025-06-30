/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.{html,js}',
    "./**/*.js",
    "./**/*.ts",
    "./**/*.vue",
  ],
  theme: {
    extend: {
      screens: {
        'hover-hover': { 'raw': '(hover: hover)' },
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

