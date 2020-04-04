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
        short_name: `Josh Portfolio`,
        start_url: `/`,
        background_color: `#005FFF`,
        theme_color: `#121212`,
        display: `standalone`,
        icon: `src/icons/icon.png`,
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
          {
            src: `icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.joshtag.com',
        sitemap: 'https://www.joshtag.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
     },
  ]
}
