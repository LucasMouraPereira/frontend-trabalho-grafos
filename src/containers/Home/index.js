/* eslint-disable camelcase */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Search from "components/core/Search";
import Card from "components/core/Card";

import { HOME, SEARCH } from "utils/constants/urls";

import * as S from "./styled";

const Home = ({ products }) => {
  const [params, setParams] = useState("");
  const router = useRouter();
  const onSearchGames = (event) => {
    const href = `${HOME}/1${SEARCH}${params}`;
    router.push(
      {
        pathname: `${HOME}/1`,
        query: {
          params,
        },
      },
      href,
      { shallow: true },
    );
    event.preventDefault();
  };

  return (
    <S.Container>
      <S.WrapperBody>
        <Search handleSubmit={(e) => onSearchGames(e)} params={params} setParams={setParams} />
        <S.GridCards>
          {products.map(({ id, image_url, name, developer, price }) => (
            <div key={id}>
              <Card
                id={id}
                image={image_url}
                title={name}
                company={developer}
                price={price}
              />
            </div>
          ))}
        </S.GridCards>
      </S.WrapperBody>
    </S.Container>
  );
};

Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image_url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
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
