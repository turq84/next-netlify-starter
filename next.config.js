require('dotenv').config();

module.exports = {
  target: 'serverless',
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },

  // SECRETS
  env: {
    FAUNA_SECRET_KEY: 'fnAEFKhC5QACBeeP9BNF37bFA--jnkojqm7H87y5',
    // FAUNA_SECRET_KEY: process.env.FAUNA_SECRET_KEY,
  },
};
