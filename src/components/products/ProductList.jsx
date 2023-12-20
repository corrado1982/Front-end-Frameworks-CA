import { useEffect, useState } from "react";
import { url } from "../../constants/api";
import ProductPage from "../../pages/ProductPage";

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
  return (
    <div>
      <div>Product List</div>
      <div>
        {posts.map((post) => {
          console.log(post);
          return <ProductPage key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}

export default ProductList;
