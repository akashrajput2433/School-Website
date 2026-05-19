/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        school: {
          navy: "#082f63",
          blue: "#0d65c2",
          sky: "#38bdf8",
          gold: "#f4b940",
          ink: "#101828",
          mist: "#eef7ff"
        }
      },
      fontFamily: {
        display: ["Inter", "Segoe UI", "Arial", "sans-serif"],
        body: ["Inter", "Segoe UI", "Arial", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 70px rgba(8, 47, 99, 0.16)",
        soft: "0 18px 45px rgba(16, 24, 40, 0.10)"
      }
    }
  },
  plugins: []
};
