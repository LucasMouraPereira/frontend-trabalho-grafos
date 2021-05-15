import React, { useState } from "react";
import PropTypes from "prop-types";
import Search from "components/core/Search";
import Card from "components/core/Card";
import Pagination from "components/core/Pagination";

import Aside from "./Aside";

import * as S from "./styled";

const Home = ({ products, aside }) => {
  const [offset, setOffset] = useState(0);
  return (
    <S.Container>
      <Aside price={aside.price} sort={aside.sort} system={aside.system} genre={aside.genre} />
      <S.WrapperBody>
        <Search handleSubmit={() => ({})} />
        <S.GridCards>
          {products.map(({ image, title, descriptionIcon, gameDetails, currentPrice }) => (
            <Card
              image={image}
              title={title}
              descriptionIcon={descriptionIcon}
              company={gameDetails.company}
              price={currentPrice}
            />
          ))}
        </S.GridCards>
        <Pagination limit={12} total={36} offset={offset} setOffset={setOffset} />
      </S.WrapperBody>
    </S.Container>
  );
};

Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        url: PropTypes.string,
        title: PropTypes.string,
        alt: PropTypes.string.isRequired,
      }).isRequired,
      title: PropTypes.string.isRequired,
      descriptionIcon: PropTypes.string.isRequired,
      gameDetails: PropTypes.shape({
        company: PropTypes.string,
      }).isRequired,
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
