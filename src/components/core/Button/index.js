import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Button = ({ text, icon, style, onClick }) => (
  <S.Button onClick={onClick} style={style} type="button">
    {icon && <S.IconContainer>{icon}</S.IconContainer>}
    {text}
  </S.Button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.element,
};

Button.defaultProps = {
  onClick: () => {},
  text: "",
  style: {},
  icon: null,

};

export default Button;
