const React = require("react");
module.exports = {
  process() {
    return 'module.exports = () => React.createElement("div");';
  },
  getCacheKey() {
    // The output is always the same.
    return "svgTransform";
  },
};
