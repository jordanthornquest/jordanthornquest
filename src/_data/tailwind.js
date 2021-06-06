// Get Tailwind config
const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("../../tailwind.config.js");

// Convert breakpoint values to numbers
const breakpointBuilder = async function (breakpoints) {
  try {
    // Create new object for converted breakpoints
    const newBreakpoints = {};

    // Convert the breakpoints to numbers without px values
    for (let b in breakpoints) {
      const value = breakpoints[b];
      const newValue = value.replace("px", "");
      const newNumber = Number(newValue);
      newBreakpoints[b] = newNumber;
    }

    // Return new breakpoints
    return newBreakpoints;
  } catch (e) {
    console.error(e);
  }
};

// Build Tailwind data from config
const tailwindBuilder = async function (configFile) {
  try {
    // use the Tailwind config to get elements
    const tailwindData = resolveConfig(configFile);

    // Return fullConfig
    return tailwindData;
  } catch (e) {
    console.error(e);
  }
};

// Export data for use
module.exports = async function () {
  try {
    // Get Tailwind data
    const tailwindData = await tailwindBuilder(tailwindConfig);

    // Get breakpoints
    const breakpoints = await breakpointBuilder(tailwindData.theme.screens);

    // Return data
    return {
      breakpoints,
    };
  } catch (e) {
    console.error(e);
  }
};
