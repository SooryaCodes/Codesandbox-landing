module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend:{
      colors: {
        dark: "#040404",
        light:'#fff'
      },
    }
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
};
