module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#040404",
        light: "#fff",
      },
      boxShadow:{
        navLine : "0 1px 2px 0 rgb(61, 61, 61)"
      },
      spacing: {
        '22': '5.5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
