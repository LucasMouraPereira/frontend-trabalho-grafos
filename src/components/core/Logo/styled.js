import styled from "styled-components";

export const WrapperLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h1 {
    font-family: 'Nixmat';
    font-size: 12px;
    color: ${({color}) => color};
    margin-left: 12px;
    max-width: 140px;
  }

  ${({style}) => style};
`;