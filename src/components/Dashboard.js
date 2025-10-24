import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // ✅ named import

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // token yoksa login sayfasına yönlendir
      navigate("/login");
    } else {
      try {
        // token varsa decode et ve username al
        const decoded = jwtDecode(token);
        setUsername(decoded.sub); // genellikle JWT subject alanı username olur
      } catch (err) {
        // token geçersizse login sayfasına yönlendir
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <h2>Hoş geldin, {username}!</h2>
      <button onClick={handleLogout} style={styles.button}>Çıkış Yap</button>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", marginTop: "50px" },
  button: { padding: "10px 20px", marginTop: "20px", background: "#d32f2f", color: "white", border: "none" },
};

export default Dashboard;
