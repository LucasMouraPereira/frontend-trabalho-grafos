import styled from "styled-components";
import sizes from "utils/style/breakpoints";

export const Container = styled.div`
  width: 100%;
  max-width: 140px;
  height: 100%;
  color: var(--color-white-2);
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.12);
  z-index: 99;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 40px;
  @media (max-width: ${sizes.md}) {
    display: none;
  }
`;

export const WrapperMenu = styled.div`
  cursor: pointer;
  span {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
  }
`;

export const SelectLink = styled.div`
  border: 3px solid var(--color-pink-1);
`;