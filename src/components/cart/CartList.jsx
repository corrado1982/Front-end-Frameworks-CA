import { useCart } from "../../context/CartContext";

const CartList = () => {
  const { cart } = useCart();

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default CartList;
