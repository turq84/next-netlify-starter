# Next + Netlify Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/ed50f56e-4fc2-4c98-8b66-1e5074c6f3d3/deploy-status)](https://app.netlify.com/sites/next-starter/deploys)

This is a [Next.js](https://nextjs.org/) v10.0.9 project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and set up to be instantly deployed to [Netlify](https://url.netlify.com/SyTBPVamO)!

This project is a very minimal starter that includes 2 sample components, a global stylesheet, a `netlify.toml` for deployment, and a `jsconfig.json` for setting up absolute imports and aliases. It also includes the [Essential Next.js Build Plugin](https://github.com/netlify/netlify-plugin-nextjs), which will allow for you to implement features like Preview Mode, server-side rendering/incremental static regeneration via Netlify Functions, and internationalized routing.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/next-netlify-starter&utm_source=github&utm_medium=nextstarter-cs&utm_campaign=devex-cs)

(If you click this button, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Installation options

**Option one:** One-click deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/next-netlify-starter&utm_source=github&utm_medium=nextstarter-cs&utm_campaign=devex-cs)

**Option two:** Manual clone

1.  Clone this repo: `git clone https://github.com/cassidoo/next-netlify-starter.git`
2.  Navigate to the directory and run `npm run dev`
3.  Make your changes
4.  Connect to [Netlify](https://url.netlify.com/Bk4UicocL) manually (the `netlify.toml` file is the one you'll need to make sure stays intact to make sure the export is done and pointed to the right stuff)

### Great Tutorial for Next, Fauna, and Graphql

Here's a great resource to use: https://seanconnolly.dev/nextjs-and-fauna-graphql-in-5-minutes

### Environment Variables

https://nextjs.org/docs/api-reference/next.config.js/environment-variables

### Blog

Blog content is stored in the `Blog` folder, in the root directory.

#### Files to add

1.  `components/postList`: https://github.com/cassidoo/next-netlify-blog-starter/blob/master/components/PostList.js
2.  `pages/blog/[slug].js`: https://github.com/cassidoo/next-netlify-blog-starter/blob/master/pages/post/%5Bpostname%5D.js (change postname to slug)
3.  `siteconfig.json`: https://github.com/cassidoo/next-netlify-blog-starter/blob/master/siteconfig.json
4.  `utils/blog/getPosts.js`: https://github.com/cassidoo/next-netlify-blog-starter/blob/master/utils/getPosts.js
5.  `utils/blog/getSlugs.js`: https://github.com/cassidoo/next-netlify-blog-starter/blob/master/utils/getSlugs.js

#### Packages

1.  `gray-matter`
2.  `react-markdown`
3.  `raw-loader`

#### Next config file

The next.config.js file will need to be updated to include the following: https://github.com/cassidoo/next-netlify-blog-starter/blob/1758e4c4201713fbe634e103781a6915e8fbb0b6/next.config.js

#### Hero images

You may include an optional hero image in your posts. Put the images in `public/static/`, and then include in your blog .md file like so:

```
---
title: 'Post title'
author: 'Post author'
date: '2020-04-27'
hero_image: ../static/example.jpg
---
```

See `the-city-of-hipsters.md` for an example of this.

### Authentication with FaunaDB

The authentication for this project was done using the following tutorial: https://medium.com/technest/implement-faunadb-authentication-in-next-js-and-graphql-app-29aaca4d8d96

Here is the source code for the project mentioned in the article: https://github.com/kjmczk/next-fauna-auth

Highly Recommended!
