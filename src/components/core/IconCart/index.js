import React from "react";
import IconShoppingCart from "utils/static/svg/shoppingcart.svg";

import * as S from "./styled";

const IconCart = () => (
  <S.WrapperIcon>
    <S.ProductsInCart>0</S.ProductsInCart>
    <IconShoppingCart />
  </S.WrapperIcon>
);

export default IconCart;