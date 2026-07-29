import React from "react";

const MarketBar = () => {
  const indices = [
    { name: "NIFTY 50", value: "24,892.50", change: "+0.42%", up: true },
    { name: "SENSEX", value: "81,765.30", change: "-0.18%", up: false },
    { name: "BANK NIFTY", value: "52,340.15", change: "+0.67%", up: true },
  ];

  const now = new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="market-bar">
      {indices.map((idx) => (
        <div className="market-pill" key={idx.name}>
          <span className="index-name">{idx.name}</span>
          <span className="index-value">{idx.value}</span>
          <span className={`index-change ${idx.up ? "up" : "down"}`}>
            {idx.change}
          </span>
        </div>
      ))}
      <div className="market-bar-spacer" />
      <span className="market-bar-time">{now} IST</span>
    </div>
  );
};

export default MarketBar;
