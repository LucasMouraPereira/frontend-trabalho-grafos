import styled from "styled-components";

export const WrapperBigCard = styled.div`
  width: 100%;
  max-width: 1050px;
  background: #ffffff;
  padding: 30px;
  margin-bottom: 100px;
  h3 {
    font-family: "PoppinsBold";
    font-size: 28px;
    line-height: 42px;
    color: #030517;
    display: flex;
    flex-direction: row;
    align-items: center;
    div {
      width: 7px;
      height: 31px;
      background: #35bdac;
      margin-right: 6px;
    }
  }
  p {
    font-size: 20px;
    line-height: 30px;
    color: #030517;
  }
  img {
    width: 210px;
  }
`;

export const WrapperDescription = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const Description = styled.div`
  width: 100%;
  padding-left: 30px;
`;

export const WrapperGameDetails = styled.div``;

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 300px;
  margin-top: 30px;
  h4 {
    font-family: "PoppinsRegular";
    font-size: 16px;
    line-height: 24px;
    color: #030517;
  }
`;
