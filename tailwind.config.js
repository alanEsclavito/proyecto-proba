/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#009794",

          secondary: "#00c500",

          accent: "#d1a100",

          neutral: "#2a253b",

          "base-100": "#F3F4F6",

          info: "#00c1ff",

          success: "#00f6a6",

          warning: "#ff9900",

          error: "#ed314f",
        },
      },
    ],
  },
  plugins: [daisyui],
};
