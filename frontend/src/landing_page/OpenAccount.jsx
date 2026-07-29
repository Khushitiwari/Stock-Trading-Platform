import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <section className="pt-section">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "640px" }}>
          <h2 className="mb-3">Ready to take control of your portfolio?</h2>
          <p className="text-muted mb-4">
            Open your PulseTrade account in minutes. Zero account opening fees,
            transparent pricing, and tools designed for every trader.
          </p>
          <Link to="/signup" className="pt-btn-gradient fs-5 px-4 py-2 text-decoration-none">
            Create free account
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OpenAccount;
