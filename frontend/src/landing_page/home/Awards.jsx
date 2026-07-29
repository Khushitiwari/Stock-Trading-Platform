import React from "react";

function Awards() {
  const instruments = [
    "Stocks & IPOs",
    "Futures & Options",
    "Mutual Funds",
    "ETFs & Bonds",
    "Commodity derivatives",
    "Currency derivatives",
  ];

  return (
    <section className="pt-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="pt-product-tag">Multi-asset platform</span>
            <h2 className="mb-3">One account, every market</h2>
            <p className="text-muted mb-4">
              From your first equity trade to complex F&O strategies — PulseTrade
              gives you access to India's full spectrum of investment instruments
              through a single, unified interface.
            </p>
            <div className="row g-2">
              {instruments.map((item) => (
                <div className="col-6 col-md-4" key={item}>
                  <div
                    className="p-3 rounded-3 small fw-medium"
                    style={{
                      background: "rgba(124, 58, 237, 0.06)",
                      border: "1px solid var(--pt-border)",
                    }}
                  >
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div
              className="p-5 rounded-4 mx-auto"
              style={{
                background: "var(--pt-gradient)",
                maxWidth: "400px",
                color: "white",
              }}
            >
              <h3 className="display-4 fw-bold mb-1" style={{ fontFamily: "var(--pt-mono)" }}>
                2M+
              </h3>
              <p className="mb-4 opacity-75">Trades executed monthly</p>
              <div className="d-flex justify-content-around border-top border-white border-opacity-25 pt-3">
                <div>
                  <strong className="d-block fs-4" style={{ fontFamily: "var(--pt-mono)" }}>99.9%</strong>
                  <small className="opacity-75">Uptime</small>
                </div>
                <div>
                  <strong className="d-block fs-4" style={{ fontFamily: "var(--pt-mono)" }}>4.8★</strong>
                  <small className="opacity-75">User rating</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;
