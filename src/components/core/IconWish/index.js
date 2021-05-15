import React, { useState } from "react";
import PropTypes from "prop-types";

import IconFavoriteBorder from "utils/static/svg/favorite-border.svg";
import IconFavoriteFull from "utils/static/svg/favorite-full.svg";

import * as S from "./styled";

const IconWish = ({ descriptionIcon }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const sendFavorite = () => {
    if(isFavorite){
      setIsFavorite(false);
    }
    if(!isFavorite) {
      setIsFavorite(true);
    }
  };
  return(
    <S.WrapperIcon>
      <S.IconButton role="button" aria-hidden="true" onClick = {() => sendFavorite()}>
        {!isFavorite 
          ? 
            <IconFavoriteBorder /> 
          : 
            <IconFavoriteFull />
          }
      </S.IconButton>
      {descriptionIcon && <spa>{descriptionIcon}</spa>}
    </S.WrapperIcon>
  );
};

IconWish.propTypes = {
  descriptionIcon: PropTypes.string.isRequired,
};

export default IconWish;