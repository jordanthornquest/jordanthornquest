module.exports = function (eleventyConfig) {
  // We will use the .eleventyignore instead
  eleventyConfig.setUseGitIgnore(false);

  // Copy static files to output
  eleventyConfig.addPassthroughCopy({ "./src/_static/": "./static/" });

  // Copy compiled css from cache
  eleventyConfig.addPassthroughCopy({
    "./.cache/compiled.css": "./css/styles.css",
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
