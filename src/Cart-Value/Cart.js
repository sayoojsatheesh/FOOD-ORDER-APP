import "./Cart.css";
import { Fragment, useState } from "react";
import CartData from "../Store/CartData";
import { useContext } from "react";
const Cart = (props) => {
  const cartctx = useContext(CartData);
  const[order,setorder]=useState(false);
  let orderdata=[cartctx.items];
  orderdata.push(cartctx.total.toFixed(2));
  



  async function uploadmealsdata() {
    if(cartctx.items.length === 0){
      setorder(false);
      return;
    }
    const response = fetch(
      "https://food-order-9aeb4-default-rtdb.firebaseio.com/order.json",
      {
        method: "post",
        body: JSON.stringify(orderdata),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    setorder(true);
    cartctx.removeitems();
  }

  const cartlist = cartctx.items.map((x) => {
    return (
      <Fragment key={x.key}>
        <div className="cart-card">
          <div className="cart-main">
            <li className="food-item">{x.name}</li>
            <li className="food-price">{x.price}</li>
            <div className="cart-b">
              <span>{(x.price * x.amount).toFixed(2)}</span>
            </div>
            <li className="cart-qty">x{x.amount}</li>
          </div>
        </div>
      </Fragment>
    );
  });
  return (
    <Fragment>
      <div className="cart-card">
        {order &&
          <p>ORDER SUCCESSFUL</p>
        }
        {cartlist}
        <div className="cart-total">
          <li>TOTAL AMOUNT</li>
          <li className="cart-total-amount">${cartctx.total.toFixed(2)}</li>

          <div className="cart-card-b">
            <button className="close" onClick={props.onclose}>
              CLOSE
            </button>
            <button className="order" onClick={cartctx.removeitems}>
              CLEAR CART
            </button>
            <button className="order" onClick={uploadmealsdata}>
              ORDER
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Cart;
