import React, { useState } from "react";
import { END } from "redux-saga";
import PropTypes from "prop-types";
import { Creators as Actions } from "store/ducks/home";
import { wrapper } from "store";

import HomeContainer from "containers/Home";
import Pagination from "components/core/Pagination";

const HomePage = ({ products, aside, pages }) => {
  const [offset, setOffset] = useState(0);
  return (
    <>
      <HomeContainer products={products} aside={aside} />
      <Pagination limit={pages.length} total={pages.total} offset={offset} setOffset={setOffset} />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  store.dispatch(Actions.requestHome());
  store.dispatch(END);
  await store.sagaTask.toPromise();
  const { home: homeData } = store.getState();
  return {
    props: {
      products: homeData.products,
      aside: homeData.aside,
      pages: homeData.pages,
    },
  };
});

HomePage.propTypes = {
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
  pages: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default HomePage;
