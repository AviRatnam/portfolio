module.exports = {
  // purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sansPro: ['sans-serif'],
      },
      spacing: {
        card: "30rem",
        75: "19rem",
        85: "22rem",
      },
      height: {
        "70vh": "70vh",
        "90vh": "90vh",
      },
      colors: {
        orange: "#FB9101",
        linkedinBlue: "#0072b1",
        headerGray: "#303030",
        darkBlueGray: "#575D90"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
