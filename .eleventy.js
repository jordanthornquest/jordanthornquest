// html-minifier for HTML minifying
const htmlmin = require("html-minifier");

// Export configuration
module.exports = function (eleventyConfig) {
  // We will use the .eleventyignore instead
  eleventyConfig.setUseGitIgnore(false);

  // Copy static files to output
  eleventyConfig.addPassthroughCopy({ "./src/_static/": "./static/" });

  // Copy compiled css from cache
  eleventyConfig.addPassthroughCopy({
    "./.cache/compiled.css": "./css/styles.css",
  });

  // Minify HTML on build
  eleventyConfig.addTransform("htmlmin", async function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  // Watch compiled css and trigger a rebuild when changed
  eleventyConfig.addWatchTarget("./.cache/compiled.css");

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
