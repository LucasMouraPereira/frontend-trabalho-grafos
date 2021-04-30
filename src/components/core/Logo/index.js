import React, { memo } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import * as S from "./styled";

const Logo = ({ icon, title, color, style }) => (
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

Logo.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    style: PropTypes.object
};

Logo.defaultProps ={
  style: {},
};

export default memo(Logo);
