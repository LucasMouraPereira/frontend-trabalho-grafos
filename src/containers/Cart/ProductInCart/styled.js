import styled from "styled-components";

export const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 80%;
  margin: auto;
  h2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: PoppinsBold;
    font-size: 28px;
    line-height: 42px;
    color: #fafafa;
    margin-bottom: 32px;
    div {
      background: #35bdac;
      width: 7px;
      height: 31px;
      margin-right: 10px;
    }
  }
`;

export const WrapperCardBuy = styled.div`
  display: flex;
  flex-direction: column;
  background: #fafafa;
`;
export const WrapperBuy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  button {
    margin: auto 30px;
  }
`;

export const WrapperBuyProduct = styled.div`
  display: flex;
  flex-direction: row;
`;
export const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperText = styled.div`
  width: 332px;
  padding-top: 10px;
  margin-left: 36px;
  h3 {
    font-family: PoppinsBold;
    font-size: 20px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #030517;
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

export const WrapperTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #F3F3F3;
  height: 76px;
  padding: 0 60px;
  h3 {
    font-family: PoppinsBold;
    font-size: 20px;
    line-height: 30px;
    color: #030517;
  }
  span {
    font-family: PoppinsBold;
    font-size: 20px;
    line-height: 30px;
    color: #F231A5;
  }
`;
