import React, { memo } from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import * as S from "./styled";

const Menu = ({ menu }) => (
  <S.Container>
    {menu?.map(({ name, link }, index) => (
      <Link key={index} href={link}>
        <S.WrapperMenu>
          <span>{name}</span>
          <S.SelectLink />
        </S.WrapperMenu>
      </Link>
    ))}
  </S.Container>
);

Menu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    }),
  ).isRequired,
};

export default memo(Menu);
