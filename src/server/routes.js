const Routes = require("next-routes");

const { HOME, STORE } = require("../utils/constants/urls");

module.exports = Routes()
  // Home
  .add({ name: "Home", pattern: HOME, page: "Home" })
  // Store
  .add({ name: "Store", pattern: STORE, page: "Store" })