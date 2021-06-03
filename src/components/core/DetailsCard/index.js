import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "contexts/CartContext";
import IconWish from "components/core/IconWish";
import IconShoppingCart from "components/core/IconShoppingCart";

import * as S from "./styled";

const DetailsCard = ({ id, title, description, price, company, image }) => {
  const { addToCart, isAuth } = useContext(CartContext);
  return (
    <S.WrapperDetailsCard>
      <S.WrapperText>
        <h2>{title}</h2>
        <S.Line />
        <p>{description}</p>
      </S.WrapperText>
      <S.Info>
        <S.WrapperCartBuy>
          {typeof isAuth !== "undefined" && (
            <div
              role="presentation"
              onClick={() =>
                addToCart({
                  "id": id,
                  "title": title,
                  "company": company,
                  "image": image,
                  "price": price,
                })
              }
            >
              <IconShoppingCart />
            </div>
          )}

          <S.ContentSpan>
            <span>{`R$ ${price.replace(".", ",")}`}</span>
          </S.ContentSpan>
        </S.WrapperCartBuy>
        <S.WrapperIcon>
          <IconWish />
          <span>Lista de desejos</span>
        </S.WrapperIcon>
      </S.Info>
    </S.WrapperDetailsCard>
  );
};

DetailsCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default DetailsCard;
