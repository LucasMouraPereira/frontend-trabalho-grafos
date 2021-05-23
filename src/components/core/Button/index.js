import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Button = ({ type, text, icon, style, onClick }) => (
  <S.Button onClick={onClick} style={style} type={type}>
    {icon && <S.IconContainer>{icon}</S.IconContainer>}
    {text}
  </S.Button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.object,
  icon: PropTypes.element,
};

Button.defaultProps = {
  onClick: () => {},
  type: "button",
  text: "",
  style: {},
  icon: null,

};

export default Button;
