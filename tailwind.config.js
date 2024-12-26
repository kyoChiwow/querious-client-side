/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'queryBanner' : "url('/src/assets/images/queryBanner.jpg')",
        'slide1' : "url('/src/assets/slider/slide1.jpg')",
        'slide2' : "url('/src/assets/slider/slide2.jpg')",
        'slide3' : "url('/src/assets/slider/slide3.jpg')",
        'newsletterBg' : "url('/src/assets/images/newsletter.jpg')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

