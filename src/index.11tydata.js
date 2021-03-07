// Libraries
const path = require("path");

// Export data
module.exports = {
  description:
    "Jordan Thornquest maps his mindstate with theatrical relish & a form of punk-informed power pop that's both candidly introspective and fearlessly extroverted.",
  layout: "base.html",
  socialImage:
    "https://res.cloudinary.com/deedobzcr/image/upload/q_auto,f_auto,w_1200/v1559763975/hurr.jpg",
  title: "Home",
  eleventyComputed: {
    pageFullUrl: (data) => path.join(data.constants.siteUrl, data.page.url),
  },
};
