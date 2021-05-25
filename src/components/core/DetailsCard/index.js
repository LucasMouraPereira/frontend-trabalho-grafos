import React from "react";
import PropTypes from "prop-types";
import IconWish from "components/core/IconWish";

import * as S from "./styled";

const DetailsCard = ({
  title,
  description,
  price,
}) => (
  <S.WrapperDetailsCard>
    <S.WrapperText>
      <h2>{title}</h2>
      <S.Line />
      <p>{description}</p>
    </S.WrapperText>
    <S.Info>
      <S.ContentSpan>
        <span>{`R$ ${price.replace(".", ",")}`}</span>
      </S.ContentSpan>
      <S.WrapperIcon>
        <IconWish />
        <span>Wishlist</span>
      </S.WrapperIcon>
    </S.Info>
  </S.WrapperDetailsCard>
);

DetailsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default DetailsCard;
