import styled from "styled-components";

export const WrapperSystemDetails = styled.div`
  width: 100%;
  max-width: 1050px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    width: 100%;
    max-width: 60px;
    font-family: "PoppinsMedium";
    font-size: 24px;
    line-height: 36px;
    padding-bottom: 6px;
    border-bottom: 5px solid #f231a5;
  }
`;

export const SystemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 20px;
  h4 {
    font-family: "PoppinsMedium";
    font-size: 16px;
    line-height: 24px;
    color: #bbbbbb;
  }
`;

export const SystemsInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  div {
    margin-bottom: 24px;
  }
`;

export const SystemMemory = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  div {
    margin-bottom: 24px;
  }
`;
