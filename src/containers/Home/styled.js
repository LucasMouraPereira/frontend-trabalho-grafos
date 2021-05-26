import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  width: 100%;
  padding: 70px 0;
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
