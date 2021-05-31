import React, { useContext } from "react";
import { CartContext } from "contexts/CartContext";

import EmptyCart from "./EmptyCart";
import ProductsInCart from "./ProductInCart";

// import * as S from "./styled";

const Cart = () => {
  const { cartsInfo } = useContext(CartContext);
  // console.log(cartsInfo);
  return <>{!cartsInfo ? <EmptyCart /> : <ProductsInCart />}</>;
};

export default Cart;
