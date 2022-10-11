module.exports = {
  mode: "jit",
  content: ["./**/*.php", "./src/**/*.js", "./src/**/*.jsx"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    screens: {
      'tn': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      '2xl': '1536px',
    }
  }
}

