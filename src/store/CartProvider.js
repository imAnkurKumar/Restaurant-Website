import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCartHandler = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                amount: cartItem.amount + item.amount,
              }
            : cartItem,
        );
      }

      return [...prevItems, item];
    });
  };

  const removeItemFromCartHandler = (id) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === id);

      if (!existingItem) return prevItems;

      if (existingItem.amount === 1) {
        return prevItems.filter((item) => item.id !== id);
      }

      return prevItems.map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item,
      );
    });
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.amount,
    0,
  );

  const cartContext = {
    items: cartItems,
    totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
