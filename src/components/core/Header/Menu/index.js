import React, { memo, useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import * as S from "./styled";

const Menu = ({ menu, url }) => {
  const path = url.toString()
  const prefix = path.split("/");
  const initialState = prefix[3] === "" ? "Home" : "Store"; 
  const [isActive, setIsActive] = useState(initialState);
  return (
    <S.Container>
      {menu?.map(({ name, link }, index) => (
        <Link href={link}>
          <S.WrapperMenu
            key={index}
            onClick={() => {
              setIsActive(name);
            }}>
            <span>{name}</span>
            <S.SelectLink isActive={isActive === name} />
          </S.WrapperMenu>
        </Link>
      ))}
    </S.Container>
  )
};

Menu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    }),
  ).isRequired,
  url: PropTypes.string.isRequired,
};

export default memo(Menu);