const eleventyVue = require("@11ty/eleventy-plugin-vue");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(eleventyVue);
  eleventyConfig.addPassthroughCopy("src/images");
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
