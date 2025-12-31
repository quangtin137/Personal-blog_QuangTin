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
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, #283039 1px, transparent 1px), linear-gradient(to bottom, #283039 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-pattern': '50px 50px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'border-flow': 'border-flow 3s ease infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'scan-line': 'scan-line 8s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
