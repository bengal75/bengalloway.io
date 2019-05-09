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
        short_name: "BG",
        start_url: "/",
        background_color: "#4d6f93",
        theme_color: "#6789ad",
        display: "minimal-ui",
        icon: "src/assets/images/icons/android-chrome-512x512.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sass",
    // "gatsby-plugin-offline",
  ],
};
