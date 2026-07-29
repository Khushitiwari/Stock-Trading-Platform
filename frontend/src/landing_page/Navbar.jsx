import React from "react";
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";

function Navbar() {
  const [cookies, removeCookie] = useCookies(["token"]);

  const handleLogout = () => {
    removeCookie("token", { path: "/", domain: "localhost" });
    window.location.href = "http://localhost:5175/login";
  };

  return (
    <nav className="navbar navbar-expand-lg pt-navbar sticky-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src="/src/assets/logo.svg" alt="PulseTrade" />
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
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/support">Support</NavLink>
            </li>

            {!cookies.token && (
              <>
                <li className="nav-item ms-lg-2">
                  <NavLink className="nav-link pt-btn-outline d-inline-block" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link pt-btn-gradient d-inline-block" to="/signup">
                    Get Started
                  </NavLink>
                </li>
              </>
            )}

            {cookies.token && (
              <>
                <li className="nav-item ms-lg-2">
                  <a className="nav-link pt-btn-gradient d-inline-block" href="http://localhost:3000">
                    Open Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <button className="pt-btn-outline ms-lg-2" onClick={handleLogout}>
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
