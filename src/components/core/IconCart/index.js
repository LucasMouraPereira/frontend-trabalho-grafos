import React from "react";
import PropTypes from "prop-types";
import IconShoppingCart from "utils/static/svg/shoppingcart.svg";

import * as S from "./styled";

const IconCart = ({ lengthProductsInCart }) => (
  <S.WrapperIcon>
    <S.ProductsInCart>{lengthProductsInCart || 0}</S.ProductsInCart>
    <IconShoppingCart />
  </S.WrapperIcon>
);

IconCart.propTypes = {
  lengthProductsInCart: PropTypes.number.isRequired
};

export default IconCart;