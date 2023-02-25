/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    animation: {
      fall: 'fall 1s ease-out forwards',
      'bounce-slow': 'bounce 2s infinite'
    },
    keyframes: {
      fall: {
        '0%': {
          transform: 'translateY(-100%)'
        },
        '100%': {
          transform: 'translateY(0)'
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      }
    }
  },
  plugins: [],
};
