import React from "react";
import PropTypes from "prop-types";
import IconWish from "components/core/IconWish";

import * as S from "./styled";

const Card = ({ image, titleImage, alt, title, descriptionIcon, company, price }) => (
  <S.WrapperCard>
    <S.WrapperImage>
      <img 
        src={image} 
        alt={alt} 
        title={titleImage}
      />
    </S.WrapperImage>
    <S.WrapperText>
      <S.Text>
        <h3>{title}</h3>
        <IconWish 
          descriptionIcon={descriptionIcon}
        />
      </S.Text>
      <p>{company}</p>
    </S.WrapperText>
    <S.WrapperBuy>
      <S.ContentSpan>
        <span>{price}</span>
      </S.ContentSpan>
      <S.ContentIcon>
        lucas
      </S.ContentIcon>
    </S.WrapperBuy>
  </S.WrapperCard>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  titleImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  descriptionIcon: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;