import { createContext } from "react";
import Cookies from "js-cookie";
import api from "services/api";
import PropTypes from "prop-types";

export const OrderContext = createContext({});

export const OrderProvider = ({ children }) => {
  const handleSuccessPayment = async (creditCard) => {
    const cookiesCarts = Cookies.get("CART_TO_PRODUCTS");
    Cookies.get("token");
    const cartsInfo = typeof cookiesCarts !== "undefined" && JSON?.parse(cookiesCarts);
    const arr = [];
    const reduced = [];
    cartsInfo.forEach(element => {
      const num = cartsInfo.filter(obj => obj.id === element.id);
      const items = {
        product_id: element.id,
        quantity: num.length
      }
      arr.push(items);
    });
    arr.forEach((item) => {
      // eslint-disable-next-line arrow-body-style
      const duplicated = reduced.findIndex(redItem => {
        return item.product_id === redItem.product_id;
      }) > -1;
      if(!duplicated) {
        reduced.push(item);
      }
    });
    const { data: token } = await api.post("orders", {
      order: {
        payment_type: "credit_card",
        installments: 1,
        credit_card_number: `${creditCard}`,
        order_items: `${reduced}`,
      },
      body: {
        
      }
    });
    console.log(token);
  };

  return (
    <OrderContext.Provider value={{ handleSuccessPayment }}>
      {children}
    </OrderContext.Provider>
  );
};

OrderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
