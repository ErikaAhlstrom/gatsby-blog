
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`, 
});

module.exports = {
  siteMetadata: {
    title: 'Simply A Blog',
    description: 'Nice and clean blog site',
    author: 'Erika Ahlström',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Sacramento', 'Outfit Sans:100, 200, 300, 400, 500, 600, 700, 800, 900']
        }
      }
    }
  ],
}
