module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project`,
        path: `./data`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Joshua Taguicana Portfolio`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#005FFF`,
        theme_color: `#121212`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `icons/icon-144x144.png`,
            sizes: `144x144`,
            type: `image/png`,
          },
        ],
      },
    }
  ]
}