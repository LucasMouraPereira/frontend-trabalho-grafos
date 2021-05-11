import React, { useRef, useState} from "react";
import PropTypes from "prop-types";

import SignIn from "components/core/SignIn";
import SignUp from "components/core/SignUp";

import { useOutsideClick } from "utils/hooks";

import * as S from "./styled";

const Modal = ({ setIsOpen, isOpen, title, tabs }) => {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, () => setIsOpen(false));
  const [isActiveTabs, setActiveTabs] = useState(0);

  const handleActiveTab = (id) => {
    if (id !== isActiveTabs) {
      setActiveTabs(id);
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
              {isActiveTabs === 0 ? <SignIn /> : <SignUp />}
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
};

Modal.defaultProps = {
  title: "",
  tabs: [],
  setIsOpen: () => {},
  isOpen: false,
};

export default Modal;
