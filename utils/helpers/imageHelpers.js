// Build out srcset string based on responsive size keys
const srcsetBuilder = async function (breakpoints, sizes, src) {
  // Create a srcset array to store srcset values
  const srcsetArray = [];

  // Create a srcset string for each breakpoint value
  // Add each result to srcset array
  for await (let s of sizes) {
    let bpVal;

    if (typeof s === 'string') {
      // Get breakpoint value from Tailwind breakpoints
      // Size must be a string with the breakpoint key
      bpVal = breakpoints[s];
    } else if (typeof s === 'number') {
      // bpVal is simply a number value
      bpVal = s;
    }

    // Create srcset value from breakpoint value and src
    let srcsetValue = `${src}?nf_resize=fit&w=${bpVal} ${bpVal}w`;

    // Push value to srcset array
    srcsetArray.push(srcsetValue);
  }

  // Convert all values in srcset array to a single srcset string
  const srcsetString = srcsetArray.join(", ");

  // Return srcset string
  return srcsetString;
};

// Build out the media attribute for <source> tags
const mediaBuilder = async function (bpVal) {
  return `(min-width: ${bpVal}px)`;
};

// Build out the sizes attribute for <source> tags
const sizesBuilder = async function (breakpoints, sizes) {
  // Create a sizes array to store srcset values
  const sizesArray = [];

  // Create a srcset string for each breakpoint value
  // Add each result to srcset array
  for await (let s of sizes) {
    let bpVal;

    if (typeof s === 'string') {
      // Get breakpoint value from Tailwind breakpoints
      // Size must be a string with the breakpoint key
      bpVal = breakpoints[s];
    } else if (typeof s === 'number') {
      // bpVal is simply a number value
      bpVal = s;
    }

    // Create srcset value from breakpoint value and src
    let sizeValue = `(min-width: ${bpVal}px) ${bpVal}px`;

    // Push value to srcset array
    sizesArray.push(sizeValue);
  }

  // Reverse the sizes array for proper loading
  const reversedSizesArray = sizesArray.reverse();

  // Add a default value
  const defaultWidth = "100vw";
  reversedSizesArray.push(defaultWidth);

  // Convert all values in srcset array to a single srcset string
  const sizesString = reversedSizesArray.join(", ");

  // Return srcset string
  return sizesString;
};

module.exports = {
  mediaBuilder,
  sizesBuilder,
  srcsetBuilder,
};
