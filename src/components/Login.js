import React, { useState } from "react";
import { loginUser } from "../api/authService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(form);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Giriş başarısız! Bilgileri kontrol edin.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="username"
          placeholder="Kullanıcı Adı"
          value={form.username}
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
        <button type="submit" style={styles.button}>Giriş Yap</button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: { maxWidth: "400px", margin: "50px auto", textAlign: "center" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: { padding: "10px", fontSize: "16px" },
  button: { padding: "10px", background: "#388e3c", color: "white", border: "none" },
  error: { color: "red" },
};

export default Login;
