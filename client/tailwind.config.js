/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'off-road-3': "url('../public/offroad2.jpeg')",
        'aesthetic-black-and-white': "url('/public/b&w_background.jpeg')",
        'white-background': "url('../public/background2.jpeg')",
        'slate-background-dark':"url('../public/slate.jpeg')"
      }
    },
  },
  plugins: [],
}
