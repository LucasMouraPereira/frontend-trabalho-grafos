import styled from "styled-components";

export const WrapperDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  background: url(${({ bg }) => bg});
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
  height: 780px;
`;

export const WrapperDetailsBigCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 25%;
  height: 700px;
  align-items: center;
`;

export const ContainerSystem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 700px;
  color: #ffffff;
  margin-top: 100px;
`;