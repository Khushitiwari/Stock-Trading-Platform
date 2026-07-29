import React from "react";

const apps = [
  { icon: "📈", name: "Pulse Terminal", desc: "Advanced charting" },
  { icon: "📊", name: "Pulse Console", desc: "Portfolio analytics" },
  { icon: "💰", name: "Pulse Invest", desc: "Mutual funds" },
  { icon: "🔌", name: "Pulse Connect", desc: "Developer APIs" },
  { icon: "📚", name: "Pulse Academy", desc: "Learn to trade" },
  { icon: "🧮", name: "Options Calculator", desc: "Greeks & payoff" },
];

const Apps = () => {
  return (
    <>
      <h2 className="page-title">Apps & Tools</h2>
      <p style={{ color: "var(--pt-muted)", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
        Extend your trading experience with PulseTrade apps
      </p>
      <div className="apps-grid">
        {apps.map((app) => (
          <div className="app-card" key={app.name}>
            <div className="app-card-icon">{app.icon}</div>
            <h4>{app.name}</h4>
            <p>{app.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Apps;
