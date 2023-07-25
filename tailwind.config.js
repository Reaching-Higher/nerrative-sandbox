/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)']
      },
      colors: {
        text: 'var(--color-text)',
        bg: 'var(--color-bg)',
        brand: 'var(--color-brand)',
        darkgrey: 'var(--color-darkgrey)',
        brandAccent: 'var(--color-brandAccent)',
        accent: 'var(--color-accent)'
      },
    },
  },
  plugins: [],
}
