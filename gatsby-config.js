module.exports = {
  siteMetadata: {
    title: 'Pankaj Patel',
    author: 'Pankaj Patel',
    description: 'Pankaj Patel is Front End Developer. View Pankaj&#39;s Resume and more. Get in touch today.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'pankaj-patel',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
