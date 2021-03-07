module.exports = function (eleventyConfig) {
  // Copy static files to output
  eleventyConfig.addPassthroughCopy({ "static/": "/" });

  // Return configuration object
  return {
    dir: {
      data: "data",
      includes: "includes",
      input: "views",
      layouts: "layouts",
      output: "dist",
    },
  };
};
