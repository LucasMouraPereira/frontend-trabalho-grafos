import React from "react";
import PropTypes from "prop-types";

import Link from "next/link";
import { HOME } from "utils/constants/urls";
import Router from "next/router";

import Logo from "components/core/Logo";
import DesktopHeader from "./DesktopHeader";
import Search from "./Search";


import * as S from "./styled";

const Header = ({ headerSection }) => {
  const handleSubmitInput = (event, params) => {
    event.preventDefault();
    Router.push(`/busca?q=${params}`);
  };
  return (
    <S.HeaderContainer>
      <S.WrapperMenu>
        <Link href={HOME} as={HOME} passHref>
          <Logo color="#FAFAFA" icon={headerSection.icon} title={headerSection.title} />
        </Link>
        <DesktopHeader menu={headerSection.pages} />
        <S.SearchBar>
          <Search handleSubmit={handleSubmitInput} />
        </S.SearchBar>
      </S.WrapperMenu>
    </S.HeaderContainer>
  )
};

Header.propTypes = {
  headerSection: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    pages: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        link: PropTypes.string,
      }),
    ),
    cart: PropTypes.shape({
      initialState: PropTypes.number,
    }),
    button: PropTypes.shape({
      name: PropTypes.string,
      state: PropTypes.bool,
    }),
  }).isRequired,
};

export default Header;
