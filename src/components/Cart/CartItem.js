import { useContext } from "react";
import CartContext from "../../store/cart-context";

const CartItem = ({ item }) => {
  const cartCtx = useContext(CartContext);

  return (
    <li className="flex justify-between items-center py-4 border-b">
      <div>
        <h2 className="font-bold">{item.name}</h2>
        <div>
          ${item.price.toFixed(2)} x {item.amount}
        </div>
      </div>

      <div className="space-x-2">
        <button
          onClick={() => cartCtx.removeItem(item.id)}
          className="px-3 py-1 border rounded">
          -
        </button>

        <button
          onClick={() =>
            cartCtx.addItem({
              ...item,
              amount: 1,
            })
          }
          className="px-3 py-1 border rounded">
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
