import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  const equityRows = [
    { label: "Available margin", value: "4,043.10", highlight: true },
    { label: "Used margin", value: "3,757.30" },
    { label: "Available cash", value: "4,043.10", highlight: true },
    { label: "Opening balance", value: "4,043.10" },
    { label: "Payin", value: "4,064.00" },
    { label: "SPAN", value: "0.00" },
    { label: "Delivery margin", value: "0.00" },
    { label: "Exposure", value: "0.00" },
    { label: "Options premium", value: "0.00" },
    { label: "Total collateral", value: "0.00" },
  ];

  return (
    <>
      <h2 className="page-title">Funds</h2>

      <div className="funds-actions">
        <Link className="btn-pt btn-pt-success">Add funds</Link>
        <Link className="btn-pt btn-pt-primary">Withdraw</Link>
      </div>
      <p style={{ color: "var(--pt-muted)", fontSize: "0.85rem", margin: "0.75rem 0 1.5rem" }}>
        Instant, zero-cost fund transfers with UPI
      </p>

      <div className="funds-grid">
        <div className="funds-card">
          <h3>Equity</h3>
          {equityRows.map((row) => (
            <div className="funds-row" key={row.label}>
              <span>{row.label}</span>
              <span style={row.highlight ? { color: "var(--pt-primary)" } : undefined}>
                {row.value}
              </span>
            </div>
          ))}
        </div>

        <div className="funds-card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
          <p style={{ color: "var(--pt-muted)", marginBottom: "1rem" }}>
            You don't have a commodity account
          </p>
          <Link className="btn-pt btn-pt-outline">Open commodity account</Link>
        </div>
      </div>
    </>
  );
};

export default Funds;
