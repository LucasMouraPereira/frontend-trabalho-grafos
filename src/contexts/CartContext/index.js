import { createContext, useState } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const cartTotal = cart?.reduce((total, { price = 0.0 }) => total + parseFloat(price, 10), 0.0);
  const amountOfItems = (id) => cart.filter((item) => item.id === id).length;
  const isAuth = Cookies.get("token");
  const addToCart = (item) => {
    setCart((currentCart) => [...currentCart, item]);
    Cookies.set("LENGTH_CARD", cart.length, { expires: 60 })
    Cookies.set("CART_TO_PRODUCTS", cart, { expires: 60 });
    Cookies.set("CART_TOTAL", cartTotal, { expires: 60 });
  };

  const length = Cookies.get("LENGTH_CARD");
  const lengthCard = typeof length !== "undefined" && JSON?.parse(length);
  const cookiesCarts = Cookies.get("CART_TO_PRODUCTS");
  const cartsInfo = typeof length !== "undefined" && JSON?.parse(cookiesCarts);
  const totalValue = Cookies.get("CART_TOTAL");
  const total = typeof length !== "undefined" && JSON?.parse(totalValue);
  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === item.id);

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };
  return (
    <CartContext.Provider value={{ cart, cartTotal, cartsInfo, lengthCard, total, addToCart, amountOfItems, removeFromCart, isAuth }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
