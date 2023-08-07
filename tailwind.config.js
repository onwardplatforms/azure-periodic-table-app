/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // background: '',
        accent: '#3bc8f4',
        hover: 'hsl(var(--hover))',
        bg: 'hsl(var(--bg))',
        background: 'hsl(var(--bg))',
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
      },
      scale: {
        '200': '2',
        '250': '2.5',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'hsl(var(--radix-accordion-content-height))' },
        },
        'accordion-up': {
          from: { height: 'hsl(var(--radix-accordion-content-height))' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
