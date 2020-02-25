module.exports = {
  siteMetadata: {
    title: `neuronhub`,
    name: `neuronhub`,
    siteUrl: `https://neuronhub.org`,
    description: `El objetivo de este blog es reunir el conocimiento que se ha generado en el ámbito de la neurociencia en todo el mundo. En un contexto en el que los neuromitos se extienden a una velocidad deslumbrante, este blog se compromete a derrumbarlos y a compartir con los lectores información fiable.`,
    hero: {
      heading: `Bienvenido a neuronhub, un blog creado para que entiendas la neurociencia.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/narative`,
      },
      {
        name: `github`,
        url: `https://github.com/narative`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/narative.co`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/narative/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/narativestudio`,
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
        sources: {
          local: true,
          contentful: false
        },
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
    }
    /*{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `neuronhub`,
        short_name: `neuronhub`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-118232427-3",
      },
    },*/
  ],
};
