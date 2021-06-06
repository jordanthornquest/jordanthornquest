// Import lit-html-server to render templates
const { html } = require("@popeindustries/lit-html-server");

// Import imageHelpers
const { srcsetBuilder } = require("../../helpers/imageHelpers");

// Create the <img> tag
module.exports = async function (breakpoints, image) {
  try {
    // Set default values for image
    const { alt, height, src, sizes, width } = image;

    // Get srcsetString from values
    let srcset = await srcsetBuilder(breakpoints, sizes, src);

    // If we have all the required attributes, build the image tag
    if (alt && height && src && width) {
      return html`
        <img
          alt="${alt}"
          decoding="async"
          height="${height}"
          loading="lazy"
          src="${src}"
          srcset="${srcset}"
          width="${width}"
        />
      `;
      // If we're missing anything, throw an error
    } else {
      throw new Error(
        `Missing required attributes on defaultImage ${defaultImage}. Make sure to have alt, height, src, and width.`
      );
    }
  } catch (e) {
    console.error(e);
  }
};
