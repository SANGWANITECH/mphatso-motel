/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D4A1E",
        "primary-light": "#3d6228",
        secondary: "#8B5E3C",
        "secondary-light": "#a87550",
        accent: "#C4902A",
        background: "#FAFAF7",
        surface: "#F2EDE6",
        "surface-high": "#E8E0D5",
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "on-surface": "#1C1A17",
        "on-surface-variant": "#4A4540",
        outline: "#8A8278",
        "outline-variant": "#C8C0B8",
      },
      fontFamily: {
        display: ["Libre Caslon Text", "serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};