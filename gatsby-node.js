/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createOpenGraphImage } = require("gatsby-plugin-open-graph-images");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const openGraphImage = createOpenGraphImage(createPage, {
    path: "/og-image/index.png",
    component: path.resolve(`src/templates/index.og-image.js`),
    size: {
      width: 400,
      height: 50,
    },
    waitCondition: "networkidle0",
    context: {
      description: "a image created with gatsby-plugin-open-graph-images",
    },
  });
};
