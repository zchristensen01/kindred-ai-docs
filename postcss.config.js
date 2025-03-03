// configures PostCSS, a tool that processes CSS (like Tailwind).

module.exports = {
  plugins: {
    tailwindcss: require('tailwindcss'),
    autoprefixer: require('autoprefixer'),
  }
}
