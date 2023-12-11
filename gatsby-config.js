/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [ 
      'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
     
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    
        {
          resolve: 'gatsby-plugin-firebase',
          options: {
            credentials: {
              apiKey: 'YOUR_API_KEY',
              authDomain: 'YOUR_AUTH_DOMAIN',
              projectId: 'YOUR_PROJECT_ID',
              storageBucket: 'YOUR_STORAGE_BUCKET',
              messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
              appId: 'YOUR_APP_ID',
              measurementId: 'YOUR_MEASUREMENT_ID',
            },
            features: {
              auth: true, // enable Firebase authentication
              database: true, // enable Firebase Realtime Database
              storage: true, // enable Firebase Storage
              messaging: true, // enable Firebase Cloud Messaging
              functions: true, // enable Firebase Cloud Functions
              performance: true, // enable Firebase Performance Monitoring
            },
          },
        },
      ],
    }
    
  
