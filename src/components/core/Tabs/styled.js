import styled from "styled-components";
import sizes from "utils/style/breakpoints";

export const WrapperTabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  overflow: hidden;
  background: #fff;
  height: 3em;
`;

export const Tab = styled.div`
  text-align: center;
  outline: none;
  cursor: pointer;
  width: 25%;
  position: relative;
  border-bottom: ${({ isActive }) => (isActive ? "5px solid var(--color-pink-1)" : "")};
  transition: border-bottom 0.5s ease-in-out;
  p {
    font-family: "PoppinsBold";
    font-size: 24px;
    font-weight: 700;
  }

  @media (max-width: ${sizes.md}) {
    p {
      font-size: 14px;
    }
  }
`;