import React from "react";
import PropTypes from "prop-types";
import DetailsCard from "components/core/DetailsCard";

import * as S from "./styled";

const Details = ({
  title,
  description,
  imageUrl,
  price,
  categories,
  mode,
  developer,
  currentPrice,
  systemRequirenment,
  banner
}) => (
  <S.WrapperDetails bg={banner}>
    <DetailsCard title={title} description={description} price={price} />
  </S.WrapperDetails>
);

Details.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  mode: PropTypes.string.isRequired,
  developer: PropTypes.string.isRequired,
  currentPrice: PropTypes.string.isRequired,
  systemRequirenment: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      operational_system: PropTypes.string,
      storage: PropTypes.string,
      processor: PropTypes.string,
      memory: PropTypes.string,
      video_board: PropTypes.string,
    }),
  ).isRequired,
  banner: PropTypes.string.isRequired,
};

export default Details;
