import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  width: 100%;
  padding: 130px 70px 170px;
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
