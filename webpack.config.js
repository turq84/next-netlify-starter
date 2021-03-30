const path = require('path');

module.exports = {
  //   output: {
  //     filename: 'my-first-webpack.bundle.js',
  //   },
  module: {
    rules: [{ test: /\.md$/, use: 'raw-loader' }],
  },
};
