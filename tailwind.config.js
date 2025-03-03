/** @type {import('tailwindcss').Config} */

// TailwindCSS configuration file to define which files Tailwind should scan for styles

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // tells tailwind which files to scan for classnames (all javascript and typescript files in the src directory)
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}