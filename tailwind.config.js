/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          transparentPurple: 'rgba(184, 135, 215, 0.5)',
          transparentPink: 'rgba(244, 217, 233, 0.9)',
      }
    },
  },
  plugins: [

    require('@tailwindcss/forms')
  ],
}