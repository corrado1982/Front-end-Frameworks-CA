import { useEffect, useState } from "react";
import { url } from "../../constants/api";
// import ProductPage from "../../pages/ProductPage";
import SingleProduct from "./SingleProduct";
import styles from "./ProductList.module.css";

function ProductList() {
  const [posts, setPosts] = useState([]);
  const [searchItem, setSearchItems] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();
      setPosts(json);
      setFilteredItems(json);
      console.log(json);
    }
    getData();
  }, []);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItems(searchTerm);
    console.log(searchTerm);

    const filteredItem = posts.filter((post) =>
      post.title.toLowerCase().startsWith(searchTerm.trim().toLowerCase())
    );

    setFilteredItems(filteredItem);
  };
  //provo a levare un div
  return (
    <div>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder="Type to search"
      />
      {/* <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul> */}
      <div className={styles.productcontainer}>
        {filteredItems.map((item) => {
          console.log(item);
          return <SingleProduct key={item.id} post={item} />;
        })}
      </div>
    </div>
  );
}

export default ProductList;
