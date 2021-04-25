import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 22px;
  min-width: max-content;
  max-width: 100%;
  height: 40px;
  box-sizing: border-box;
  border-radius: 2px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  line-height: 23px;
  text-align: center;
  text-transform: uppercase;
  background: linear-gradient(178.59deg, #FF5F5F -14.51%, #F062C0 102.86%, #F23131 102.86%);
  color: #FAFAFA;
  svg > path {
    fill: #FAFAFA;
  }
  ${({ style }) => style}
`;

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  padding: 0px 11px 0 0;
`;
