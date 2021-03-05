// Libraries
const eleventyVue = require("@11ty/eleventy-plugin-vue");

// Export configuration
module.exports = (eleventyConfig) => {
  // Add eleventyVue plugin
  eleventyConfig.addPlugin(eleventyVue);

  // Add passthrough copy for image files
  eleventyConfig.addPassthroughCopy("src/images");

  // Add passthrough copy for web manifest
  eleventyConfig.addPassthroughCopy("src/manifest.webmanifest");

  // Return config object
  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      output: "dist",
    },
  };
};
