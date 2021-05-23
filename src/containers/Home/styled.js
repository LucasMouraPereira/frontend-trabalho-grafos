import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  width: 100%;
  padding: 130px 70px 70px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const WrapperPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;
