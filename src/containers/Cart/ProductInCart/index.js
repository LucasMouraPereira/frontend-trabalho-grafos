import React, { useContext } from "react";
import { CartContext } from "contexts/CartContext";

import Button from "components/core/Button";

import * as S from "./styled";

const ProductInCart = () => {
  const { cartsInfo, removeFromCart, total } = useContext(CartContext);
  return (
    <S.ContainerProducts>
      <h2>
        <div />
        Meu carrinho
      </h2>
      <div>
        {cartsInfo.map((cart) => (
          <S.WrapperCardBuy key={cart.id}>
            <S.WrapperBuy>
              <S.WrapperBuyProduct>
                <S.WrapperImage>
                  <img src={cart.image} alt={cart.title} />
                </S.WrapperImage>
                <S.WrapperText>
                  <h3>{cart.title}</h3>
                  <S.ContentSpan>
                    <span>{`R$ ${cart.price.replace(".", ",")}`}</span>
                  </S.ContentSpan>
                </S.WrapperText>
              </S.WrapperBuyProduct>
              <Button type="submit" text="remover item" onClick={() => removeFromCart(cart)} />
            </S.WrapperBuy>
            <hr />
          </S.WrapperCardBuy>
        ))}
      </div>
      <S.WrapperTotal>
        <h3>Total:</h3>
        <span>{`R$ ${total.toFixed(2).replace(".", ",")}`}</span>
      </S.WrapperTotal>
    </S.ContainerProducts>
  );
};

export default ProductInCart;
