import React from "react";
import Link from "next/link";
import FinallyIcon from "utils/static/svg/finally.svg";
import { HOME } from "utils/constants/urls";

import * as S from "./styled";

const PaymentContainer = () => (
  <S.WrapperPayment>
    <h4>Your purchase was successful</h4>
    <S.WrapperIcon>
      <div />
      <FinallyIcon />
      <div />
    </S.WrapperIcon>
    <p>
      Wait for your payment details by email. Your game is now available for download on the Story
      Games platform. Enjoy!
    </p>
    <Link href={`${HOME}/1`} as={`${HOME}/1`} passHref>
      <S.Redirect>Go back shopping</S.Redirect>
    </Link>
  </S.WrapperPayment>
);

export default PaymentContainer;
