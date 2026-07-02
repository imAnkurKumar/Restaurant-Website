import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
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
      <Card>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {dummyMeals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
