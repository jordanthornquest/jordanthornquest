// Import lit-html-server to render templates
const { html } = require("@popeindustries/lit-html-server");

// Import imageHelpers
const {
  mediaBuilder,
  sizesBuilder,
  srcsetBuilder,
} = require("../../helpers/imageHelpers.js");

// Create the <img> tag for the default image
const defaultImageTagBuilder = async function (breakpoints, defaultImage) {
  // Set default values for defaultImage
  const { alt, height, src, sizes, width } = defaultImage;

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
};

// Create the <source> tag for each responsive option
const sourceTagsBuilder = async function (breakpoints, sources) {
  // Store all the source tags in an array
  const sourceTags = [];

  // Loop and create additional <source> tags
  for await (let s of sources) {
    // Set default values for source
    let { breakpoint, sizes, src } = s;

    // Get bpVal for source's responsive breakpoint
    let bpVal = breakpoints[breakpoint];

    // Get srcset, media, and sizes attributes for source
    let [sourceMedia, sourceSizes, sourceSrcset] = await Promise.all([
      mediaBuilder(bpVal),
      sizesBuilder(breakpoints, sizes),
      srcsetBuilder(breakpoints, sizes, src),
    ]);

    // Create source tag for item
    let sourceTag = html`
      <source
        media="${sourceMedia}"
        sizes="${sourceSizes}"
        srcset="${sourceSrcset}"
      />
    `;

    // Push source tag to array
    sourceTags.push(sourceTag);
  }

  return sourceTags;
};

module.exports = async function (breakpoints, picture) {
  try {
    // Create default image tag and responsive image versions
    const [defaultImageTag, sourceTags] = await Promise.all([
      defaultImageTagBuilder(breakpoints, picture.default),
      sourceTagsBuilder(breakpoints, picture.sources),
    ]);

    // Return complete <picture> tag
    return html`<picture>${sourceTags}${defaultImageTag}</picture>`;
  } catch (e) {
    console.error(e);
  }
};
