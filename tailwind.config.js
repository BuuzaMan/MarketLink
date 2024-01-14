/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], 
  theme: {
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
  plugins: [],
}

