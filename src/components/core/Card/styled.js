import styled from "styled-components";

export const WrapperCard = styled.div`
  width: 100%;
  max-width: 293px;
  background-color: var(--color-white-1);
  border-radius: 3px;
  cursor: pointer;
`;

export const WrapperImage = styled.div`
  img {
    width: 100%;
    max-width: 293px;
    height: 137px;
    border-radius: 3px;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 16px;
  h3 {
    font-family: PoppinsBold;
    font-size: 16px;
    line-height: 24px;
    color: #030517;
  }
  P {
    font-family: PoppinsMedium;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: #bbbbbb;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperBuy = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
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

export const ContentIcon = styled.div``;
