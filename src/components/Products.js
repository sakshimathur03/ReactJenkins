import React from "react";
import { useParams, Link } from "react-router-dom";

const products = [
  { id: 1, name: "Modern Fabric Sofa", price: "$499", category: "Living Room", image: "/images/Modern.jpeg" },
  { id: 2, name: "Recliner Sofa", price: "$599", category: "Living Room", image: "/images/Recliner.jpeg" },
  { id: 3, name: "Coffee Table", price: "$199", category: "Living Room", image: "/images/coffee.jpeg" },
  { id: 4, name: "TV Stand", price: "$299", category: "Living Room", image: "/images/TV.jpeg" },
  { id: 5, name: "King Size Bed", price: "$799", category: "Bedroom", image: "/images/King.jpeg" },
  { id: 6, name: "Wooden Wardrobe", price: "$699", category: "Bedroom", image: "/images/Wooden.jpeg" },
  { id: 7, name: "Dining Table Set", price: "$899", category: "Dining Room", image: "/images/Dining_Table.jpeg" },
  { id: 8, name: "Office Chair", price: "$299", category: "Office", image: "/images/Office_Chair.jpeg" }
];

const Products = () => {
  const { categoryName } = useParams();
  
  const filteredProducts = products.filter((product) => product.category === categoryName);

  return (
    <div style={styles.container}>
      <h2>Products in: {categoryName}</h2>
      <div style={styles.grid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} style={styles.card}>
              <img src={product.image} alt={product.name} style={styles.image} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <Link to={`/product/${product.id}`} style={styles.link}>View Details</Link>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  grid: { display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" },
  card: { padding: "20px", border: "1px solid #ddd", borderRadius: "10px", textAlign: "center" },
  image: { width: "200px", height: "150px", borderRadius: "10px" },
  link: { textDecoration: "none", color: "blue", fontWeight: "bold" }
};

export default Products;
