import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Arrow from "utils/static/svg/arrow-top.svg";

import * as S from "./styled";

const ScrollToTop = ({ onClick, updatePosition }) => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        const minimumHeight = window.innerHeight + window.innerHeight / 2;
        setShowButton(window.scrollY >= minimumHeight);
        updatePosition(window.scrollY >= minimumHeight);
      });
    }
  }, []);
  const handleClick = () => {
    if (typeof window !== "undefined") {
      onClick();
      window.scrollTo(0, 0);
    }
  };
  return (
    <S.Container onClick={handleClick} showButton={showButton}>
      <Arrow />
    </S.Container>
  );
};

ScrollToTop.propTypes = {
  onClick: PropTypes.func,
  updatePosition: PropTypes.func,
};

ScrollToTop.defaultProps = {
  onClick: () => null,
  updatePosition: () => null,
};

export default ScrollToTop;
