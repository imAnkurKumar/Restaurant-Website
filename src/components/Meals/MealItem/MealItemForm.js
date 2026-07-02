const MealItemForm = () => {
  return (
    <form>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-bold">Add to Cart</h3>
        <div className="flex items-center justify-between mt-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="1"
            max="10"
            defaultValue="1"
            className="border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </form>
  );
};

export default MealItemForm;
