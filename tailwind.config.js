/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        body:['Poppins', 'sans-serif'],
      },
      screens: {
        'max-xs': {max: '420px'}, // Custom breakpoint for screens below 420px
      },
    },
  },
  plugins: [],
}

