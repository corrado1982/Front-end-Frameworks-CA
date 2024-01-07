import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Button from "../../styles/Button";
import SecondaryButton from "../../styles/SecondaryButton";
import styles from "./CartList.module.css";

const CartList = () => {
  const { cart, addToCart, removeFromCart, totalPrice, clearCart } = useCart();

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id} className={styles.backgroundCartItem}>
          <div>
            <h3>{item.title}</h3>
            <img src={item.imageUrl}></img>
            <p>Price: {item.discountedPrice} NOK</p>
          </div>
          <p>Quantity: {item.quantity}</p>
          <div>
            <Button onClick={() => addToCart(item)}>Add</Button>
            <SecondaryButton onClick={() => removeFromCart(item.id)}>
              Remove
            </SecondaryButton>
          </div>
        </div>
      ))}
      <div className={styles.checkOutDiv}>
        <p>Total : {totalPrice} NOK</p>
        {/* removed:refresh="true" */}
        <Button onClick={clearCart}>
          <Link to="/success">pay now</Link>
        </Button>
      </div>
    </div>
  );
};

export default CartList;
