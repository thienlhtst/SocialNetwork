/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    // "./src/*.{html,js,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': '510px',
      // => @media (min-width: 510px) { ... }

      'tablet-x': '640px',
      // => @media (min-width: 640px) { ... }

      'tablet-xl': '768px',
      // => @media (min-width: 768px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
   
  ],
}

