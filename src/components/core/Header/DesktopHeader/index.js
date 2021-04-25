import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import * as S from "./styled";

const DesktopHeader = ({ menu }) => {
  const [isActive, setIsActive] = useState("Home");
  const selectedLink = (name) => {
    if (name === "Home") {
      setIsActive("Store")
    }
    setIsActive("Home")
  }
  return (
    <S.Container>
      {menu?.map(({ name, link }) => (
        <S.WrapperMenu onClick={() => selectedLink(isActive)}>
          <Link href={link} as={link} passHref>
            <span>{name}</span>
          </Link>
          <S.SelectLink isActive={isActive} />
        </S.WrapperMenu>
      ))}
    </S.Container>
  )
};

DesktopHeader.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DesktopHeader;