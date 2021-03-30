module.exports = {
  target: 'serverless',
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },

  env: {
    FAUNA_SECRET_KEY: process.env.FAUNA_SECRET_KEY,
  },
};
