import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="pt-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-md-4 pt-footer-brand">
            <img src="/src/assets/logo.svg" alt="PulseTrade" />
            <p className="small mb-0">
              &copy; 2024–2026 PulseTrade Technologies Pvt. Ltd. All rights reserved.
            </p>
          </div>

          <div className="col-6 col-md-2">
            <h6>Platform</h6>
            <Link to="/product">Products</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/about">About us</Link>
            <a href="#">Careers</a>
          </div>

          <div className="col-6 col-md-2">
            <h6>Support</h6>
            <Link to="/support">Help center</Link>
            <a href="#">Contact</a>
            <a href="#">API docs</a>
            <a href="#">Status page</a>
          </div>

          <div className="col-6 col-md-2">
            <h6>Legal</h6>
            <a href="#">Privacy policy</a>
            <a href="#">Terms of service</a>
            <a href="#">Risk disclosure</a>
            <a href="#">Compliance</a>
          </div>

          <div className="col-6 col-md-2">
            <h6>Account</h6>
            <Link to="/signup">Open account</Link>
            <Link to="/login">Login</Link>
            <a href="#">Fund transfer</a>
          </div>
        </div>

        <div className="pt-footer-bottom">
          <p className="mb-2">
            PulseTrade is a registered stock broker with SEBI (Reg. No. INZ000000000).
            Depository services through CDSL/NSDL. Registered office: Bengaluru, Karnataka, India.
          </p>
          <p className="mb-0">
            Investments in securities market are subject to market risks. Read all related
            documents carefully before investing. PulseTrade does not provide stock tips or
            authorized third-party trading services.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
