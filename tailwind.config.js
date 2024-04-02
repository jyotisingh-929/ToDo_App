/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparentBlack: "rgba(0,0,0,0.85)",
        sunsetOrange: "#FF4F5A",
        tangaroa: "#12343B",
        gainsboro: "#E1E1E1",
        greenTeal: "22C55E",
        gray: "#687498",
      },
      backgroundImage: {
        "back-img": "url('./assets/blue-carnivai.jpg')",
      },
    },
    width: {
      "550px": "550px",
    },
    height: {
      "650px": "650px",
    },
  },
  plugins: [],
}