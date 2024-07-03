/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          dark: "#020c1b",
          regular: "#0a192f",
          light: "#112240",
          lightest: "#233554",
          shadow: "#020c1bb3",
        },
        slate: {
          light: "#a8b2d1",
          lightest: "#ccd6f6",
          regular: "#8892b0",
          dark: "#495670",
        },
        green: {
          regular: "#63ffda",
          dark: "#55d3ba",
          tint: "#64ffda1a",
        },
        white: "#e6f1ff",
      },

      fontFamily: {
        sans: [
          "Calibre",
          "Inter",
          "San Francisco",
          "SF Pro Text",
          "Noto Sans JP",
          "sans-serif",
        ],
        mono: [
          "SF Mono",
          "Fira Code",
          "Fira Mono",
          "Roboto Mono",
          "Noto Sans Mono",
          "monospace",
        ],
      },
      boxShadow: {
        "neu-sm": "4px 4px 8px #081425, -4px -4px 8px #0c1e39",
        "neu-md": "10px 10px 20px #081425, -10px -10px 20px #0c1e39;",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
    },
  },
  plugins: [],
};
