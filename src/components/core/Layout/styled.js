import styled from "styled-components";
import sizes from "utils/style/breakpoints";

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 300px);
  margin-top: 64px;
  position: relative;
  background: var(--color-blue-1);
  
  @media (max-width: ${sizes.xlg}) {
    min-height: calc(100vh - 400px);
  }
  @media (max-width: ${sizes.sm}) {
    min-height: calc(100vh - 455px);
  }
  @media (max-width: ${sizes.xs}) {
    min-height: calc(100vh - 372px);
    margin-top: 64px;
  }
`;
