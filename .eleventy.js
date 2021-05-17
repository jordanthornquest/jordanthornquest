// RSS plugin for generating feeds from data
const pluginRss = require("@11ty/eleventy-plugin-rss");

// Import components
// const components = require("./src/_components");

// Import transforms
const transforms = require("./src/_utils/transforms");

// Export configuration
module.exports = function (eleventyConfig) {
  // Copy static files to output
  eleventyConfig.addPassthroughCopy({ "./src/_static/": "./static/" });

  // Add RSS plugin
  eleventyConfig.addPlugin(pluginRss);

  // Import components
  // Object.keys(components).forEach((componentName) => {
  //   eleventyConfig.addShortcode(componentName, components[componentName]);
  // });

  // Import transforms
  Object.keys(transforms).forEach((transformName) => {
    eleventyConfig.addTransform(transformName, transforms[transformName]);
  });

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
