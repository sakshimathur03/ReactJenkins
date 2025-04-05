import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Living Room", image: "/images/livingRoom.jpg" },
  { name: "Bedroom", image: "/images/bedRoom.jpeg" },
  { name: "Dining Room", image: "/images/dining.jpeg" },
  { name: "Office", image: "/images/office.png" }
];

const Categories = () => {
  return (
    <div style={styles.container}>
      <h2>Categories</h2>
      <div style={styles.grid}>
        {categories.map((category) => (
          <div key={category.name} style={styles.card}>
            <img src={category.image} alt={category.name} style={styles.image} />
            <h3>{category.name}</h3>
            <Link to={`/products/${category.name}`} style={styles.link}>
              View Products
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  grid: { display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" },
  card: { padding: "20px", border: "1px solid #ddd", borderRadius: "10px", textAlign: "center" },
  image: { width: "200px", height: "150px", borderRadius: "10px" },
  link: { textDecoration: "none", color: "blue", fontWeight: "bold" }
};

export default Categories;
