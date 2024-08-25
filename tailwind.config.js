/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      colors: {
        primary: "#f3f3f3",
        accent: "#0d9488",
        accenthover: "#14b8a6",
        text: "#171717",
      },
    },
  },
  plugins: [],
};
