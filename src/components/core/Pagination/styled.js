import styled from "styled-components";

export const Pagination = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-bottom: 100px;
`;

export const SectionButton = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  button {
    border: none;
    color: var(--color-white-2);
    background: #06092B;
    svg {
      path {
        fill: var(--color-white-2);
      }
    }
  }
`;

export const Items = styled.li`
  margin: 0 8px;
  button {
    width: 35px;
    height: 35px;
    border: none;
    border-radius: 50%;
    color: var(--color-white-2);
    cursor: pointer;
    background: linear-gradient(
      178.59deg,
      var(--color-red-2) -14.51%,
      var(--color-pink-2) 102.86%,
      var(--color-red-1) 102.86%
    );
  }

  .pagination__item--active {
    font-weight: bold;
    opacity: 0.3;
    cursor: ;
  }
  .pagination__item--active:focus {
    outline: none;
  }
`;
