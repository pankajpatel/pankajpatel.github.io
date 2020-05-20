const config = require("./data/config");

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    author: config.author,
    subTitle: config.subTitle,
    siteUrl: config.url,
    social: config.social,
    socialLinks: config.socialLinks,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,

      options: {
        name: config.title,
        short_name: config.name,
        start_url: `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `minimal-ui`,
        icon: config.logo, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: ["/404/*"],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsId,
        head: false,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Source Sans Pro`],
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        // type: `user-profile`,
        username: config.social.instagram,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          components: `${__dirname}/src/components`,
          static: `${__dirname}/static/`,
          styled: `${__dirname}/src/styled`,
          data: `${__dirname}/data/`,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
