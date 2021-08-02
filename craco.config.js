/* eslint-disable global-require */

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};

/* eslint-enable global-require */
