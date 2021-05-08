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
  z-index: 999;
  transition: all ease-in 250ms;
  a {
    cursor: pointer;
  }
`;

export const WrapperHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 50px;
`;

export const SearchBar = styled.div`
  width: 100%;
  background: var(--color-white-1);
  display: flex;
  margin-right: 40px;
  margin-left: 17px;
  
  @media (max-width: ${sizes.md}) {
    height: 64px;
    top: 63px;
  }
`;