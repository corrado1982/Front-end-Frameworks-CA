import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { url } from "../constants/api";

function ProductPage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`${url}/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>Price: {data.price}</p>
      <p>Discount Price: {data.discountedPrice}</p>
      <p>Rating: {data.rating}</p>
      <img src={data.imageUrl} alt="image of {data.imageUrl}" />
    </div>
  );
}
// const [posts, setPosts] = useState([]);
// useEffect(() => {
//   async function getItemData() {
//     const response = await fetch(url);
//     const json = await response.json();
//     setPosts(json);
//     console.log(json);
//   }
//   getItemData();
// }, []);
// // const params = useParams();
// // console.log(params);
// // console.log("hi");
// return <div>product Page</div>;

export default ProductPage;
