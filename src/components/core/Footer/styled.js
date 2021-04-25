import styled from "styled-components";
import sizes from "utils/style/breakpoints";

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--colot-white-2);
  padding-top: 30px;
  @media (max-width: ${sizes.sm}) {
    padding-top: 38px;
  }
`;

export const ConteinerLogo = styled.div`
  margin-bottom: 30px;

`;

export const WrapperSection = styled.div`
  width: 100%;
  max-width: 1420px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: ${sizes.xlg}) {
    max-width: 960px;
  }

  @media (max-width: ${sizes.sm}) {
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export const WrapperInformation = styled.div`
  width: 100%;
  h3 {
    font-family: 'PoppinsBold';
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
    color: var(--color-black-1);
  }
  p {
    font-family: 'PoppinsRegular';
    font-size: 14px;
    line-height: 21px;
    color: var(--color-gray-7);
    margin-bottom: 6px;
  }

  @media (max-width: ${sizes.sm}) {
    max-width: 180px;
    margin-bottom: 24px; 
  }
`;

export const Content = styled.div`
  width: 34px;
  border: 4px solid var(--color-green-1);
  margin-bottom: 15px;
`;

export const WrapperText = styled.div`
  a {
    cursor: pointer,
  }
`;

export const Phrase = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: var(--color-gray-7);
  margin: 48px 0 17px;

  @media (max-width: ${sizes.sm}) {
    margin: 0 0 17px;
  }
`;