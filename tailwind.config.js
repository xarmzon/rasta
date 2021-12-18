const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1100px",
      },
    },
    extend: {
      backgroundImage: {
        computer1: `url('/images/computer1.png')`,
      },
      fontFamily: {
        brand: ["Nunito", "san-serif"],
      },
      colors: {
        primary: colors.emerald["700"],
        "primary-50": colors.emerald["50"],
        "primary-100": colors.emerald["100"],
        "primary-400": colors.emerald["400"],
        ascent: "#e01e49",
        body: "#1f2937",
      },
    },
  },
  plugins: [],
};
