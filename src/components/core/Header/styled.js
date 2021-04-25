import styled from "styled-components";
import sizes from "utils/style/breakpoints";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 64px;
  background: var(--color-blue-1);
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  transition: all ease-in 250ms;

  @media (max-width: ${sizes.sm}) {
    justify-content: space-between;
  }
`;

export const WrapperMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 25px;
  cursor: pointer;

  @media (max-width: ${sizes.md}) {
    margin: 0 10px 0 0;
  }

  @media (max-width: ${sizes.xs}) {
    margin: 0 5px;
  }
`;

export const SearchBar = styled.div`
  width: 100%;
  background: var(--color-white-1);
  display: flex;
  

  /* @media (max-width: ${sizes.md}) {
    height: 64px;
    top: 63px;
  } */
`;