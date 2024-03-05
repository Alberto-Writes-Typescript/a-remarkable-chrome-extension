/** @type {import('tailwindcss').Config} */
export default {
  // Search for TailwindCSS class references in all React files under /src
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('postcss-nested'),
    require('autoprefixer'),
  ]
}
