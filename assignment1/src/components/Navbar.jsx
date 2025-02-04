import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogin = () => navigate("/login");
  const handleRegister = () => navigate("/register");

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">CR Wala</Link>
      </div>

      
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

   
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/case-studies">Case Studies</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
      </ul>
    </nav>
  );
};

export default Navbar;
