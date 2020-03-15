module.exports = {
  // TODO: update metadata
  siteMetadata: {
    title: "OpenMask",
    author: "",
    description: "Developing a 3D printable, open source n95-equivalent respirator for pandemic relief.",
    statement: "The goal of OpenMask is to develop a 3D printable, open source n95-equivalent respirator for pandemic relief.",
    githubURL: "https://github.com/OpenMask",
    email: "dival.banerjee@gmail.com"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/markdown-pages`,
          name: `markdown-pages`,
        },
      },
      `gatsby-transformer-remark`,
  ],
}
