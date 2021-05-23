// Use ESBuild to bundle and minify scripts
const esbuild = require("esbuild");

// Use path for creating entryPath
const path = require("path");

// Export class with configuration for processing
module.exports = class {
  async data() {
    return {
      eleventyComputed: {
        entryPath: (data) =>
          path.join(__dirname, `/${data.assets.jsEntryFile}`),
      },
      eleventyExcludeFromCollections: true,
      // This is where the JavaScript output will go
      permalink: (data) => `/javascript/scripts.${data.assets.hashString}.js`,
    };
  }

  // Compile and bundle scripts from entryPath
  // We won't write it to the disk, instead keeping as a buffer
  async compile(entryPath) {
    const results = await esbuild.build({
      bundle: true,
      entryPoints: [entryPath],
      outfile: "out.js",
      write: false,
    });

    // We return a single file, so get it from results array
    const resultFile = results.outputFiles[0];
    // Return the outputFile's content as a string
    const contents = resultFile.text;
    return contents;
  }

  // Minify output on production
  async minify(content) {
    if (process.env.NODE_ENV === "production") {
      const minified = await esbuild.transform(content, {
        minify: true,
      });

      const code = minified.code;
      return code;
    } else {
      return content;
    }
  }

  // Process and return the result
  async render({ entryPath }) {
    const output = await this.compile(entryPath);
    const result = await this.minify(output);
    return result;
  }
};
