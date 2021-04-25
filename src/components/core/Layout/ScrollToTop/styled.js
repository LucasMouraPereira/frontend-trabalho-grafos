import styled from "styled-components";
import sizes from "utils/style/breakpoints";

export const Container = styled.div`
  width: 48px;
  height: 48px;
  position: fixed;
  bottom: 5%;
  right: 25px;
  border-radius: 50%;
  display: ${({ showButton }) => (showButton ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background: var(--color-white-2);
  box-shadow: 0px 0px 25px rgba(77, 85, 106, 0.2);
  cursor: pointer;
  z-index: 999;

  svg {
    opacity: 0.5;
  }

  @media (max-width: ${sizes.xs}) {
    right: 16px;
    bottom: 4%;
  }
`;