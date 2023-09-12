/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#f8f4f1",
        text: "#282825",
        gyellow: "#facc15",
        gpurple: "#c084fc",
        ggreen: "#4ade80",
        gorange: "#fb923c",
        "background-dark": "#111314",
        "text-dark": "#ddd2c8"
      },
    },
  },
  plugins: [],
};
