import styled from "styled-components";

export const WrapperPayment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #fafafa;
  padding: 70px 90px;
  h4 {
    font-family: PoppinsBold;
    font-size: 36px;
    line-height: 27px;
    margin-bottom: 60px;
  }
  p {
    font-family: PoppinsBold;
    font-size: 16px;
    line-height: 27px;
    margin-top: 60px;
    text-align: center;
  }
`;

export const WrapperIcon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  div {
    border: 1px solid #F231A5;
    width: 317.5px;
    height: 0px;
  }
`;

export const Redirect = styled.a`
  margin-top: 60px;
  font-size: 21px;
  :hover {
    color: #F231A5;
  }
`;