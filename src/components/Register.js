import React, { useState } from "react";
import { registerUser } from "../api/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(form);
      localStorage.setItem("token", data.token);
      navigate("/login");
    } catch (err) {
      setError("Kayıt başarısız. Tekrar deneyin.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="username"
          placeholder="Kullanıcı Adı"
          value={form.username}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          name="password"
          type="password"
          placeholder="Şifre"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Kayıt Ol</button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: { maxWidth: "400px", margin: "50px auto", textAlign: "center" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: { padding: "10px", fontSize: "16px" },
  button: { padding: "10px", background: "#1976d2", color: "white", border: "none" },
  error: { color: "red" },
};

export default Register;
