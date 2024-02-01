/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {container:{
      paddingLeft: '5rem',
      paddingRight: '7rem'
     }},
  },
  plugins: [],
}