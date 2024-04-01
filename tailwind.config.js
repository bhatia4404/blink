/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        goblin: ['"Goblin One"', ...defaultTheme.fontFamily.serif],
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        footer: "url('src/img/footer.svg')",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      //everywhere
      white: "#fff",
      //blues
      blue1: "#caf0f8",
      blue2: "#ade8f4",
      blue3: "#90e0ef",
      blue4: "#48cae4",
      blue5: "#00b4d8",
      blue6: "#0096c7",
      blue7: "#0077b6",
      blue8: "#023e8a",
      blue9: "#03045e",
      //blue-red
      bluered1: "#E63946",
      bluered2: "#F1FAEE",
      bluered3: "#A8DADC",
      bluered4: "#457B9D",
      bluered5: "#1D3557",
      //blue-peach
      bluepeach1: "#0081A7",
      bluepeach2: "#00AFB9",
      bluepeach3: "#FDFCDC",
      bluepeach4: "#FED9B7",
      bluepeach5: "#F07167",
    },
  },
  plugins: [],
};
