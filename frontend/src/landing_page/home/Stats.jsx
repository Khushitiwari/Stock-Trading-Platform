
import React from "react";

function Stats() {
  return (
    <div className="container my-5 ">
      <div className="row justify-content-center align-items-center">

        {/* Text Section */}
        <div className="col-12 col-lg-6 mb-5 mb-lg-0">
          <h1 className="fs-2 mb-4 mt-5">Trust with Confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker; contributing
            to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-4 mt-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, gamification, or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4 mt-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4 mt-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just facilitate
            transactions, but actively help you do better with your money.
          </p>
        </div>

        {/* Image + Links */}
        <div className="col-12 col-lg-5 text-center">
          <img
            src="/src/assets/ecosystem.png"
            alt="Zerodha ecosystem"
            className="img-fluid mb-4"
          />

          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a href="" className="text-decoration-none">
              Explore our Products →
            </a>
            <a href="" className="text-decoration-none">
              Try Kite →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;
