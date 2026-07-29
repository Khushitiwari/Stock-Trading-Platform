import React from "react";
import Hero from "./Hero";
import Navbar from "../Navbar";
import Footer from "../Footer";

const products = [
  {
    tag: "Trading Terminal",
    name: "Pulse Terminal",
    description:
      "Our flagship trading interface with real-time streaming data, advanced charting with 100+ indicators, and a distraction-free layout built for focus.",
    image: "/src/assets/kite.png",
    reverse: false,
  },
  {
    tag: "Portfolio Hub",
    name: "Pulse Console",
    description:
      "Your command center for portfolio analytics. Deep-dive reports, tax P&L statements, and visual breakdowns of your holdings across asset classes.",
    image: "/src/assets/console.png",
    reverse: true,
  },
  {
    tag: "Mutual Funds",
    name: "Pulse Invest",
    description:
      "Direct mutual fund investing with zero commission. SIP automation, goal-based planning, and seamless delivery to your demat account.",
    image: "/src/assets/coin.png",
    reverse: false,
  },
  {
    tag: "Developer API",
    name: "Pulse Connect",
    description:
      "Build custom trading applications with our REST and WebSocket APIs. Full market data, order management, and portfolio endpoints.",
    image: "/src/assets/kiteconnect.png",
    reverse: true,
  },
  {
    tag: "Learning",
    name: "Pulse Academy",
    description:
      "Interactive lessons on technical analysis, options strategies, and market fundamentals — designed for learning on the go.",
    image: "/src/assets/varsity.png",
    reverse: false,
  },
];

function ProductPage() {
  return (
    <>
      <Navbar />
      <Hero />

      {products.map((product) => (
        <section
          key={product.name}
          className="pt-product-section"
        >
          <div className="container">
            <div className={`row align-items-center g-5 ${product.reverse ? "flex-lg-row-reverse" : ""}`}>
              <div className="col-lg-5 text-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid rounded-4"
                  style={{ maxHeight: "320px", objectFit: "contain" }}
                />
              </div>
              <div className="col-lg-7">
                <span className="pt-product-tag">{product.tag}</span>
                <h2 className="mb-3">{product.name}</h2>
                <p className="text-muted mb-4">{product.description}</p>
                <a href="#" className="pt-btn-outline text-decoration-none d-inline-block">
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="pt-section text-center">
        <div className="container">
          <h3 className="mb-2">Want to see our tech stack?</h3>
          <p className="text-muted mb-3">We believe in building in the open.</p>
          <a href="#" className="pt-btn-gradient text-decoration-none d-inline-block">
            Visit PulseTrade Engineering
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProductPage;
