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
        primary: "#001e40",
        "primary-light": "#003366",
        secondary: "#006a62",
        "secondary-light": "#3adccc",
        accent: "#D4A373",
        background: "#fbfbe2",
        surface: "#f5f5dc",
        "surface-high": "#eaead1",
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "on-surface": "#1b1d0e",
        "on-surface-variant": "#43474f",
        outline: "#737780",
        "outline-variant": "#c3c6d1",
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