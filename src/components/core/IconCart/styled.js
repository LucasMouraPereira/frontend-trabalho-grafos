import styled from "styled-components";

export const WrapperIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-right: 27px;

  svg {
    path {
      fill: var(--color-white-2);
    }
  }
`;

export const ProductsInCart = styled.div`
  position: absolute;
  width: 14px;
  font-size: 10px;
  line-height: 12px;
  color: var(--color-white-2);
  background: var(--color-green-1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 3px 8px 1px;
  left: 14px;
  top: -6px;
`;
