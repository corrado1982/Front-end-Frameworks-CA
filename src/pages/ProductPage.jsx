import React from "react";
import { useParams } from "react-router-dom";

function ProductPage(props) {
  const params = useParams();
  console.log(params);
  console.log("hi");
  return <div>product Page</div>;
}

export default ProductPage;
