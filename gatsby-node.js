/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const config = require('./config');
const { createOpenGraphImage } = require("gatsby-plugin-open-graph-images");
const path = require(`path`);

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  const openGraphImage = createOpenGraphImage(createPage, {
    path: config.openGraph.featureImage.path,
    component: path.resolve(`src/pages/index.js`),
    size: {
      width: config.openGraph.featureImage.width,
      height: config.openGraph.featureImage.height,
    },
    waitCondition: "networkidle0",
    context: {
      description: "Still image of the homepage",
    },
  });
};
