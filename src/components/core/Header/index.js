import React, { memo } from "react";
import { header } from "utils/data/header-mock.json";
import Link from "next/link";
import { HOME } from "utils/constants/urls";

import Logo from "components/core/Logo";
import Button from "components/core/Button";
import IconCart from "components/core/IconCart";
import Menu from "./Menu";
import Search from "./Search";

import * as S from "./styled";

const Header = () => (
  <S.HeaderContainer>
    <S.WrapperHeader>
      <Link href={HOME} as={HOME} passHref>
        <a>
          <Logo color="#FAFAFA" icon={header.icon} title={header.title} />
        </a>
      </Link>
      <Menu menu={header.pages} />
      <S.SearchBar>
        <Search handleSubmit={() => ({})} />
      </S.SearchBar>
      <IconCart />
      <Button text={header.button.name} />
    </S.WrapperHeader>
  </S.HeaderContainer>
);

export default memo(Header);
