/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', '../../.dumi/**/*.{ts,tsx}', '../../site/**/*.{ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        border: 'var(--ob-color-border-default)',
        input: 'var(--ob-color-border-default)',
        ring: 'var(--ob-color-border-focus)',
        background: 'var(--ob-color-bg-default)',
        foreground: 'var(--ob-color-text-default)',
        primary: {
          DEFAULT: 'var(--ob-blue-4)',
          foreground: 'var(--ob-white)',
          hover: 'var(--ob-blue-5)',
          disabled: 'var(--ob-blue-3)',
        },
        secondary: {
          DEFAULT: 'var(--ob-gray-2)',
          foreground: 'var(--ob-color-text-default)',
        },
        destructive: {
          DEFAULT: 'var(--ob-red-4)',
          foreground: 'var(--ob-white)',
        },
        muted: {
          DEFAULT: 'var(--ob-gray-2)',
          foreground: 'var(--ob-color-text-secondary)',
        },
        accent: {
          DEFAULT: 'var(--ob-gray-3)',
          foreground: 'var(--ob-color-text-default)',
        },
      },
      borderRadius: {
        lg: 'var(--ob-radius-md)',
        md: 'var(--ob-radius-sm)',
        sm: 'var(--ob-radius-sm)',
      },
      fontFamily: {
        sans: ['var(--ob-font-family-default)', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
