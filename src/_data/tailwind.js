// Get Tailwind config
const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("../../tailwind.config.js");

// Build Tailwind data from config
const tailwindBuilder = async function (configFile) {
  // use the Tailwind config to get elements
  const tailwindData = resolveConfig(configFile);

  // Return fullConfig
  return tailwindData;
};

// Build breakpoints values without 'px' appended
const breakpointBuilder = async function (breakpoints) {
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
};

// Export data for use
module.exports = async function () {
  // Get Tailwind data
  const tailwindData = await tailwindBuilder(tailwindConfig);

  // Get breakpoints
  const breakpoints = await breakpointBuilder(tailwindData.theme.screens);
  // Return data
  return {
    breakpoints,
  };
};
