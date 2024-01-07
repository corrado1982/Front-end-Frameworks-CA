import { Link } from "react-router-dom";
import Button from "../styles/Button";
import styles from "./CheckOutSuccessPage.module.css";

function CheckOutSuccesPage() {
  return (
    <div className={styles.successFeedback}>
      <div>
        <h1>Congratulations</h1>
        <h2>Your order will be delivered as soon as possible</h2>
      </div>
      <Button>
        <Link to={"/"}>Back to shop</Link>
      </Button>
    </div>
  );
}

export default CheckOutSuccesPage;
