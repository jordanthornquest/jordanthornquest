module.exports = {
  mode: "jit",
  purge: ["./src/**/*.11ty.js", "./utils/shortcodes/**/*.js"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: "#F85F3D",
        },
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
