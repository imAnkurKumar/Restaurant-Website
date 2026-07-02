import mealsImage from "../../assets/meals.jpg";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 z-50 flex h-20 w-full items-center justify-between bg-orange-700 px-12 text-white shadow-lg">
        <h1 className="text-3xl font-bold">ReactMeals</h1>

        <button className="rounded-full bg-orange-900 px-6 py-3 font-semibold transition hover:bg-orange-800">
          Cart
        </button>
      </header>

      <div className="mt-20 h-[25rem] w-full overflow-hidden">
        <img
          src={mealsImage}
          alt="Meals"
          className="h-full w-full -rotate-3 scale-110 object-cover"
        />
      </div>
    </>
  );
};

export default Header;
