import React, { useState } from "react";
import { Link } from "react-router-dom";

function SingleProduct(props) {
  const { title, description, imageUrl, price, id, discountedPrice } =
    props.post;

  let isDiscounted = false;

  if (discountedPrice < price) {
    isDiscounted = true;
  }

  console.log(isDiscounted);
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imageUrl} alt="image of " />
      <div>
        {isDiscounted ? (
          <div>
            {" "}
            <p>{discountedPrice}</p>{" "}
            <p>discounted: {price - discountedPrice}</p>{" "}
          </div>
        ) : (
          <p>{price}</p>
        )}
      </div>
      <Link to={`product/${id}`}>See detail</Link>
    </div>
  );
}

export default SingleProduct;
