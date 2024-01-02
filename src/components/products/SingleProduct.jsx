import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SingleProduct.module.css";

function SingleProduct(props) {
  const { title, description, imageUrl, price, id, discountedPrice } =
    props.post;

  let isDiscounted = false;

  if (discountedPrice < price) {
    isDiscounted = true;
  }

  console.log(isDiscounted);
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imageUrl} alt="image of " />
      <div>
        {isDiscounted ? (
          <div>
            {" "}
            <p>discount of {price - discountedPrice} $</p>{" "}
            <p>Actual Price: {discountedPrice} $</p>{" "}
          </div>
        ) : (
          <p>Price: {price} $</p>
        )}
      </div>
      <Link to={`product/${id}`}>See detail</Link>
    </div>
  );
}

export default SingleProduct;
