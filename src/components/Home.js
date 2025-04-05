import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext"; 

function Home() {
  const { user, updateUserName } = useUser(); 
  const [newName, setNewName] = useState("");

  const handleChangeName = () => {
    if (newName.trim() !== "") {
      updateUserName(newName);
      setNewName("");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Welcome, {user.name}!</h1> 
      <img src="/images/welcome.png" alt="Welcome" style={styles.image} />
      <p style={styles.exploreText}>Explore our products:</p>

      <div style={styles.nameChangeContainer}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter new name"
          style={styles.input}
        />
        <button onClick={handleChangeName} style={styles.button}>
          Change Name
        </button>
      </div>

      <div style={styles.linkContainer}>
        <Link to="/categories" style={styles.link}>Browse Categories</Link>
        <Link to="/about" style={styles.link}>About Us</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "20px" },
  image: { width: "100%", maxWidth: "600px", borderRadius: "10px" },
  exploreText: { fontSize: "18px", fontWeight: "bold" },
  nameChangeContainer: { marginTop: "20px" },
  input: { padding: "10px", marginRight: "10px", borderRadius: "5px", border: "1px solid #ccc" },
  button: { padding: "10px", background: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" },
  linkContainer: { display: "flex", justifyContent: "center", gap: "15px", marginTop: "20px" },
  link: { textDecoration: "none", fontSize: "16px", fontWeight: "bold", color: "#ffffff", padding: "10px 20px", backgroundColor: "#007bff", borderRadius: "5px" }
};

export default Home;
