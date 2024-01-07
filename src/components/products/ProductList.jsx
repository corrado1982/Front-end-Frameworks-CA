import { useEffect, useState } from "react";
import { url } from "../../constants/api";
import SingleProduct from "./SingleProduct";
import styles from "./ProductList.module.css";
import { Link } from "react-router-dom";

function ProductList() {
  const [posts, setPosts] = useState([]);
  const [searchItems, setSearchItems] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [filteredTexts, setFilteredTexts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setPosts(json);
        setFilteredItems(json);
        setFilteredTexts(filteredTexts);
        console.log(json);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    getData();
  }, []);
  if (isLoading) {
    return <div>Loading posts</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItems(searchTerm);
    console.log(searchTerm.length);
    console.log(searchTerm.typeOf);

    const filteredTexts = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );

    const filteredItem = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );

    setFilteredItems(filteredItem);
    setFilteredTexts(filteredTexts);
  };

  return (
    <div>
      <input
        type="text"
        value={searchItems}
        onChange={handleInputChange}
        placeholder="Type to search"
      />

      {/* <ul>
        {filteredTexts.map((item) => (
          <div key={item.id}>
            {filteredTexts.length === 0 ? (
              <div>prova</div>
            ) : (
              <div>
                <Link to={`product/${item.id}`}>{item.title}</Link>
              </div>
            )}
          </div>
        ))}
      </ul> */}
      <div className={styles.productcontainer}>
        {filteredItems.map((item) => {
          return <SingleProduct key={item.id} post={item} />;
        })}
      </div>
    </div>
  );
}

export default ProductList;
