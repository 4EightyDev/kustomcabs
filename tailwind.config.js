/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          white: '#f8f8f8',
          gray: '#e0e0e0',
          dark: '#1a1a1a',
          blue: '#dbeafe',
        }
        ,
        // expose the site's primary CSS variable as a Tailwind color
        primary: 'var(--color-primary)'
      },
      fontFamily: {
        sans: ['neue-haas-grotesk-display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}