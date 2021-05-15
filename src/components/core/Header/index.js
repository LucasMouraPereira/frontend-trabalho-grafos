import React, { useState, memo } from "react";
import { header } from "utils/data/header-mock.json";
import { tabs } from "utils/data/forms-mock.json";
import Link from "next/link";
import { HOME } from "utils/constants/urls";

import Logo from "components/core/Logo";
import Button from "components/core/Button";
import IconCart from "components/core/IconCart";
import Modal from "components/core/Modal";

import Menu from "./Menu";

import * as S from "./styled";

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const styledLogo = {
    width: "146px",
  };
  return (
    <>
      <S.HeaderContainer>
        <S.WrapperHeader>
          <Link href={HOME} as={HOME} passHref>
            <a>
              <Logo color="#FAFAFA" icon={header.icon} title={header.title} style={styledLogo} />
            </a>
          </Link>
          <Menu menu={header.pages} />
          <IconCart />
          <Button onClick={() => setIsOpenModal(!isOpenModal)} text={header.button.name} />
        </S.WrapperHeader>
      </S.HeaderContainer>
      <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal} tabs={tabs} content="lucas" />
    </>
  );
};

export default memo(Header);
