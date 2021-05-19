module.exports = {
  mode: "jit",
  purge: ["./src/**/*.11ty.js", "./src/_utils/shortcodes/**/*.js"],
  darkMode: "media",
  theme: {
    colors: {
      blue: {
        lightest: "#06C4B1",
        lighter: "#74AEF1",
        DEFAULT: "#0C5892",
      },
      gray: {
        50: "#eeeeee",
        100: "#d4d4d4",
        200: "#adadad",
        300: "#6e6e6e",
        400: "#545454",
        500: "#4A5566",
        600: "#414a59",
        700: "#38404D",
        800: "#2F3640",
        900: "#252B33",
        950: "#181C21",
      },
      green: {
        DEFAULT: "#04786C",
      },
      orange: {
        DEFAULT: "#F85F3D",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
