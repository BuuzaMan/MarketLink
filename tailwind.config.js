/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], 
  theme: {
    screens: {
      'desktop': '1440px',
      'tablet': '1024px',
      'mobile': '386px'
    },
    extend: {
      fontFamily: {
        gothic: ["Gothic", "sans-serif"],
        macan: ["Macan", "sans-serif"],
        sfpro: ["SFPRO", "sans-serif"],
        fira: ["Fira Sans", "sans-serif"],
        coolvetica: ["Coolvetica", "sans-serif"],
        lato: ["Lato", "sans-serif"]
      }
    },
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }
      }
      addUtilities(newUtilities)
    }
  ],
}

