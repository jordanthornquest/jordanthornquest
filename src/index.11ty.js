// Import lit-html-server to render templates
const { html } = require("@popeindustries/lit-html-server");

// Create page data and render class
module.exports = class {
  // Assign data for page
  async data() {
    return {
      landingPicture: {
        default: {
          alt: "A photo of me, leaning forward, staring at the camera in a leather jacket.",
          height: 500,
          src: "/_static/images/who-is-he-square.jpeg",
          width: 500,
        },
        sources: [
          {
            breakpoint: "md",
            sizes: ["md", "lg", "xl"],
            src: "/_static/images/who-is-he-16-9.jpeg",
          },
        ],
      },
      landingImage: {
        alt: "A photo of me, leaning forward, staring at the camera in a leather jacket.",
        height: 500,
        sizes: ["sm", "md", "lg", "xl"],
        src: "/_static/images/who-is-he-square.jpeg",
        width: 500,
      },
      layout: "base.11ty.js",
      title: "Home",
    };
  }

  // Render page contents
  async render({ landingImage, landingPicture, tailwind }) {
    // Return the template
    return html`
      <main>
        <section>
          ${await this.picture(tailwind.breakpoints, landingPicture)}
          ${await this.image(tailwind.breakpoints, landingImage)}
        </section>
      </main>
    `;
  }
};
