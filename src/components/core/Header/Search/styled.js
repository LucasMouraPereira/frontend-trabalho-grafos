import styled from "styled-components";
import sizes from "utils/style/breakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
`;

export const WrapperForm = styled.form`
  flex: 1;
  max-width: 900px;
  display: flex;
  align-items: center;
  border-radius: 2px;

  svg {
    margin: 0 8px;
  }

  @media (max-width: ${sizes.md}) {
    min-width: 50%;
  }

  @media (max-width: ${sizes.sm}) {
    background-color: var(--color-white-2);
    max-width: 100%;

    svg {
      display: none;
    }
  }
`;

export const WrapperSearch = styled.div`
  /* flex: 1;
  max-width: 900px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  background-color: var(--color-white-2);

  @media (max-width: ${sizes.md}) {
    min-width: 50%;
  }
  @media (max-width: ${sizes.sm}) {
    svg {
      display: none;
    }
  } */
`;

export const InputStyled = styled.input`
  /* border: none;
  width: 100%;
  font-size: 16px;
  padding: 10px;
  background-color: var(--color-white-2); */
`;

export const Button = styled.button`
  /* color: var(--color-gray-7);
  text-transform: capitalize;
  font-family: "Trebuchet MS", sans-serif;
  font-size: 16px;
  line-height: 24px;
  border: none;
  padding: 12px;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: var(--color-white-2); */
`;
