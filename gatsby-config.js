module.exports = {
  siteMetadata: {
    title: "Dr. Ben Galloway",
    author: "Ben Galloway",
    description:
      "Ben is a full-stack JavaScript software developer, science communicator, and technical writer and consultant.",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Dr. Ben Galloway",
        short_name: "starter",
        start_url: "/",
        background_color: "#935d8c",
        theme_color: "#935d8c",
        display: "minimal-ui",
        icon: "src/assets/images/icons/android-chrome-512x512.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
  ],
};
