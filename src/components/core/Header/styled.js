import styled from "styled-components";

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
  justify-content: space-between;
  align-items: center;
  padding: 0 90px;
`;

export const Right = styled.div`
  display: flex;
`;

export const Left = styled.div`
  display: flex;
`;