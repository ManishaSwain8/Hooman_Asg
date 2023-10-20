/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: "#0F0D23",
        primary: "#9374FF",
      },
      fontFamily: "Quicksand",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
