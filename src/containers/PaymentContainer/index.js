import React from "react";
import FinallyIcon from "utils/static/svg/finally.svg";

import * as S from "./styled";

const PaymentContainer = () => (
    <S.WrapperPayment>
      <h4>Your purchase was successful</h4>
      <div>
        <div/>
          <FinallyIcon />
        <div />
      </div>
      <p>Wait for your payment details by email. Your game is now available for download on the Story Games platform. Enjoy!</p>
    </S.WrapperPayment>
  );


export default PaymentContainer;