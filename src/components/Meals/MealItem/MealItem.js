const MealItem = (props) => {
  return (
    <li key={props.meal.id}>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-bold">{props.meal.name}</h3>
        <p className="text-gray-600">{props.meal.description}</p>
        <p className="text-xl font-bold">${props.meal.price.toFixed(2)}</p>
      </div>
    </li>
  );
};

export default MealItem;
