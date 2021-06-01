// Import lit-html-server to render templates
const { html } = require("@popeindustries/lit-html-server");

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
const responsiveOptionsBuilder = async function (
  responsiveOptions,
  breakpoints
) {
  // Loop and create additional <source> tags
  const responsiveTags = [];

  for await (let r of responsiveOptions) {
    // Set default values for responsiveOptions item
    let { breakpoint, height, hiRes = false, src, width } = r;

    // Get srcset sizes for responsiveOptions item
    const responsiveValues = await responsiveValuesBuilder(
      src,
      breakpoint,
      breakpoints,
      hiRes
    );

    // Create source tag for item
    let itemSourceTag = html`
      <source
        height="${height}"
        media="(min-width: ${responsiveValues.breakpointValue}px)"
        srcset="${responsiveValues.srcset}"
        width="${width}"
      />
    `;

    responsiveTags.push(itemSourceTag);
  }

  return responsiveTags;
};

// Build out image sizes for <source> tag's srcset attribute
const responsiveValuesBuilder = async function (
  src,
  breakpoint,
  breakpoints,
  hiRes
) {
  // Define image srcset sizes array
  const srcsetArray = [];

  // Get breakpoint value from Tailwind breakpoints with image's breakpoint key
  const breakpointValue = breakpoints[breakpoint];

  // Create srcset image size from breakpoint value
  const srcsetSize = `${src}?nf_resize=fit&w=${breakpointValue} ${breakpointValue}w`;

  // Push image size
  srcsetArray.push(srcsetSize);

  // Check if there's a hiRes version of image
  if (hiRes) {
    // Hi-res value is twice the value of breakpoint
    const hiResValue = breakpointValue * 2;

    const hiResSrcset = `${src}?nf_resize=fit&w=${hiResValue} ${hiResValue}w`;

    // Push hi-res image size
    srcsetArray.push(hiResSrcset);
  }

  // Convert array to srcset string
  const srcset = srcsetArray.join(", ");

  // Create object with responsive values
  const responsiveValues = {
    breakpointValue: breakpointValue,
    srcset: srcset,
  };

  // Return srcset string
  return responsiveValues;
};

module.exports = async function (
  defaultImage,
  responsiveOptions = [],
  breakpoints
) {
  // Create default image tag and responsive image versions
  const [defaultImageTag, responsiveTags] = await Promise.all([
    defaultImageTagBuilder(defaultImage),
    responsiveOptionsBuilder(responsiveOptions, breakpoints),
  ]);

  // Return complete <picture> tag
  return html`<picture>${responsiveTags}${defaultImageTag}</picture>`;
};
