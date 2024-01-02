import { useEffect, useState } from "react";
import { url } from "../../constants/api";
// import ProductPage from "../../pages/ProductPage";
import SingleProduct from "./SingleProduct";
import styles from "./ProductList.module.css";

function ProductList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();
      setPosts(json);
      console.log(json);
    }
    getData();
  }, []);
  //provo a levare un div
  return (
    <div className={styles.productcontainer}>
      {posts.map((post) => {
        console.log(post);
        return <SingleProduct key={post.id} post={post} />;
      })}
    </div>
  );
}

export default ProductList;
