import React, { useContext } from "react";
import { Formik } from "formik";
import valid from "card-validator";
import Button from "components/core/Button";
import { OrderContext } from "contexts/OrderContext";

import * as S from "./styled";

const Payment = () => {
  const { handleSuccessPayment } = useContext(OrderContext);
  const InitialState = {
    creditCard: "",
  };

  return (
    <S.ContentPayment>
      <S.WrapperPayment>
        <h3>
          Payment
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
            setTimeout(() => {
              handleSuccessPayment(values.creditCard);
              setSubmitting(false);
            }, 500);
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <S.Input>
                <S.Label htmlFor="creditCard">Credit Card</S.Label>
                <input
                  type="text"
                  name="creditCard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.creditCard}
                  placeholder="credit card number"
                />
              </S.Input>
              {errors.creditCard && touched.creditCard}
              <S.WrapperButton>
                <Button type="submit" disabled={isSubmitting} text="Buy now" />
              </S.WrapperButton>
            </form>
          )}
        </Formik>
      </S.WrapperPayment>
    </S.ContentPayment>
  );
};

export default Payment;
