import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";

const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      amount,
      price: meal.price,
    });
  };

  return (
    <li>
      <h3>{meal.name}</h3>

      <MealItemForm onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MealItem;
