// Import lit-html-server to render templates
const { html, renderToBuffer } = require("@popeindustries/lit-html-server");
const {
  unsafeHTML,
} = require("@popeindustries/lit-html-server/directives/unsafe-html.js");

// Check current page url for page title
const titleBuilder = async function (data) {
  if (data.page.url == "/") {
    return "Jordan Thornquest";
  } else {
    return `${data.title} | Jordan Thornquest`;
  }
};

// Render the layout with a function
module.exports = async function (data) {
  // The HTML layout
  const baseLayout = html`
    <!DOCTYPE html>
    <html class="text-gray-900 dark:text-gray-100" lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>${titleBuilder(data)}</title>
        <meta property="og:title" content="${titleBuilder(data)}" />
        <meta name="description" content="${data.description}" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="${data.pageFullUrl}" />
        <meta property="og:image" content="${data.socialImage}" />

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
        <link
          rel="mask-icon"
          href="/static/icons/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-config" content="/static/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#F75E3C" />
        <meta name="theme-color" content="#F75E3C" />

        <!-- CSS -->
        <link href="/css/styles.css" rel="stylesheet" />
      </head>

      <body class="bg-gray-50 dark:bg-gray-900">
        ${data.content}
      </body>
    </html>
  `;

  return renderToBuffer(baseLayout);
};
