import React, { useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import ArrowBack from "utils/static/svg/arrow-back.svg";
import ArrowForward from "utils/static/svg/arrow-forward.svg";
import { HOME } from "utils/constants/urls";

import * as S from "./styled";

const Pagination = ({ limit, total}) => {
  const router = useRouter();
  const [offset, setOffset] = useState(0);
  const MAX_ITEMS = 3;
  const MAX_LEFT = (MAX_ITEMS - 1) / 2;
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  const onPageChange = (page) => {
    const href = `${HOME}/${page}`
    setOffset((page - 1) * limit);
    router.push(href);
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
};

export default Pagination;
