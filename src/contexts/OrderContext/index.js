import { createContext } from "react";
import PropTypes from "prop-types";

export const OrderContext = createContext({});

export const OrderProvider = ({ children }) => {
  console.log(children)
  return (
    <OrderContext.Provider>
      {children}
    </OrderContext.Provider>
  );
};

OrderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};