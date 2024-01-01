import React from "react";
import { Link } from "react-router-dom";

function SingleProduct(props) {
  const { title, description, imageUrl, price, id, discountedPrice } =
    props.post;

  // const params = useParams();
  // console.log(params);
  console.log("hi");
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imageUrl} alt="image of " />
      {/* <p>{price}</p> */}
      <p>{discountedPrice}</p>
      <Link to={`product/${id}`}>See detail</Link>
    </div>
  );
}

export default SingleProduct;
