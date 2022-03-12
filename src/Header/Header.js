import { Fragment } from "react/cjs/react.production.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {  useContext } from "react";
import "./Header.css";
import imagerest from "../assets/food1.jfif";
import Button from "../UI/Button";
import CartData from "../Store/CartData";
const Header = (props) => {
  const cartctx=useContext(CartData);
  const cartvalue=cartctx.items.reduce((cartvalueupdated,item)=>{
    return cartvalueupdated + item.amount;
  },0)
  return (
    <Fragment>
      <header className="header">
        <h2>ORDERMEALS</h2>
        <Button className="cart-button" onClick={props.onshow}>
          <span className="cart-icon">
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
          <span>YOUR CART</span> <span className="cart-value">{+cartvalue}</span>
        </Button>
      </header>
      <div className="header-image">
        <img src={imagerest} alt="waiting" />
      </div>
    </Fragment>
  );
};

export default Header;
