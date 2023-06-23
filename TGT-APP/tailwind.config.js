/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light", "dark", "retro", "autumn"],
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: [
    {
      brand: {
        primary: "#8cea94",
        secondary: "#af0ef4",
        accent: "#360199",
        neutral: "#262f3b",
        "base-100": "#e9e9ed",
        info: "#98d2e7",
        success: "#2ebdaf",
        warning: "#f2c150",
        error: "#df3a5d",
      },
    },
    {
      extend: {
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        height: {
          '104': "28rem",
        },
      },
    },
  ],
  plugins: [require("daisyui")],
};
