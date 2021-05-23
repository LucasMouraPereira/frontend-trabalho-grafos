import React from "react";
import PropTypes from "prop-types";

import ArrowBack from "utils/static/svg/arrow-back.svg";
import ArrowForward from "utils/static/svg/arrow-forward.svg";

import * as S from "./styled";

const Pagination = ({ limit, total, setOffset, offset }) => {
  const MAX_ITEMS = 9;
  const MAX_LEFT = (MAX_ITEMS - 1) / 2;
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  const onPageChange = (page) => {
    setOffset((page - 1) * limit);
  };


  return (
    <S.Pagination>
      <S.SectionButton>
        <button type="button" onClick={() => onPageChange(current - 1)} disabled={current === 1}>
          <ArrowBack />
        </button>
      </S.SectionButton>
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
      <S.SectionButton>
        <button
          type="button"
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
          <ArrowForward />
        </button>
      </S.SectionButton>
    </S.Pagination>
  );
};

Pagination.propTypes = {
  limit: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  setOffset: PropTypes.func.isRequired
};

export default Pagination;
