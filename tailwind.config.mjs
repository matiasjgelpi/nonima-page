/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      body: ["Quicksand Variable", "sans-serif"],
      heading: ["League Spartan", "sans-serif"],
    },
    colors: {
      white: "#FFFFFF",
      black: "#000",
      green: "#438185",
      violet: "#8963ba",
      "light-green": "rgba(183, 215, 216, 0.8)",
      "light-violet": "rgba(164, 149, 193, 0.8)",
      "lighter-green": "rgba(183, 215, 216, 0.5)",
      "lighter-violet": "rgba(164, 149, 193, 0.5)",
      "light-red": "rgb(248 113 113)",
    },
  },
  plugins: [require("tailwindcss-animated")],
};
