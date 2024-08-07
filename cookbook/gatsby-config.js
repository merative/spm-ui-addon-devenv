const siteTitle = "Cúram UI Addon Development Environment";
const sitePrefix = process.env.SITE_PREFIX || "/spm-ui-addon-devenv";

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: "Cúram UI Addon Development Environment",
    keywords: "merative,curam,containers",
  },
  pathPrefix: sitePrefix,
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteTitle,
        short_name: siteTitle,
        start_url: sitePrefix,
        background_color: "#ffffff",
        theme_color: "#0062ff",
        display: "browser",
        icon: "node_modules/gatsby-theme-carbon/src/images/favicon.svg",
      },
    },
    {
      resolve: "gatsby-theme-carbon",
      options: {
        isSearchEnabled: true,
        withWebp: true,
        imageQuality: 75,
      },
    },
  ],
};
