/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'green': {
        '100': 'rgba(34, 197, 94, 0.1)',
        '200': 'rgba(187, 247, 208, 0.8)',
        '500': 'rgba(34, 197, 94, 1)',
        '600': 'rgba(22, 163, 74, 0.1)',
        '700': 'rgba(21, 128, 61, 0.8)',
      },
      // 'headingForeground': '#1F2328',
      'lightGray': 'rgb(102, 112, 127)',
      'background': 'hsl(240, 25%, 98%)',
      'foreground': 'hsl(216, 11%, 45%)',
      'headingBackground': 'hsl(0, 0%, 100%)',
      'headingForeground': 'hsl(213, 13%, 14%)',
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontFamily: {
      primary: ['Golos Text', 'sans-serif'],
      secondary: ['Onest', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

