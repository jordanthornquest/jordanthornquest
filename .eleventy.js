module.exports = function (eleventyConfig) {
  // Copy static files to output
  eleventyConfig.addPassthroughCopy({ "src/_static/": "/" });

  // Return configuration object
  return {
    dir: {
      data: "_data",
      includes: "_includes",
      input: "src",
      layouts: "_layouts",
      output: "dist",
    },
  };
};
