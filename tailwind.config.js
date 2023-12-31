/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "demolay-logo": "url('~/public/demolay.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "header-green": "#01402E",
        "header-darkGreen": "#013325",
        "header-lightGreen": "#1a5343",
      },
      textColor: {
        "header-yellow": "#FFE494",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
