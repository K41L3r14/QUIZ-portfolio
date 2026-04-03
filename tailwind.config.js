/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f6f1e7",
        ink: "#162025",
        clay: "#b24f35",
        pine: "#1f4d3e",
        wheat: "#f2dbc2"
      },
      boxShadow: {
        lift: "0 16px 32px rgba(22, 32, 37, 0.2)"
      }
    }
  },
  plugins: []
}
