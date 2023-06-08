/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'image' : "url('/public/images/qt.png')",
        }),
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}