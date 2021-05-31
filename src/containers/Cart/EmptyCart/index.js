import React from "react";
import Link from "next/link";

import * as S from "./styled";

const EmptyCart = () => (
  <S.WrapperEmptyCart>
    <h1>CARRINHO VAZIO</h1>
    <S.Image src="/images/cart/cart-empty.png" alt="carrinho vazio" />
    <Link href="/games/1" as="/games/1" passHref>
      <a>Voltar para as compras</a>
    </Link>
  </S.WrapperEmptyCart>
);

export default EmptyCart;
