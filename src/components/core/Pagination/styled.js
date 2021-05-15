import styled from "styled-components";

export const Pagination = styled.ul`
  display: flex;
  list-style: none;
`;

export const Items = styled.li`
  margin-left: 1rem;
  button {
    .pagination__item--active {
      background: none;
      font-weight: bold;
      border: none;
    }
    .pagination__item--active:focus {
      outline: none;
    }
  }
`;
