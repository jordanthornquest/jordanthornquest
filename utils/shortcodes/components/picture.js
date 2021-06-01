// Import lit-html-server to render templates
const { html } = require("@popeindustries/lit-html-server");

// Import imageHelpers
const { mediaBuilder, sizesBuilder, srcsetBuilder } = require("./imageHelpers");

// Create the <img> tag for the default image
const defaultImageTagBuilder = async function (defaultImage) {
  // Set default values for defaultImage
  const { alt, height, src, width } = defaultImage;

  // If we have all the required attributes, build the image tag
  if (alt && height && src && width) {
    return html`
      <img
        alt="${alt}"
        decoding="async"
        height="${height}"
        loading="lazy"
        src="${src}"
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
const sourceTagsBuilder = async function (sources, breakpoints) {
  // Loop and create additional <source> tags
  const responsiveTags = [];

  for await (let s of sources) {
    // Set default values for responsiveOptions item
    let { breakpoint, hiRes, src } = s;

    // Get breakpoint value from Tailwind breakpoints with image's breakpoint key
    let bpVal = breakpoints[breakpoint];

    // Get srcset, media, and sizes attributes for source
    let [media, sizes, srcset] = await Promise.all([
      mediaBuilder(bpVal),
      sizesBuilder(bpVal),
      srcsetBuilder(bpVal, hiRes, src),
    ]);

    // Create source tag for item
    let itemSourceTag = html`
      <source media="${media}" sizes="${sizes}" srcset="${srcset}" />
    `;

    responsiveTags.push(itemSourceTag);
  }

  return responsiveTags;
};

module.exports = async function (defaultImage, sources = [], breakpoints) {
  // Create default image tag and responsive image versions
  const [defaultImageTag, sourceTags] = await Promise.all([
    defaultImageTagBuilder(defaultImage),
    sourceTagsBuilder(sources, breakpoints),
  ]);

  // Return complete <picture> tag
  return html`<picture>${sourceTags}${defaultImageTag}</picture>`;
};
