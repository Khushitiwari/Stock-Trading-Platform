import React from "react";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <section className="pt-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <span className="pt-product-tag">Simple pricing</span>
            <h2 className="mb-3">Transparent fees, no surprises</h2>
            <p className="text-muted mb-4">
              We believe pricing should be simple enough to explain in one sentence.
              No hidden charges, no volume-based tiers.
            </p>
            <Link to="/pricing" className="text-decoration-none fw-semibold">
              View full pricing →
            </Link>
          </div>
          <div className="col-lg-7">
            <div className="row g-3">
              <div className="col-sm-6">
                <div className="pt-feature-card text-center h-100">
                  <h3 className="display-5 fw-bold mb-2" style={{ fontFamily: "var(--pt-mono)", color: "var(--pt-primary)" }}>
                    ₹0
                  </h3>
                  <p className="text-muted mb-0 small">
                    Free equity delivery & direct mutual funds
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="pt-feature-card text-center h-100">
                  <h3 className="display-5 fw-bold mb-2" style={{ fontFamily: "var(--pt-mono)", color: "var(--pt-primary)" }}>
                    ₹20
                  </h3>
                  <p className="text-muted mb-0 small">
                    Per executed order for intraday & F&O
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
