module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.{html}"],
  theme: {
    extend: {
      dropShadow: {
        neum: [
          "10px 10px 20px rgba(0, 0, 0, 0.1)",
          "-10px -10px 20px rgba(255, 255, 255, 0.5)",
        ],
      },
    },
  },
  plugins: [],
};
