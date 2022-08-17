module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.{html}"],
  theme: {
    extend: {
      dropShadow: {
        "neum-light": [
          "30px 30px 20px rgba(0, 0, 0, 0.06)",
          "-15px -15px 20px rgba(255, 255, 255, 1)",
        ],
        "neum-dark": [
          "-15px -15px 15px rgba(129, 140, 248, 0.04)",
          "30px 30px 20px rgba(0, 0, 0, 0.1)",
        ],
      },
    },
  },
  plugins: [],
};
