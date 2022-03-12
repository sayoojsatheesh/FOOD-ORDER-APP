import react, { useContext, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./MealsData.css";
import Button from "../UI/Button";
import CartData from "../Store/CartData";
const MealsData = (props) => {
  const cartctx = useContext(CartData);
  const [amount, setamount] = useState(1);
  const amounthandler = (event) => {
    event.preventDefault();
    setamount(event.target.value);
  };
  const formhandler = (event) => {
    event.preventDefault();
    const item = {
      amount: +amount,
      price: props.price,
      name: props.name,
      key: props.k,
    };
    cartctx.additems(item);
    setamount(1);
  };
  return (
    <Fragment>
      <ul className="meals-ul">
        <li className="meals-li">
          <div className="meals-container">
            <div>
              <h4>{props.name}</h4>
              <h6>{props.description}</h6>
              <h5> ${props.price}</h5>
            </div>
            <div>
              <form onSubmit={formhandler}>
                <div className="form-cs">
                  <label>AMOUNT</label>{" "}
                  <input
                    type="number"
                    value={amount}
                    onChange={amounthandler}
                    min="1"
                    max="5"
                    step="1"
                  ></input>
                </div>
                <Button className="meals-button" type="sumbit">
                  + ADD
                </Button>
              </form>
            </div>
          </div>
        </li>
      </ul>
    </Fragment>
  );
};
export default MealsData;
