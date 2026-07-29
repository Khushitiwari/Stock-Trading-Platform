import React from "react";
import { Link } from "react-router-dom";

const Summary = () => {
  const stats = [
    {
      label: "Portfolio Value",
      value: "₹31,430",
      change: "+5.20%",
      up: true,
    },
    {
      label: "Today's P&L",
      value: "+₹1,552",
      change: "+4.95%",
      up: true,
    },
    {
      label: "Margin Available",
      value: "₹3,740",
      change: "Equity",
      up: null,
    },
    {
      label: "Open Positions",
      value: "4",
      change: "2 profitable",
      up: true,
    },
  ];

  return (
    <>
      <div className="summary-header">
        <h1>Good afternoon, Trader</h1>
        <p>Here's your portfolio snapshot for today</p>
      </div>

      <div className="stat-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <div className="stat-card-label">{stat.label}</div>
            <div className="stat-card-value">{stat.value}</div>
            {stat.up !== null && (
              <div className={`stat-card-change ${stat.up ? "up" : "down"}`}>
                {stat.change}
              </div>
            )}
            {stat.up === null && (
              <div className="stat-card-change" style={{ color: "var(--pt-muted)" }}>
                {stat.change}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="panel-grid">
        <div className="panel">
          <div className="panel-title">Equity Margin</div>
          <div className="panel-row">
            <span>Available margin</span>
            <span>₹3,740</span>
          </div>
          <div className="panel-row">
            <span>Used margin</span>
            <span>₹0</span>
          </div>
          <div className="panel-row">
            <span>Opening balance</span>
            <span>₹3,740</span>
          </div>
        </div>

        <div className="panel">
          <div className="panel-title">Holdings Summary</div>
          <div className="panel-row">
            <span>Total investment</span>
            <span>₹29,880</span>
          </div>
          <div className="panel-row">
            <span>Current value</span>
            <span>₹31,430</span>
          </div>
          <div className="panel-row">
            <span>Overall P&L</span>
            <span style={{ color: "var(--pt-success)" }}>+₹1,552 (+5.20%)</span>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <Link to="/holdings" className="btn-pt btn-pt-primary">
          View Holdings
        </Link>
        <Link to="/orders" className="btn-pt btn-pt-outline">
          Order History
        </Link>
        <Link to="/funds" className="btn-pt btn-pt-success">
          Add Funds
        </Link>
      </div>
    </>
  );
};

export default Summary;
