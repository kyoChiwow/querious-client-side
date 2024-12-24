/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'queryBanner' : "url('/src/assets/images/queryBanner.jpg')"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

