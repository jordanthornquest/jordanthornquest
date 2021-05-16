// RSS plugin for generating feeds from data
const pluginRss = require("@11ty/eleventy-plugin-rss");

// html-minifier for HTML minifying
const htmlmin = require("html-minifier");

// Export configuration
module.exports = function (eleventyConfig) {
  // Copy static files to output
  eleventyConfig.addPassthroughCopy({ "./src/_static/": "./static/" });

  // Add RSS plugin
  eleventyConfig.addPlugin(pluginRss);

  // Minify HTML on build
  // Don't minify on development, since it's slow
  if (process.env.NODE_ENV === "production") {
    eleventyConfig.addTransform(
      "htmlmin",
      async function (content, outputPath) {
        if (outputPath && outputPath.endsWith(".html")) {
          let minified = htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true,
          });
          return minified;
        }

        return content;
      }
    );
  }

  // We will use the .eleventyignore instead
  eleventyConfig.setUseGitIgnore(false);

  // Return configuration object
  return {
    dir: {
      data: "./_data",
      includes: "./_includes",
      input: "./src",
      layouts: "./_layouts",
      output: "./dist",
    },
  };
};
