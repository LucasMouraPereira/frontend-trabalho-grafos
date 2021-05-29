import styled from "styled-components";

export const WrapperDetailsCard = styled.div`
  width: 100%;
  max-width: 1253px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 35px 46px 46px;
  margin-top: 130px;
`;

export const WrapperText = styled.div`
  h2 {
    font-family: PoppinsBold;
    font-size: 28px;
    line-height: 42px;
    color: #000000;
  }
  p {
    font-size: 18px;
    line-height: 27px;
    color: #828282;
  }
`;

export const Line = styled.div`
  border-bottom: 5px solid var(--color-pink-1);
  width: 60px;
  margin-bottom: 16px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 90px;
  span {
    margin-left: 8px;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #F231A5;
  }
`;

export const ContentSpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 78px;
  hight: 22px;
  background: #3cd3c1;
  border-radius: 2px;
  span {
    font-family: PoppinsBold;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;
  }
`;


export const WrapperIcon = styled.div`
  display: flex;
  justify-content: space-between;
`;

