import axios from "axios";
import { useEffect, useState } from "react";
import CardProductsList from "./CardProductList";
import { Link } from "react-router-dom";

const ProductsList = () => {
  let endpoint = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = axios.get(endpoint);
      const { data } = await res;
      console.log(data);
      setProducts(data);
    };

    getData();
  }, [endpoint]);

  return (
    <>
      <Link to="/favoritos">Ver mis favoritos</Link>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "25px",
          justifyContent: "center",
        }}
      >
        {products.map((product) => {
          return <CardProductsList key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductsList;
