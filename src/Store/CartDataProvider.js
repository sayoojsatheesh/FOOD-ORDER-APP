import CartData from "./CartData";
import { useReducer } from "react";
const reducerfn = (state, action) => {
  if (action.type === "ADD") {
    const upadtedtotal = state.total + action.item.amount * action.item.price;
    const existinditem = state.items.findIndex(
      (item) => item.key === action.item.key
    );
    const itemindex = state.items[existinditem];
    let updateddata;
    if (itemindex) {
      const updateditem = {
        ...itemindex,
        amount: itemindex.amount + action.item.amount,
      };
      updateddata = [...state.items];
      updateddata[existinditem] = updateditem;
    } else {
     
       updateddata = state.items.concat(action.item);
    }
    

    return {
      items: updateddata,
      total: upadtedtotal,
    };
  }

  if (action.type === "REMOVE") {
    console.log(action.id);
    return {
      items: [],
      total: 0,
    };
  }

  return cartdefalut;
};

const cartdefalut = {
  items: [],
  total: 0,
};

const CartDataProvider = (props) => {
  const [cartcurrent, dispacher] = useReducer(reducerfn, cartdefalut);
  const additems = (item) => {
    dispacher({ type: "ADD", item: item });
  };
  const removeitems = (id) => {
    dispacher({ type: "REMOVE", id: id });
  };
  const cartitems = {
    items: cartcurrent.items,
    total: cartcurrent.total,
    additems: additems,
    removeitems: removeitems,
  };

  return (
    <CartData.Provider value={cartitems}>{props.children}</CartData.Provider>
  );
};
export default CartDataProvider;
