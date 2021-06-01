import React, { useContext, useState, useEffect} from "react";
import { CartContext } from "contexts/CartContext";
import { OrderProvider } from "contexts/OrderContext";

import Payment from "components/core/Payment";
import EmptyCart from "./EmptyCart";
import ProductsInCart from "./ProductInCart";

import * as S from "./styled";

const Cart = () => {
  const { cartsInfo } = useContext(CartContext);
  const [isEmpty, setIsEmpty] = useState(true);
  useEffect(() => {
    if(cartsInfo.length > 0) {
      setIsEmpty(false);
      return null;
    }
    setIsEmpty(true);
    return null;
  },[cartsInfo])
  return (
    <S.WrapperEmptyCart isEmpty={isEmpty}>
      {cartsInfo.length > 0 ? (
        <OrderProvider>
          <ProductsInCart />
          <Payment />
        </OrderProvider>
      ) : (
        <EmptyCart />
      )}
    </S.WrapperEmptyCart>
  );
};

export default Cart;
