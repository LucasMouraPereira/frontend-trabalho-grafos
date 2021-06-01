import styled from "styled-components";

export const WrapperBuySection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 120px 90px;
`;

export const WrapperEmptyCart = styled.div`
  width: 100%;
  display: flex; 
  flex-direction: ${({ isEmpty }) => isEmpty ? "column" : "row"};
  justify-content: center;
  padding: ${({ isEmpty }) => !isEmpty && "70px 90px"};
  align-items: ${({ isEmpty }) => isEmpty && "center"};
  color: #ffffff;
  h1 {
    font-size: 92px;
    margin-bottom: 40px;
  }
  a {
    font-size: 92px;
    cursor: pointer;
    :hover {
      color: #F231A5;
    }
  }
`;
