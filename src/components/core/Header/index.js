import React, { useState, memo } from "react";
import { useSelector } from "react-redux";
import { header } from "utils/data/header-mock.json";
import { tabs, signIn, signUp } from "utils/data/forms-mock.json";
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
  const { cart } = useSelector(state => state);
  const styledLogo = {
    width: "146px",
  };

  return (
    <>
      <S.HeaderContainer>
        <S.WrapperHeader>
          <S.Right>
            <Link href={`${HOME}/1`} as={`${HOME}/1`} passHref>
              <a>
                <Logo color="#FAFAFA" icon={header.icon} title={header.title} style={styledLogo} />
              </a>
            </Link>
            <Menu menu={header.pages} />
          </S.Right>
          <S.Left>
            <IconCart lengthProductsInCart={typeof cart?.productsInCar === "undefined" ? 0 :  cart?.productsInCar.length} />
            <Button onClick={() => setIsOpenModal(!isOpenModal)} text={header.button.name} />
          </S.Left>
        </S.WrapperHeader>
      </S.HeaderContainer>
      <Modal
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
        tabs={tabs}
        formSignIn={signIn}
        formSignUp={signUp}
      />
    </>
  );
};

export default memo(Header);
