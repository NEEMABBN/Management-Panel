/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        Pro: "50% 10% 50% 10% / 10% 50% 10% 50%",
      },
    },
  },
  plugins: [],
};
