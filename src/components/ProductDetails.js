import React from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Modern Fabric Sofa", price: "$499", category: "Living Room", image: "/images/Modern.jpeg", description: "A stylish modern fabric sofa perfect for any living room." },
  { id: 2, name: "Recliner Sofa", price: "$599", category: "Living Room", image: "/images/Recliner.jpeg", description: "Comfortable recliner sofa with premium leather finish." },
  { id: 3, name: "Coffee Table", price: "$199", category: "Living Room", image: "/images/coffee.jpeg", description: "Wooden coffee table with a glass top, modern design." },
  { id: 4, name: "TV Stand", price: "$299", category: "Living Room", image: "/images/TV.jpeg", description: "Minimalist TV stand with storage compartments." },
  { id: 5, name: "King Size Bed", price: "$799", category: "Bedroom", image: "/images/King.jpeg", description: "Spacious king-size bed with premium wood finish." },
  { id: 6, name: "Wooden Wardrobe", price: "$699", category: "Bedroom", image: "/images/Wooden.jpeg", description: "Large wooden wardrobe with sliding doors and mirror." },
  { id: 7, name: "Dining Table Set", price: "$899", category: "Dining Room", image: "/images/Dining_Table.jpeg", description: "Elegant dining table set with 6 chairs." },
  { id: 8, name: "Office Chair", price: "$299", category: "Office", image: "/images/Office_Chair.jpeg", description: "Ergonomic office chair with adjustable height and recline." }
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={styles.container}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={styles.image} />
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  image: { width: "400px", height: "300px", borderRadius: "10px" }
};

export default ProductDetails;
