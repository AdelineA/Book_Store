/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mustard-darker': '#90A905',
        'lachs-dark': '#F6A356',
        'lachs-lighter': '#FFE3CA',
      },
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '4rem',
        lg: '8rem'
      }
    },
  },
  plugins: [],
}

