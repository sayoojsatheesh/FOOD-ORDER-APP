import Header from "./Header/Header";
import Mealslist from "./Meals/MealsList";
import Modal from "./Modal/Modal";
import Cart from "./Cart-Value/Cart";
import reactDom from "react-dom";
import { useState } from "react";
import CartDataProvider from "./Store/CartDataProvider";

function App() {
  const[show,setshow]=useState(false);
  const showhanler=()=>{
  setshow(true);
  }

  const closehandler=()=>{
    setshow(false);
  }
 
  const modalportal = reactDom.createPortal(
    <Modal >
      <Cart onclose={closehandler} />
    </Modal>,
    document.getElementById("modal-root")
  );
  return (
    <CartDataProvider>
      {show && modalportal}
      <Header onshow={showhanler} />
      <Mealslist />
    </CartDataProvider>
  );
}

export default App;
