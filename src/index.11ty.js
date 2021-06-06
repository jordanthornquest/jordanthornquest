// Import lit-html-server to render templates
const { html } = require("@popeindustries/lit-html-server");

// Create page data and render class
module.exports = class {
  // Assign data for page
  async data() {
    return {
      landingPicture: {
        css: "place-self-center lg:col-span-2 lg:align-self-center lg:justify-self-end",
        default: {
          alt: "A photo of me, leaning forward, staring at the camera in a leather jacket.",
          height: 250,
          css: "w-full max-w-sm rounded-full lg:max-w-full lg:rounded-none",
          src: "/_static/images/who-is-he-square.png",
          sizes: [320, "sm"],
          width: 250
        },
        sources: [
          {
            breakpoint: "lg",
            sizes: ["lg", "xl"],
            src: "/_static/images/who-is-he-16-9.png",
          },
        ],
      },
      layout: "base.11ty.js",
      title: "Home",
    };
  }

  // Render page contents
  async render({ landingPicture, tailwind }) {
    return html`${await this.homeHero(tailwind.breakpoints, landingPicture)}`;
  }
};
