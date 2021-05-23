import React from "react";
import Form from "components/core/Form";
import PropTypes from "prop-types";



import * as S from "./styled";

const SignUp = ({ formSignUp }) => (
  <S.WrapperSignUp>
    <S.FormSignUp>
    <S.WrapperTitle>
        <S.Line />
        <h3>{formSignUp.title}</h3>
      </S.WrapperTitle>
      <Form
        formData={formSignUp.form}
        buttonData={formSignUp.button}
        haveAccount={formSignUp.haveAccount}
      />
    </S.FormSignUp>
  </S.WrapperSignUp>
);

SignUp.propTypes = {
  formSignUp: PropTypes.shape({
    title: PropTypes.string,
    form: PropTypes.arrayOf(
      PropTypes.shape({
        field: PropTypes.string,
      }),
    ),
    button: PropTypes.shape({
      text: PropTypes.string,
    }),
    haveAccount: PropTypes.shape({
      text: PropTypes.string,
      textLink: PropTypes.string,
    }),
  }).isRequired,
};

export default SignUp;
