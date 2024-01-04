import { useCart } from "../../context/CartContext";

const CartList = () => {
  const { cart, addToCart, removeFromCart, totalPrice } = useCart();

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.discountedPrice}</p>

          <p>Quantity: {item.quantity}</p>
          <button onClick={() => addToCart(item)}>add</button>
          <button onClick={() => removeFromCart(item.id)}>revove</button>
        </div>
      ))}
      <p>Total : {totalPrice}</p>
      <button>Pay Now</button>
    </div>
  );
};

export default CartList;
