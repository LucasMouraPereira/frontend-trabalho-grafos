const Routes = require("next-routes");

const { DETAILS, DETAILS_SLUG, HOME, HOME_SLUG, CART, PAYMENT } = require("../utils/constants/urls");

module.exports = Routes()
  // Home
  .add({ name: "Home", pattern: `${HOME}${HOME_SLUG}`, page: "Home" })
  // Details
  .add({ name: "Details", pattern: `${DETAILS}${DETAILS_SLUG}`, page: "Details" })
  // Cart 
  .add({ name: "Cart", pattern: CART, page: "Cart" })
  //  Payment
  .add({ name: "Payment", pattern: `${CART}${PAYMENT}`, page: "Payment" })
