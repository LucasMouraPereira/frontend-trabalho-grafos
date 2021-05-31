import React, { memo, useContext} from "react";
import { header } from "utils/data/header-mock.json";
import { tabs, signIn, signUp } from "utils/data/forms-mock.json";
import Link from "next/link";
import { HOME, CART } from "utils/constants/urls";
import { CartContext } from "contexts/CartContext";
import { AuthContext } from "contexts/AuthContext"; 

import Logo from "components/core/Logo";
import Button from "components/core/Button";
import IconCart from "components/core/IconCart";
import UsersSection from "components/core/UsersSection";
import Modal from "components/core/Modal";

import Menu from "./Menu";

import * as S from "./styled";

const Header = () => {
  const { lengthCard, isAuth } = useContext(CartContext);
  const { setIsOpenModal, isOpenModal } = useContext(AuthContext);

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
          <Link href={CART} as={CART} passHref>
            <a>
              <IconCart lengthProductsInCart={typeof lengthCard === "undefined" ? 0 : lengthCard} />
            </a>
          </Link>
          {typeof isAuth === "undefined" ? 
            <Button onClick={() => setIsOpenModal(!isOpenModal)} text={header.button.name} />
            : 
            <UsersSection />
          }
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
