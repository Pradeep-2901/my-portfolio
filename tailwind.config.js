/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Define the Keyframes for moving up
      keyframes: {
        'vertical-scroll': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-50%)' }, // Moves exactly half the height (the duplicate set)
        },
      },
      // 2. Define the Animation utility class
      animation: {
        'vertical-scroll': 'vertical-scroll 12s linear infinite', // 50s speed, loops forever
      },
    },
  },
  plugins: [],
}

