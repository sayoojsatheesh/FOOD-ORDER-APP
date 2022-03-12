import React from "react";

const CartData = React.createContext({
  items: [],
  total: 0,
  additems: () => {},
  removeitems: () => {},
});

export default CartData;
