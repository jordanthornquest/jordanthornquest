// Plugins
const eleventyVue = require("@11ty/eleventy-plugin-vue");

module.exports = function (eleventyConfig) {
  // Add Eleventy Vue plugin, use defaults
  eleventyConfig.addPlugin(eleventyVue);

  // Return configuration object
  return {
    dir: {
      input: "views",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
