import React from "react";
import PropTypes from "prop-types";
import IconWish from "components/core/IconWish";

import * as S from "./styled";

const Card = ({ image, title, company, price }) => (
  <S.WrapperCard>
    <S.WrapperImage>
      <img 
        src={image.url} 
        alt={image.alt} 
        title={image.title}
      />
    </S.WrapperImage>
    <S.WrapperText>
      <S.Text>
        <h3>{title}</h3>
        <IconWish />
      </S.Text>
      <p>{company}</p>
      <S.WrapperBuy>
        <S.ContentSpan>
          <span>{price}</span>
        </S.ContentSpan>
      </S.WrapperBuy>
    </S.WrapperText>
  </S.WrapperCard>
);

Card.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;