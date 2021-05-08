import React, { useState } from "react";
import PropTypes from "prop-types";

import IconFavoriteBorder from "utils/static/svg/favorite-border.svg";
import IconFavoriteFull from "utils/static/svg/favorite-full.svg";

const IconWish = ({ descriptionIcon }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const sendFavorite = () => {
    if(isFavorite){
      setIsFavorite(false);
    }
    setIsFavorite(true);
  };
  return(
    <div>
      <div onClick = {() => sendFavorite()}>
        {isFavorite 
          ? 
            <IconFavoriteBorder /> 
          : 
            <IconFavoriteFull />
          }
      </div>
      {descriptionIcon && <spa>{descriptionIcon}</spa>}
    </div>
  );
};

IconWish.propTypes = {
  descriptionIcon: PropTypes.string.isRequired,
};

export default IconWish;