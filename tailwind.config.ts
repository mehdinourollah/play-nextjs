import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ff0000",
          100: "#b2d8d8",
          200: "#66b2b2",
          // 300: '#66b2b2', you can skip some colors like this or not even commnet them
          // 400: '',
          500: "#008080",
          700: "#66b2b2",
          900: "#004c4c",
        },
        secondary: {
          DEFAULT: "#ffff00",
          100: "##ff9c3c",
          200: "#ff9022",
          300: "#ff8308",
          400: "#ee7600",
          500: "#d56900",
          600: "#bb5d00",
          700: "#a25000",
          800: "#5f2f00",
          900: "#472300",
        },
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
