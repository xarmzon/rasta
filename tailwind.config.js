const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
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
        computer2: `url('/images/computer2.png')`,
        windows11: `url('/images/Microsoft-Windows-11-Wallpaper.svg')`,
        grad1:
          "linear-gradient(to top, rgba(211, 211, 211, 0.56), rgba(237, 237, 237, 0.25))",
        grad2: "linear-gradient(rgba(4, 17, 61, 0.5), rgba(4, 17, 61, 0.85))",
      },
      fontFamily: {
        brand: ["Nunito", "san-serif"],
      },
      colors: {
        primary: "#ECF6F7",
        secondary: "#04113D",
        "primary-50": colors.emerald["50"],
        "primary-100": colors.emerald["100"],
        "primary-400": colors.emerald["400"],
        ascent: "#e01e49",
        "ascent-light": "#ed5f84",
        body: "#1f2937",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
