module.exports = function (eleventyConfig) {
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
