// Import lit-html-server to render templates
const { html, renderToString } = require("@popeindustries/lit-html-server");

// Use unsafeHTML for rendering the HTML contents of a layout
const {
  unsafeHTML,
} = require("@popeindustries/lit-html-server/directives/unsafe-html.js");

// Import path for building pageFullUrl
const urlJoin = require("url-join");

// Export class for layout rendering
module.exports = class {
  // Set layout data defaults
  async data() {
    return {
      description:
        "Jordan Thornquest maps his mindstate with theatrical relish & a form of punk-informed power pop that's both candidly introspective and fearlessly extroverted.",
      eleventyComputed: {
        pageFullUrl: (data) => urlJoin(data.constants.siteUrl, data.page.url),
        socialImage: (data) => data.constants.socialImage,
      },
      ogType: "website",
    };
  }

  // Check current page url for page title
  async titleBuilder(url, title) {
    if (url == "/") {
      return "Jordan Thornquest";
    } else {
      return `${title} | Jordan Thornquest`;
    }
  }

  // Render the page
  async render({
    content,
    description,
    ogType,
    page,
    pageFullUrl,
    socialImage,
    title,
  }) {
    // Get page url
    const pagePath = page.url;

    // Get page title
    const pageTitle = await this.titleBuilder(pagePath, title);

    // Lit-HTML output
    const layoutTemplate = html`
      <!DOCTYPE html>
      <html class="no-js text-gray-900 dark:text-gray-100" lang="en">
        <head>
          <!-- Start with these -->
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <!-- The basics -->
          <title>${pageTitle}</title>
          <meta name="description" content="${description}" />
          <link rel="canonical" href="${pageFullUrl}" />

          <!-- Facebook Open Graph -->
          <meta property="og:title" content="${pageTitle}" />
          <meta property="og:description" content="${description}" />
          <meta property="og:url" content="${pageFullUrl}" />
          <meta property="og:image" content="${socialImage}" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="${ogType}" />

          <!-- Twitter Open Graph -->
          <meta name="twitter:url" content="${pageFullUrl}" />
          <meta name="twitter:title" content="${pageTitle}" />
          <meta name="twitter:description" content="${description}" />
          <meta name="twitter:image" content="${socialImage}" />
          <meta name="twitter:card" content="summary_large_image" />

          <!-- Icons -->
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/site.webmanifest" />
          <meta
            name="msapplication-config"
            content="/static/browserconfig.xml"
          />
          <meta name="theme-color" content="#F75E3C" />

          <!-- RSS -->
          <link
            type="application/atom+xml"
            rel="alternate"
            href="/feed.xml"
            title="Jordan Thornquest"
          />

          <!-- CSS -->
          <link href="/styles/styles.css" rel="stylesheet" />

          <!-- Check if JS is available -->
          <script type="module">
            document.documentElement.classList.remove("no-js");
            document.documentElement.classList.add("js");
          </script>
        </head>

        <!-- Site content -->
        <body class="bg-gray-50 dark:bg-gray-900">
          ${unsafeHTML(content)}
        </body>
      </html>
    `;

    // Render Lit-HTML content to string
    const renderedLayout = await renderToString(layoutTemplate);

    // Return rendered layout
    return renderedLayout;
  }
};
