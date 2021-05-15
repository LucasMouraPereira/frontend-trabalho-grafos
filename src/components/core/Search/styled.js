import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  max-height: 40px;
  margin: 21px;
  display: flex;
  padding: 10px 16px;
`;

export const WrapperForm = styled.form`
  flex: 1;
  max-width: 293px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  background-color: #2E2F42;

  svg {
    margin: 0 8px;
    path {
      fill: #8F8F8F;
    }
  }
`;

export const InputStyled = styled.input`
  width: -webkit-fill-available;
  border: none;
  font-size: 16px;
  padding: 10px;
  background-color: #2E2F42;
  color: var(--color-white-1)
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 12px;
  height: 38px;
  display: flex;
  align-items: center;
  background-color: #2E2F42;
`;
