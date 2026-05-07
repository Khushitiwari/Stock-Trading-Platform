


import React from "react";
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";

function Navbar() {
  const [cookies, removeCookie] = useCookies(["token"]);

  const handleLogout = () => {
    removeCookie("token", { path: "/", domain: "localhost" }); // ← domain must match how it was set
    window.location.href = "http://localhost:5175/login";
  };

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

            {/* NOT logged in → show Login and Signup */}
            {!cookies.token && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link ms-lg-3" to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link ms-lg-3" to="/signup">Signup</NavLink>
                </li>
              </>
            )}

            {/* Logged in → show Dashboard link and Logout */}
            {cookies.token && (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link ms-lg-3"
                    href="http://localhost:3000"
                  >
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-danger ms-lg-3"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;