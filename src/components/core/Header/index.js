import React, { memo } from "react";
import PropTypes from "prop-types";
import { header } from "utils/data/header-mock.json";

import Link from "next/link";
import { HOME } from "utils/constants/urls";
// import Router from "next/router";

import Logo from "components/core/Logo";
import Menu from "./Menu";
// import Search from "./Search";


import * as S from "./styled";

const Header = ({ url }) => (
  <S.HeaderContainer>
    <Link href={HOME} as={HOME} passHref>
      <a>
        <Logo color="#FAFAFA" icon={header.icon} title={header.title} />
      </a>
    </Link>
    <Menu menu={header.pages} url={url} />
  </S.HeaderContainer>
  // <S.HeaderContainer>
  //   <S.WrapperMenu>
  //     <Link href={HOME} as={HOME} passHref>
  //       <Logo color="#FAFAFA" icon={header.icon} title={header.title} />
  //     </Link>
  //     <DesktopHeader menu={header.pages} />
  //   </S.WrapperMenu>
  //   <S.SearchBar>
  //     <Search handleSubmit={handleSubmitInput} />
  //   </S.SearchBar>
  // </S.HeaderContainer>
);

Header.propTypes = {
  url: PropTypes.string.isRequired,
};

export default memo(Header);
