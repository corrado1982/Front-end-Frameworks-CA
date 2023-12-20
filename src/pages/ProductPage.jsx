import React from "react";
import { useParams } from "react-router-dom";
//una prova alternativa
function ProductPage(props) {
  // const { title, description, imageUrl, price } = props.post;
  let params = useParams();
  console.log(params);
  console.log("hi");
  return (
    <div>
      <h2>{params.title}</h2>
      <p>{params.description}</p>
      <img src={params.imageUrl} alt="image of " />
      <p>{params.price}</p>
    </div>
  );
}

export default ProductPage;
