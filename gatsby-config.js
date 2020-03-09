const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://neuronhub.org',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `neuronhub`,
    name: `neuronhub`,
    siteUrl: `https://neuronhub.org`,
    description: `Entiende la neurociencia.`,
    hero: {
      heading: `Entiende la neurociencia.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/_neuronhub`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/neuronhub/`,
      },
      {
        name: `facebook`,
        url: `https://www.facebook.com/neuronhub.org/`,
      },
      {
        name: `github`,
        url: `https://github.com/jesuscopado`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        mailchimp: true,
        sources: {
          local: true,
          contentful: false
        },
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `neuronhub`,
        short_name: `neuronhub`,
        description: `El objetivo de este blog es reunir el conocimiento que se ha generado en el ámbito de la neurociencia en todo el mundo.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://neuronhub.us19.list-manage.com/subscribe/post?u=89902b60aacded954366416a9&amp;id=c428788c4d',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-159262209-1",
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    }
  ],
};
