import { Link } from "react-router-dom";

function CheckOutSuccesPage() {
  return (
    <div>
      <div>
        <h1>Congratulations</h1>
        <h2>Your order will be delivered as soon as possible</h2>
      </div>
      <button>
        <Link to={"/"}>Back to shop</Link>
      </button>
    </div>
  );
}

export default CheckOutSuccesPage;
