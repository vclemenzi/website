/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#111314",
        text: "#ddd2c8",
        surface: "#27272a",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
