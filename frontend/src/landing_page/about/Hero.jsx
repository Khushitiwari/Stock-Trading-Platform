function Hero() {
  return (
    <section className="pt-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="pt-product-tag">Our story</span>
          <h1 className="mt-3 mb-4" style={{ maxWidth: "720px", margin: "0 auto" }}>
            Reimagining how India trades — one pulse at a time
          </h1>
        </div>

        <div className="row g-5 pt-4 border-top">
          <div className="col-lg-6">
            <p className="text-muted">
              PulseTrade was founded with a simple belief: trading platforms should
              empower users, not overwhelm them. We set out to build an experience
              that combines institutional-grade speed with consumer-grade simplicity.
            </p>
            <p className="text-muted">
              Our name reflects our philosophy — markets have a pulse, and the best
              traders learn to read it. We give you the tools, data, and clarity to
              do exactly that.
            </p>
            <p className="text-muted">
              Today, thousands of traders rely on PulseTrade for equities, derivatives,
              mutual funds, and more — all through a single, beautifully designed platform.
            </p>
          </div>
          <div className="col-lg-6">
            <p className="text-muted">
              Beyond trading, we're committed to financial literacy. Pulse Academy
              offers free courses, and our community forum connects traders at every
              experience level.
            </p>
            <p className="text-muted">
              Our engineering team builds everything in-house — from order routing to
              real-time charting — ensuring reliability and continuous innovation.
            </p>
            <p className="text-muted mb-0">
              We're always working on what's next. Follow our engineering blog for
              updates on new features, infrastructure, and the technology behind PulseTrade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
