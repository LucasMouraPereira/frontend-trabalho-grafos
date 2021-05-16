import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Pagination = ({ limit, total, offset, setOffset }) => {
  const MAX_ITEMS = 9;
  const MAX_LEFT = (MAX_ITEMS - 1) / 2;
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  const onPageChange = (page)  => {
    setOffset((page - 1) * limit);
  };

  return (
    <S.Pagination>
      <li>
        <button type="button" onClick={() => onPageChange(current - 1)} disabled={current === 1}>
          Anterior
        </button>
      </li>
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          <S.Items key={page}>
            <button
              type="button"
              onClick={() => onPageChange(page)}
              className={page === current ? "pagination__item--active" : null}
            >
              {page}
            </button>
          </S.Items>
        ))}
      <li>
        <button
          type="button"
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
          Próxima
        </button>
      </li>
    </S.Pagination>
  );
};

Pagination.propTypes = {
  limit: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  setOffset: PropTypes.func.isRequired,
};

export default Pagination;