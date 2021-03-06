module.exports = function (eleventyConfig) {
  // Copy static files to output
  eleventyConfig.addPassthroughCopy("static/");

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
