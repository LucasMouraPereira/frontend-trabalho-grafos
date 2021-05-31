import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { DETAILS } from "utils/constants/urls";
import Button from "components/core/Button";
import { CartContext } from "contexts/CartContext";
import IconWish from "components/core/IconWish";
import IconShoppingCart from "components/core/IconShoppingCart";

import * as S from "./styled";

const Card = ({ id, image, title, company, price }) => {
  const { addToCart, isAuth } = useContext(CartContext);
  const router = useRouter();
  const setIdGame = (idGame) => {
    const href = `${DETAILS}/${idGame}`;
    router.push(href);
  };

  return (
    <S.WrapperCard>
      <S.WrapperImage>
        <img src={image} alt={title} title={title} />
      </S.WrapperImage>
      <S.WrapperText>
        <S.Text>
          <h3>{title}</h3>
          <IconWish />
        </S.Text>
        <p>{company}</p>
        <S.WrapperBuy>
          <S.ContentSpan>
            <span>{`R$ ${price.replace(".", ",")}`}</span>
          </S.ContentSpan>
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
        </S.WrapperBuy>
        <Button onClick={() => setIdGame(id)} text="See More" />
      </S.WrapperText>
    </S.WrapperCard>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;
