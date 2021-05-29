import PropTypes from "prop-types";
import { END } from "redux-saga";
import { wrapper } from "store";
import { Creators as Actions } from "store/ducks/details";

import DetailsContainer from "containers/Details";

const DetailsPage = ({ product, details }) => (
  <>
    <DetailsContainer 
      title={product.name}
      description={product.description}
      imageUrl={product.image_url}
      price={product.price}
      categories={product.categories}
      mode={product.mode}
      developer={product.developer}
      currentPrice={product.currentPrice}
      systemRequirement={product.system_requirement}
      banner={details.banner}
    />
  </>
);

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, query }) => {
  const id = parseInt(query.details, 10);
  store.dispatch(Actions.requestDetails(id));
  store.dispatch(END);
  await store.sagaTask.toPromise();
  const { details: detailsData } = store.getState();
  return {
    props: {
      product: detailsData.product,
      details: detailsData.details
    },
  };
});

DetailsPage.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    price: PropTypes.string,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ).isRequired,
    mode: PropTypes.string.isRequired,
    developer: PropTypes.string.isRequired,
    currentPrice: PropTypes.string.isRequired,
    system_requirement: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        operational_system: PropTypes.string,
        storage: PropTypes.string,
        processor: PropTypes.string,
        memory: PropTypes.string,
        video_board: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  details: PropTypes.shape({
    banner: PropTypes.string,
  }).isRequired
};

export default DetailsPage;
