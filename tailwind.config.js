/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        title:["  Plus Jakarta Sans"]
    }
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'html, body': {
          margin: '0',
          padding: '0',
          width: '100%',
        },
      });
    },
  ],
}
