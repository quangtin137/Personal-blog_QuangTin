/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#137fec',
        'background-light': '#f6f7f8',
        'background-dark': '#101922',
        'card-dark': '#1c232d',
        'card-border': '#283039',
        'text-secondary': '#9dabb9',
        // Warm accent colors (preserved from original)
        'accent-warm-primary': '#D34E4E',
        'accent-warm-secondary': '#F9E7B2',
        'accent-warm-gold': '#DDC57A',
        'accent-warm-tertiary': '#CE7E5A',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
