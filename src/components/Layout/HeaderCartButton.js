import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={props.onClick}>
      <span>Your Cart</span>
      <span className="ml-2 bg-orange-500 text-white rounded-full px-2 py-1 text-sm">
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
