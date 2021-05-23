import styled from "styled-components";

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 100%;
    height: 50px;
    background: #EAEAEA;
    border: none;
  }
  button {
    margin-top: 30px;
  }
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 380px;
  margin-bottom: 9px;
  border-radius: 2px;
  background: #EAEAEA;
`;

export const Icons = styled.div`
  padding: 11px;
`;