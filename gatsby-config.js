require( 'dotenv' ).config();

const metadata = {
  companyName: 'Travel Site',
  companyUrl: 'https://graphcms.com/',
  authorName: 'Colby Fayock',
  authorUrl: 'https://www.colbyfayock.com/',
  siteUrl: 'https://gatsby-starter-graphcms-travel-site.netlify.app',
};

module.exports = {
  siteMetadata: metadata,
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    'gatsby-plugin-react-leaflet',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GCMS',
        fieldName: 'gcms',
        url: process.env.GRAPHCMS_API_ENDPOINT,
      },
    },
  ],
};
