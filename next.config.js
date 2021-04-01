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

  env: {
    // FAUNA DB
    FAUNA_SECRET_KEY: process.env.FAUNA_SECRET_KEY,
    DATABASE_URL: process.env.DATABASE_URL,

    // TWITTER API
    TWITTER_ID: process.env.TWITTER_ID,
    TWITTER_API_KEY: process.env.TWITTER_API_KEY,
    TWITTER_SECRET: process.env.TWITTER_SECRET,

    // AUTH0 API
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    COOKIE_SECRET: process.env.COOKIE_SECRET,

    // Auth Example Tutorial
    NEXT_PUBLIC_FAUNA_GUEST_SECRET: process.env.NEXT_PUBLIC_FAUNA_GUEST_SECRET,
    FAUNA_GUEST_SECRET: process.env.FAUNA_GUEST_SECRET,
  },
};
