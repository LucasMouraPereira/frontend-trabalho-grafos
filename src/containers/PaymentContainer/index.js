import React from "react";
import Link from "next/link";
import FinallyIcon from "utils/static/svg/finally.svg";
import { HOME } from "utils/constants/urls";

import * as S from "./styled";

const PaymentContainer = () => (
  <S.WrapperPayment>
    <h4>Recebemos seu pedido</h4>
    <S.WrapperIcon>
      <div />
      <FinallyIcon />
      <div />
    </S.WrapperIcon>
    <p>
      Sua chave será enviada por email assim que confirmarmos seu pagamento.
    </p>
    <Link href={`${HOME}/1`} as={`${HOME}/1`} passHref>
      <S.Redirect>Voltar para as compras</S.Redirect>
    </Link>
  </S.WrapperPayment>
);

export default PaymentContainer;
