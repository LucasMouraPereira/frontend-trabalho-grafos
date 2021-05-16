import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const Aside = ({ price, sort, system, genre }) => (
  <S.AsideContainer>
    <S.WrapperFilter>
      <S.Section>
        <h4>{price.title}</h4>
        <S.Border />
        {price?.button?.map(({ id, checked, label }) => (
          <S.WrapperInput key={id}>
            <input
              id={price?.title}
              name={price?.title}
              type="checkbox"
              checked={checked}
              value={price?.title}
            />
            <label htmlFor={price?.title}>{label}</label>
          </S.WrapperInput>
        ))}
      </S.Section>
      <S.Line />
      <S.Section>
        <h4>{sort?.title}</h4>
        <S.Border />
        {sort?.button?.map(({ id, checked, label }) => (
          <S.WrapperInput key={id}>
            <input
              id={sort?.title}
              name={sort?.title}
              type="checkbox"
              checked={checked}
              value={sort?.title}
            />
            <label htmlFor={sort?.title}>{label}</label>
          </S.WrapperInput>
        ))}
      </S.Section>
      <S.Line />
      <S.Section>
        <h4>{system?.title}</h4>
        <S.Border />
        {system?.button?.map(({ id, checked, label }) => (
          <S.WrapperInput key={id}>
            <input
              id={system?.title}
              name={system?.title}
              type="checkbox"
              checked={checked}
              value={system?.title}
            />
            <label htmlFor={system?.title}>{label}</label>
          </S.WrapperInput>
        ))}
      </S.Section>
      <S.Line />
      <S.Section>
        <h4>{genre?.title}</h4>
        <S.Border />
        {genre?.button?.map(({ id, checked, label }) => (
          <S.WrapperInput key={id}>
            <input
              id={genre?.title}
              name={genre?.title}
              type="checkbox"
              checked={checked}
              value={genre?.title}
            />
            <label htmlFor={genre?.title}>{label}</label>
          </S.WrapperInput>
        ))}
      </S.Section>
    </S.WrapperFilter>
  </S.AsideContainer>
);

Aside.propTypes = {
  price: PropTypes.shape({
    title: PropTypes.string,
    button: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        checked: PropTypes.bool,
        label: PropTypes.string,
      }),
    ),
  }).isRequired,
  sort: PropTypes.shape({
    title: PropTypes.string,
    button: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        checked: PropTypes.bool,
        label: PropTypes.string,
      }),
    ),
  }).isRequired,
  system: PropTypes.shape({
    title: PropTypes.string,
    button: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        checked: PropTypes.bool,
        label: PropTypes.string,
      }),
    ),
  }).isRequired,
  genre: PropTypes.shape({
    title: PropTypes.string,
    button: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        checked: PropTypes.bool,
        label: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default Aside;
