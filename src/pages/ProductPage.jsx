import React from "react";
import { useParams } from "react-router-dom";
//una prova alternativa
function ProductPage(props) {
  const { title, description, imageUrl, price } = props.post;
  const params = useParams();
  console.log(params);
  console.log("hi");
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imageUrl} alt="image of " />
      <p>{price}</p>
    </div>
  );
}

export default ProductPage;
