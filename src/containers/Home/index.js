/* eslint-disable camelcase */
import React from "react";

import PropTypes from "prop-types";
import Search from "components/core/Search";
import Card from "components/core/Card";

import Aside from "./Aside";

import * as S from "./styled";

const Home = ({ products, aside }) => (
  <S.Container>
    <Aside price={aside.price} sort={aside.sort} system={aside.system} genre={aside.genre} />
    <S.WrapperBody>
      <Search handleSubmit={() => ({})} />
      <S.GridCards>
        {products.map(({ image_url, name, developer, price }) => (
          <Card image={image_url} title={name} company={developer} price={price} />
        ))}
      </S.GridCards>
    </S.WrapperBody>
  </S.Container>
);

Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image_url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      developer: PropTypes.string.isRequired,
      currentPrice: PropTypes.string.isRequired,
    }),
  ).isRequired,
  aside: PropTypes.shape({
    price: PropTypes.shape({
      title: PropTypes.string,
      button: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          checked: PropTypes.bool,
          label: PropTypes.string,
        }),
      ),
    }),
    sort: PropTypes.shape({
      title: PropTypes.string,
      button: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          checked: PropTypes.bool,
          label: PropTypes.string,
        }),
      ),
    }),
    system: PropTypes.shape({
      title: PropTypes.string,
      button: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          checked: PropTypes.bool,
          label: PropTypes.string,
        }),
      ),
    }),
    genre: PropTypes.shape({
      title: PropTypes.string,
      button: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          checked: PropTypes.bool,
          label: PropTypes.string,
        }),
      ),
    }),
  }).isRequired,
};

export default Home;
