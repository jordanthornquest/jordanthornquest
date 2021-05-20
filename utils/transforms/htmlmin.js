// html-minifier for HTML minifying
const htmlmin = require("html-minifier");

// Export transform to Eleventy
module.exports = async function (content, outputPath) {
  // Minify HTML on build
  // Don't minify on development, since it's slow
  if (process.env.NODE_ENV === "production") {
    if (
      outputPath &&
      (outputPath.endsWith(".html") || outputPath.endsWith(".xml"))
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
  }

  // Return content
  return content;
};
