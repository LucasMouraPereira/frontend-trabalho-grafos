import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import * as S from "./styled";

const Footer = ({ icon, title, color, style }) => (
  <S.WrapperLogo color={color} style={style}>
    <Image 
      src={icon} 
      alt="Logo" 
      width={38} 
      height={32} 
    />
    <h1>{title}</h1>
  </S.WrapperLogo>
);

Footer.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    style: PropTypes.object
};

Footer.defaultProps ={
  style: {},
};

export default Footer;
