const dummyMeals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },

  {
    id: "m5",
    name: "Pasta",
    description: "Italian classic!",
    price: 14.99,
  },
];

const AvailableMeals = () => {
  return (
    <section className="max-w-4xl mx-auto py-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {dummyMeals.map((meal) => (
          <li key={meal.id} className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-bold">{meal.name}</h3>
            <p className="text-gray-600">{meal.description}</p>
            <p className="text-xl font-bold">${meal.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default AvailableMeals;
