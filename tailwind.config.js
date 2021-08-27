module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBlue: {
          400: "hsl(221, 14%, 31%)",
          500: "hsl(225, 21%, 49%)",
          600: "hsl(224, 28%, 35%)",
          700: "hsl(222, 26%, 31%)",
          800: "hsl(223, 31%, 20%)",
          900: "hsl(224, 36%, 15%)",
        },
        violet: {
          600: "hsl(281, 89%, 26%)",
          700: "hsl(268, 47%, 21%)",
          800: "hsl(268, 71%, 12%)",
          900: "hsl(268, 75%, 9%)",
        },
        magenta: {
          500: "hsl(285, 91%, 52%)",
          900: "hsl(290, 70%, 36%)",
        },
        cyan: {
          500: "hsl(176, 100%, 44%)",
          600: "hsl(177, 92%, 70%)",
        },
        darkRed: {
          500: "hsl(6, 63%, 50%)",
          900: "hsl(6, 70%, 34%)",
        },
        grayishOrange: {
          400: "hsl(30, 25%, 89%)",
          500: "hsl(28, 16%, 65%)",
        },
        lightYellow: "hsl(45, 7%, 89%)",
        lightGray: "hsl(0, 0%, 90%)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
