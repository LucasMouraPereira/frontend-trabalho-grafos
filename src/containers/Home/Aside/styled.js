import styled from "styled-components";

export const AsideContainer = styled.aside`
  width: 100%;
  max-width: 414px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperFilter = styled.div`
  width: 100%;
  max-width: 217px;
  display: flex;
  flex-direction: column;
  color: #fafafa;
`;

export const Section = styled.div`
  h4 {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const Border = styled.div`
  width: 30px;
  border-bottom: 4px solid #3cd3c1;
  margin-bottom: 28px;
`;

export const WrapperInput = styled.div`
  margin-bottom: 12px;
  label {
    margin-left: 12px;
    font-size: 14px;
    line-height: 21px;
  }
`;

export const Line = styled.hr`
  border: 1px solid #2b2c34;
  margin: 25px 0;
`;
