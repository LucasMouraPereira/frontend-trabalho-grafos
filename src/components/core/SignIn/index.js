import React from "react";
import Form from "components/core/Form";
import PropTypes from "prop-types";

import * as S from "./styled";

const SignIn = ({ formSignIn }) => (
  <S.WrapperSignIn>
    <S.FormSignIn>
      <S.WrapperTitle>
        <S.Line />
        <h3>{formSignIn.title}</h3>
      </S.WrapperTitle>
      <Form
        title={formSignIn.title}
        formData={formSignIn.form}
        sendEmailLink={formSignIn.sendEmailLink}
        buttonData={formSignIn.button}
        haveAccount={formSignIn.haveAccount}
      />
    </S.FormSignIn>
  </S.WrapperSignIn>
);

SignIn.propTypes = {
  formSignIn: PropTypes.shape({
    title: PropTypes.string,
    form: PropTypes.arrayOf(
      PropTypes.shape({
        field: PropTypes.string,
      }),
    ),
    sendEmailLink: PropTypes.shape({
      text: PropTypes.string,
    }),
    button: PropTypes.shape({
      text: PropTypes.string,
    }),
    haveAccount: PropTypes.shape({
      text: PropTypes.string,
      textLink: PropTypes.string,
    }),
  }).isRequired,
};

export default SignIn;
