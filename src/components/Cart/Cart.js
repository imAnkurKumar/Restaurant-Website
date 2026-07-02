import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[
        {
          id: "c1",
          name: "Sushi",
          amount: 2,
          price: 12.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className="flex justify-between items-center mt-4">
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          Close
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
