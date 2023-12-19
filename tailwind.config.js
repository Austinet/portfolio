/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "primary-dark": "hsl(217,28%,15%)",
        "secondary-dark": "#62E0D9",
        "light-dark": "hsl(219,30%,18%)",
        "very-dark": "hsl(216,53%,9%)",
        "primary-light": "#fafafa",
        "secondary-light": "#62E0D9",
        "dark-light": "hsl(219,30%,18%)",
        "very-light": "hsl(216,53%,9%)",
      },
      textColor: {
        "primary-dark": "hsl(217,28%,15%)",
        "secondary": "#62E0D9",
        "very-dark": "hsl(216,53%,9%)",
        "primary-light": "#fafafa",
        "secondary-light": "#62E0D9",
        "dark-light": "hsl(219,30%,18%)",
        "very-light": "hsl(216,53%,9%)",
      },
      borderColor: {
        "primary-dark": "hsl(217,28%,15%)",
        "secondary": "#62E0D9",
        "very-dark": "hsl(216,53%,9%)",
        "primary-light": "#fafafa",
        "secondary-light": "#62E0D9",
        "dark-light": "hsl(219,30%,18%)",
        "very-light": "hsl(216,53%,9%)",
      },
      boxShadow: {
          "card": "0 0 3px hsl(218,28%,13%)",
          'blue': '0 0px 5px #62E0D9'
      },
    },
    fontFamily: {
      "Open-sans": ['"Open sans"', "sans-serif"],
    },
  },
  plugins: [],
}