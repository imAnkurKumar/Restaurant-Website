import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <form>
      <Input
        label="Amount"
        input={{
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
        +Add
      </button>
    </form>
  );
};

export default MealItemForm;
