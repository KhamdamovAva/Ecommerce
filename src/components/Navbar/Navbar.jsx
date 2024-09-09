import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.scss";

function Navbar() {
  return (
    <>
        <nav className="navbar">
          <h1>React Ecommerce</h1>
          <div className="pages">
            <p className="page">
              <NavLink to="/" className="page__link">Home</NavLink>
            </p>
            <p className="page">
              <NavLink to="/products" className="page__link">Products</NavLink>
            </p>
            <p className="page">
              <NavLink to="/about" className="page__link">About</NavLink>
            </p>
            <p className="page">
              <NavLink to="/contact" className="page__link">Contact</NavLink>
            </p>
          </div>
          <div className="buttons">
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn">Register</button>
            </Link>
            <Link to="/cart">
              <button className="btn">Cart</button>
            </Link>
          </div>
        </nav>
    </>
  );
}

export default Navbar;
