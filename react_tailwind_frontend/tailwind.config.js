/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          primary: "#2563EB",
          secondary: "#F59E0B",
          success: "#F59E0B",
          error: "#EF4444",
          text: "#111827",
          bg: "#f9fafb",
          surface: "#ffffff"
        }
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,0.06)",
        card: "0 8px 30px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        xl: "1rem"
      },
      backgroundImage: {
        "ocean-gradient": "linear-gradient(to bottom right, rgba(59,130,246,0.10), rgba(249,250,251,1))"
      },
      transitionProperty: {
        width: "width",
        spacing: "margin, padding"
      }
    }
  },
  plugins: []
};
