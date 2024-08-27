/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        plainLight: ["plain-light", "sans-serif"],
        plainRegular: ["plain-regular", "sans-serif"],
        silkSerifLight: ["silkSerif-light", "serif"],
        silkSerifRegular: ["silkSerif-regular", "serif"],
      },
    },
  },
  plugins: [],
};
