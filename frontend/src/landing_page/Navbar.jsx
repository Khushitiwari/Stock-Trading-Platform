
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom sticky-top">
      <div className="container">
        
        <NavLink className="navbar-brand" to="/">
          <img
            src="/src/assets/logo.svg"
            alt="Logo"
            className="img-fluid"
            style={{ height: "20px" }}
          />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link ms-lg-3" to="/signup">Signup</NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link ms-lg-3" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link ms-lg-3" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link ms-lg-3" to="/product">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link ms-lg-3" to="/pricing">Pricing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link ms-lg-3" to="/support">Support</NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
