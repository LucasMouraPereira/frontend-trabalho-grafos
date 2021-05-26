import React from "react";
import { END } from "redux-saga";
import PropTypes from "prop-types";
import { Creators as Actions } from "store/ducks/home";
import { Creators as ActionsSearch } from "store/ducks/search";
import { wrapper } from "store";

import HomeContainer from "containers/Home";
import Pagination from "components/core/Pagination";

const HomePage = ({ products, aside, actualPage, totalPerPage, totalItems, totalPages }) => (
    <>
      <HomeContainer products={products} aside={aside} />
      <Pagination limit={totalPerPage} total={totalItems} actualPage={actualPage} totalPages={totalPages}/> 
    </>
  );

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, query }) => {
  const id = parseInt(query?.gamePage, 10);
  const term = query?.search;
  store.dispatch(Actions.requestHome(id, 12));
  store.dispatch(ActionsSearch.requestSearch(term));
  store.dispatch(END);
  await store.sagaTask.toPromise();
  const { home: homeData } = store.getState();
  const { search: searchData } = store.getState();
  return {
    props: {
      products: typeof term === "undefined" ? homeData.products : searchData.products,
      aside: homeData.aside,
      actualPage: homeData.actualPage,
      totalPerPage: homeData.totalPerPage,
      totalItems: homeData.totalItems,
      totalPages: homeData.totalPages
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
  actualPage: PropTypes.number.isRequired, 
  totalPerPage: PropTypes.number.isRequired, 
  totalItems: PropTypes.number.isRequired, 
  totalPages: PropTypes.number.isRequired
};

export default HomePage;
