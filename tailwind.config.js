/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#eaf4f0",
        ink: "#1c3b3f",
        clay: "#d08452",
        pine: "#2f6a62",
        wheat: "#d9ebe3"
      },
      boxShadow: {
        lift: "0 16px 32px rgba(28, 59, 63, 0.2)"
      }
    }
  },
  plugins: []
}
