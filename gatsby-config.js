module.exports = {
  siteMetadata: {
    title: `neuronhub`,
    name: `neuronhub`,
    siteUrl: `https://neuronhub.org`,
    description: `El objetivo de este blog es reunir el conocimiento que se ha generado en el ámbito de la neurociencia en todo el mundo. En un contexto en el que los neuromitos se extienden a una velocidad deslumbrante, este blog se compromete a derrumbarlos y a compartir con los lectores información fiable.`,
    hero: {
      heading: `Bienvenido a neuronhub, el lugar donde la curiosidad es la única condición.
      `,
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-159262209-1",
      },
    }
  ],
};
