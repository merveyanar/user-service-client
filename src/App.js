import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <nav style={styles.nav}>
        <Link to="/login">Giriş</Link> | <Link to="/register">Kayıt Ol</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Login/>}/>
      </Routes>
    </Router>
  );
}
const styles={
  nav:{ textAlign:"center",marginTop:"20px",fontSize:"18px"}
};

export default App;
