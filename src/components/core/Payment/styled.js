import styled from "styled-components";

export const ContentPayment = styled.div`


`;

export const WrapperPayment = styled.div`
  background: #fafafa;
  color: #030517;
  margin: 73px 0 0 26px;
  padding: 16px;
  height: 300px;
  h3 {
    font-family: PoppinsBold;
    font-size: 18px;
    line-height: 27px;
    color: #000000;
    margin-bottom: 41px;
    div {
      background: #F231A5;
      width: 38px;
      height: 3px;
    }
  }
`;

export const Label = styled.label`
  font-family: PoppinsMedium;
  font-size: 18px;
  line-height: 27px;
  margin: 10px;
`;

export const Input = styled.div`
  input {
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    ::placeholder {
      color: palevioletred;
    }
  }
  p {
    font-size: 8px;
    color: red;
    margin: 10px;
  }

`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
`;
