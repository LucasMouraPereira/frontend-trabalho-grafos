import React from "react";
import PropTypes from "prop-types";
import DetailsCard from "components/core/DetailsCard";
import BigCard from "components/core/BigCard";
import SystemDetails from "components/core/SystemDetails";

import * as S from "./styled";

const Details = ({
  title,
  description,
  imageUrl,
  price,
  categories,
  mode,
  developer,
  systemRequirement,
  banner,
}) => (
  <>
    <S.WrapperDetails bg={banner}>
      <DetailsCard title={title} description={description} price={price} />
    </S.WrapperDetails>
    <S.WrapperDetailsBigCard>
      <BigCard
        image={imageUrl}
        description={description}
        developer={developer}
        categories={categories}
        mode={mode}
      />
    </S.WrapperDetailsBigCard>
    <S.ContainerSystem>
      <SystemDetails
        name={systemRequirement.name}
        system={systemRequirement.operational_system}
        storageMemory={systemRequirement.storage}
        processor={systemRequirement.processor}
        memory={systemRequirement.memory}
        videoBoard={systemRequirement.video_board}
      />
    </S.ContainerSystem>
  </>
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
  systemRequirement: PropTypes.arrayOf(
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
