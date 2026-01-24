/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom font families
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Montserrat', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      // Custom colors if needed
      colors: {
        // Sky colors are already in Tailwind, but you can extend here
      },
    },
  },
  plugins: [],
}


