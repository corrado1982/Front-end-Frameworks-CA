import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SingleProduct.module.css";
import Button from "../../styles/Button";

function SingleProduct(props) {
  const { title, description, imageUrl, price, id, discountedPrice } =
    props.post;

  let isDiscounted = false;

  if (discountedPrice < price) {
    isDiscounted = true;
  }

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imageUrl} alt="image of " />
      <div>
        {isDiscounted ? (
          <div>
            {" "}
            <p>discount of {price - discountedPrice} NOK</p>{" "}
            <p>Actual Price: {discountedPrice} NOK</p>{" "}
          </div>
        ) : (
          <p>Price: {price} NOK</p>
        )}
      </div>

      <Link to={`product/${id}`}>
        <Button>See detail</Button>
      </Link>
    </div>
  );
}

export default SingleProduct;
