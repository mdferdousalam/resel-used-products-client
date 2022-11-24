/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        assignment12: {
          primary: '#61481C',
          secondary: "#A47E3B",
          accent: "#BF9742",
          neutral: "#E6B325",
          base: "#F3EFE0",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
