import colors from 'tailwindcss/colors.js'

export default {
  // Just-In-Time compilation mode:
  // https://v2.tailwindcss.com/docs/just-in-time-mode
  mode: 'jit',
  // Set of files using TailwindCSS classes. TW will use these paths to find
  // usages of TW CSS classes, so it only compiles the minimal set of them
  // being used by the application (when JIT mode is enabled)
  // https://tailwindcss.com/docs/content-configuration
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      remarkableBackground: {
        100: '#fcfbf8',
        500: '#f8f6f0',
        900: '#ede8de'
      }
    }
  },
  plugins: [
    require('postcss-nested'),
    require('autoprefixer')
  ]
}
