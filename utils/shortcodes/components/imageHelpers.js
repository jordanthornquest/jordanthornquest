// Import lit-html-server to render templates
const { html } = require("@popeindustries/lit-html-server");

// Build out srcset attribute values based on responsive breakpoints
const srcsetBuilder = async function (bpVal, hiRes = false, src) {
  // Define image srcset sizes array
  const srcsetArray = [];

  // Create srcset default size from Tailwind breakpoint value
  const srcsetDefault = `${src}?nf_resize=fit&w=${bpVal} ${bpVal}w`;

  // Push default image size
  srcsetArray.push(srcsetDefault);

  // Check if there's a hiRes version of image srcset
  if (hiRes) {
    // Hi-res value is twice the value of breakpoint
    const hiResVal = bpVal * 2;

    // Create string from hiRes value
    const hiResSrcset = `${src}?nf_resize=fit&w=${hiResVal} ${hiResVal}w`;

    // Push hiRes image size
    srcsetArray.push(hiResSrcset);
  }

  // Convert array to srcset string
  const srcsetString = srcsetArray.join(", ");

  // Return srcset string
  return srcsetString;
};

// Build out the media attribute for <source> tags
const mediaBuilder = async function (bpVal) {
  return `(min-width: ${bpVal}px)`;
};
// Build out the sizes attribute for <img> and <source> tags
const sizesBuilder = async function (bpVal) {
  return `(min-width: ${bpVal}px) ${bpVal}px, 100vw`;
};

module.exports = {
  mediaBuilder,
  sizesBuilder,
  srcsetBuilder,
};
