module.exports = {
  parser: '@babel/eslint',
  parserOptions: {
    requireConfigFile: false,
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}