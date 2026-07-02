import { useRef } from "react";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = +amountInputRef.current.value;

    props.onAddToCart(enteredAmount);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          type: "number",
          defaultValue: "1",
          min: "1",
          max: "5",
        }}
      />

      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
