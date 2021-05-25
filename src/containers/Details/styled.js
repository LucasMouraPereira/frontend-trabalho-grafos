import styled from "styled-components";

export const WrapperDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${({ bg }) => bg});
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
  height: 780px;
`;