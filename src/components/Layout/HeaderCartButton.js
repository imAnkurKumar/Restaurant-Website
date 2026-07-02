const HeaderCartButton = (props) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={props.onClick}>
      <span>Your Cart</span>
      <span className="ml-2 bg-orange-500 text-white rounded-full px-2 py-1 text-sm">
        0
      </span>
    </button>
  );
};

export default HeaderCartButton;
