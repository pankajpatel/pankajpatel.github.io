const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/m.fombont/pankaj/pankajpatel.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Users/m.fombont/pankaj/pankajpatel.github.io/src/pages/404.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/m.fombont/pankaj/pankajpatel.github.io/src/pages/index.tsx")))
}

