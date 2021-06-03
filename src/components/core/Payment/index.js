import React, { useContext } from "react";
import { Formik } from "formik";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import valid from "card-validator";
import Button from "components/core/Button";
import { OrderContext } from "contexts/OrderContext";
import { CART, PAYMENT} from "utils/constants/urls";

import * as S from "./styled";

const Payment = () => {
  const router = useRouter();
  const { handleSuccessPayment } = useContext(OrderContext);
  const InitialState = {
    creditCard: "",
  };

  return (
    <S.ContentPayment>
      <S.WrapperPayment>
        <h3>
          Pagamento
          <div />
        </h3>
        <Formik
          initialValues={InitialState}
          validate={(values) => {
            const errors = {};
            if (!values.creditCard) {
              errors.creditCard = "Required";
            } else if (valid.number(values).isValid) {
              errors.creditCard = "Credit Card number is invalid";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            handleSuccessPayment(values.creditCard);
            setTimeout(() => {
              Cookies.remove("CART_TOTAL");
              Cookies.remove("CART_TO_PRODUCTS");
              Cookies.remove("LENGTH_CARD");
              router.push(`${CART}${PAYMENT}`);
              setSubmitting(false);
            }, 500);
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <S.Input>
                <S.Label htmlFor="creditCard">Cartão de crédito</S.Label>
                <input
                  type="text"
                  name="creditCard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.creditCard}
                  placeholder="número"
                />
              </S.Input>
              {errors.creditCard && touched.creditCard}
              <S.WrapperButton>
                <Button type="submit" disabled={isSubmitting} text="Comprar" />
              </S.WrapperButton>
            </form>
          )}
        </Formik>
      </S.WrapperPayment>
    </S.ContentPayment>
  );
};

export default Payment;
