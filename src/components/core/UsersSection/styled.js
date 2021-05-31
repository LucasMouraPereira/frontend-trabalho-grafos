import styled from "styled-components";

export const WrapperUsers = styled.div`
  display: flex;
  flex-direction: row;
  width: 130px;
  justify-content: space-between;
  h3 {
    color: #ffffff;
  }
`;

export const WrapperDropDrown = styled.div`
  ${({ isActive }) => (isActive ? "display: flex" : "display: none")};
  position: absolute;
  top: 66px;
  right: 85px;
  flex-direction: column;
  background: #FAFAFA;
  border: 1px solid #666666;
`;

export const SectionProfile = styled.div`
  padding: 10px;
  p {
    font-family: PoppinsMedium;
    font-size: 16px;
    line-height: 24px;
    color: #030517;
  }
`;

export const SectionLogout = styled.div`
padding: 10px;
cursor: pointer;
p {
  font-family: PoppinsBold;
  font-size: 16px;
  line-height: 24px;
  color: #030517;
  :hover {
    color: #F231A5;
  }
}
`;
