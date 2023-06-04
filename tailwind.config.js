/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('../img/image.png')",
        //'logo': "url('https://cdn.statically.io/gh/TheOdinProject/curriculum/5f37d43908ef92499e95a9b90fc3cc291a95014c/html_css/project-sign-up-form/odin-lined.png')",
      },
      fontFamily: {
        body: ['"Ubuntu Mono"', "ui-sans-serif"],
        logo: ['"Montserrat"', "ui-sans-serif"],
      },
      colors: {
        myBlue: "#222631",
        myYellow: "#f4aa07",
      },
    },
  },
  plugins: [],
};
