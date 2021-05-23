import React, { useRef, useState} from "react";
import PropTypes from "prop-types";
import Logo from "components/core/Logo";

import SignIn from "components/core/SignIn";
import SignUp from "components/core/SignUp";

import { useOutsideClick } from "utils/hooks";

import * as S from "./styled";

const Modal = ({ 
  setIsOpen, 
  isOpen, 
  title, 
  tabs, 
  formSignIn, 
  formSignUp 
}) => {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => setIsOpen(false));
  const [isActiveTabs, setActiveTabs] = useState(0);

  const handleActiveTab = (id) => {
    if (id !== isActiveTabs) {
      setActiveTabs(id);
    }
  };
  const styledLogo = {
    flexDirection: "column",
    justifyContent: "center",
    height: "140px",
    "h1": {
      fontSize: "24px",
      maxWidth: "183px",
      marginLeft: "unset",
    },
    "img": {
      width: "85px",
    }
  };

  return (
    isOpen && (
      <S.Container>
        <S.ModalContent ref={wrapperRef}>
          <S.ModalHeader>
            <S.ModalClose onClick={() => setIsOpen(false)}>x</S.ModalClose>
            <S.WrapperTabs>
              {tabs.map(({ text, id }) => (
                <S.Tab id={id} isActive={isActiveTabs === id} onClick={() => handleActiveTab(id)}>
                  <p>{text}</p>
                </S.Tab>
              ))}
            </S.WrapperTabs>
            <S.Title>{title || ""}</S.Title>
          </S.ModalHeader>
          {tabs.map(({ id }) => (
            <S.ModalBody isActive={isActiveTabs === id}>
              <Logo 
                color="#000000" 
                icon="/images/global/png/Icon.png"
                title="Story Games" 
                style={styledLogo} 
              />
              {isActiveTabs === 0 ? <SignIn formSignIn={formSignIn} /> : <SignUp formSignUp={formSignUp} />}
            </S.ModalBody>
          ))}
        </S.ModalContent>
      </S.Container>
    )
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ),
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  formSignIn: PropTypes.shape({
    title: PropTypes.string,
    form: PropTypes.arrayOf(
      PropTypes.shape({
        field: PropTypes.string,
      })
    ),
    sendEmailLink: PropTypes.shape({
      text: PropTypes.string,
    }),
    button: PropTypes.shape({
      text: PropTypes.string,
    }),
    haveAccount: PropTypes.shape({
      text: PropTypes.string,
      textLink: PropTypes.string,
    })
  }).isRequired,
  formSignUp: PropTypes.shape({
    title: PropTypes.string,
    form: PropTypes.arrayOf(
      PropTypes.shape({
        field: PropTypes.string,
      })
    ),
    button: PropTypes.shape({
      text: PropTypes.string,
    }),
    haveAccount: PropTypes.shape({
      text: PropTypes.string,
      textLink: PropTypes.string,
    })
  }).isRequired,
};

Modal.defaultProps = {
  title: "",
  tabs: [],
  setIsOpen: () => {},
  isOpen: false,
};

export default Modal;
