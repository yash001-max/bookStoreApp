/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: { ...require("daisyui/src/theming/themes")["light"] },
      },
      "dark",
      "cupcake",
      "corporate",
      "synthwave",
    ],
    darkTheme: "dark",
    base: true,
  },
};
