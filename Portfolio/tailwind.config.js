/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#101010",
      white: "#FFFFFF",
      flame: "#DB1A21",
      "flame-path": "#300608",
      ash: "#D3D3D3",
      "light-green": "#CCF381",
      primary: "#00F708",
    },
    fontSize: {
      21: 21,
      34: 34,
      54: 54,
      86: 86,
    },
    fontFamily: {
      inconsolata: "Inconsolata",
    },
    extend: {},
  },
  plugins: [],
};
