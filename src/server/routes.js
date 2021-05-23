const Routes = require("next-routes");

const { HOME, DETAILS, DETAILS_SLUG } = require("../utils/constants/urls");

module.exports = Routes()
  // Home
  .add({ name: "Home", pattern: HOME, page: "Home" })
  // Details
  .add({ name: "Details", pattern: `${DETAILS}${DETAILS_SLUG}`, page: "Details" })