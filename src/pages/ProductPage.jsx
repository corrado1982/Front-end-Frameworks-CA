import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { url } from "../constants/api";
import styles from "../components/products/SingleProduct.module.css";
import container from "../components/products/ProductList.module.css";
import { useCart } from "../context/CartContext";
import Button from "../styles/Button";

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

  const { title, description, discountedPrice, rating, imageUrl, reviews } =
    data;

  const { addToCart } = useCart();

  return (
    <div className={container.productcontainer}>
      <div className={styles.card}>
        <h2>{title}</h2>
        <p>{description}</p>

        <p>Price: {discountedPrice}</p>
        <p>Rating: {rating}</p>
        <img src={imageUrl} alt="image of {data.imageUrl}" />
        <Button onClick={() => addToCart(data)}>add to cart</Button>
        <div>
          {reviews.map((review) => (
            <div className={styles.reviewstyle}>
              <div>
                <h2>{review.username}</h2>
                <p>Rating: {review.rating}</p>
              </div>
              <p>{review.description}</p>
            </div>
          ))}
        </div>
      </div>
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
