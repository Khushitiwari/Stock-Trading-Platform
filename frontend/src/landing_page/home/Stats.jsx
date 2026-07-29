import React from "react";

function Stats() {
  const features = [
    {
      icon: "🛡️",
      title: "Security first",
      text: "Bank-grade encryption, 2FA, and real-time fraud monitoring keep your account protected around the clock.",
    },
    {
      icon: "⚡",
      title: "Lightning execution",
      text: "Sub-20ms order routing with smart order types designed for both beginners and active traders.",
    },
    {
      icon: "📊",
      title: "Insightful analytics",
      text: "Portfolio heatmaps, sector breakdowns, and P&L tracking — all in one clean dashboard.",
    },
    {
      icon: "🎯",
      title: "Transparent pricing",
      text: "No hidden fees, no surprise charges. What you see is exactly what you pay.",
    },
  ];

  return (
    <section className="pt-section pt-section-alt">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <h2 className="mb-3">Built for traders who demand more</h2>
            <p className="text-muted mb-0">
              PulseTrade combines institutional-grade infrastructure with a
              consumer-friendly experience. No clutter, no gimmicks — just the
              tools you need to trade with confidence.
            </p>
          </div>
          <div className="col-lg-7">
            <div className="pt-feature-grid">
              {features.map((f) => (
                <div className="pt-feature-card" key={f.title}>
                  <div className="pt-feature-icon">{f.icon}</div>
                  <h5 className="mb-2">{f.title}</h5>
                  <p className="text-muted small mb-0">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
