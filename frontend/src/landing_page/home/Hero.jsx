import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  const chartBars = [40, 55, 45, 70, 60, 85, 75, 90];

  return (
    <section className="pt-hero hero-animate">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="pt-hero-badge animate-delay-1">
              <span></span>
              Markets are open · Live data streaming
            </div>

            <h1 className="animate-delay-2">
              Trade smarter with{" "}
              <span className="gradient-text">PulseTrade</span>
            </h1>

            <p className="pt-hero-sub animate-delay-3">
              A modern platform for stocks, derivatives, mutual funds, and more —
              built for clarity, speed, and confident decisions.
            </p>

            <div className="d-flex gap-3 flex-wrap animate-delay-4">
              <Link to="/signup" className="pt-btn-gradient fs-6 px-4 py-2 text-decoration-none">
                Start trading free
              </Link>
              <Link to="/product" className="pt-btn-outline fs-6 px-4 py-2 text-decoration-none">
                Explore platform
              </Link>
            </div>

            <div className="pt-hero-stats animate-delay-4">
              <div className="pt-hero-stat">
                <strong>₹0</strong>
                <span>Account opening</span>
              </div>
              <div className="pt-hero-stat">
                <strong>20ms</strong>
                <span>Avg. order latency</span>
              </div>
              <div className="pt-hero-stat">
                <strong>500+</strong>
                <span>Instruments</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 pt-hero-visual animate-delay-3">
            <div className="pt-hero-card">
              <div className="pt-hero-card-header">
                <div>
                  <small className="text-muted">Portfolio value</small>
                  <h4 className="mb-0" style={{ fontFamily: "var(--pt-mono)" }}>
                    ₹3,74,820
                  </h4>
                </div>
                <span className="badge rounded-pill text-bg-success">+5.2%</span>
              </div>
              <div className="pt-mini-chart">
                {chartBars.map((h, i) => (
                  <div key={i} style={{ width: 8, height: `${h}%`, borderRadius: "4px 4px 0 0", background: "var(--pt-gradient)", opacity: 0.7 }} />
                ))}
              </div>
              <div className="d-flex justify-content-between mt-3 pt-3 border-top">
                <div>
                  <small className="text-muted d-block">NIFTY 50</small>
                  <strong style={{ fontFamily: "var(--pt-mono)", color: "var(--pt-success)" }}>
                    24,892.50
                  </strong>
                </div>
                <div className="text-end">
                  <small className="text-muted d-block">Today's P&L</small>
                  <strong style={{ fontFamily: "var(--pt-mono)", color: "var(--pt-success)" }}>
                    +₹1,552
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
