import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const BigCard = ({ image, description, categories, mode, developer }) => (
  <S.WrapperBigCard>
    <S.WrapperDescription>
      <div>
        <img src={image} alt="game" />
      </div>
      <S.Description>
        <h3>
          <div />
          Decription
        </h3>
        <p>{description}</p>
      </S.Description>
    </S.WrapperDescription>
    <S.WrapperGameDetails>
      <h3>
        <div />
        Game details
      </h3>
      <S.Information>
        <div>
          <h4>Developer</h4>
          <p>{developer}</p>
        </div>
        <div>
          <h4>Mode</h4>
          <p>{mode}</p>
        </div>
        <div>
          <h4>Genre</h4>
          {categories.map(({ name }) => (
            <p>{name}</p>
          ))}
        </div>
      </S.Information>
    </S.WrapperGameDetails>
  </S.WrapperBigCard>
);

BigCard.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  mode: PropTypes.string.isRequired,
  developer: PropTypes.string.isRequired,
};

export default BigCard;
