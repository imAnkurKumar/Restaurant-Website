import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
function App() {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCartHandler = () => {
    setCartIsOpen(true);
  };

  const closeCartHandler = () => {
    setCartIsOpen(false);
  };

  return (
    <>
      {cartIsOpen && <Cart onClose={closeCartHandler} />}
      <Header onShowCart={openCartHandler} />
      <Meals />
    </>
  );
}

export default App;
