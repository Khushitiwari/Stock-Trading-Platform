
import React from 'react'

function Hero() {
  return (
    <div className="container">

      {/* Header */}
      <div className="row pt-4 text-center border-bottom fade-up">
        <h1>Pricing</h1>
        <p className="text-muted py-3 px-2 px-md-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </p>
      </div>

      {/* Cards */}
      <div className="row mt-5 text-center">

        {/* Card 1 */}
        <div className="col-lg-4 col-md-6 col-12 mb-4 px-4 fade-up delay-1">
          <img
            src="/src/assets/pricingEquity.svg"
            className="img-fluid mb-3"
            style={{ maxWidth: "120px" }}
            alt=""
          />
          <h3 className="fs-4">Free equity delivery</h3>
          <p className="text-muted">
            All equity investments (NSE, BSE) are absolutely free – ₹0 brokerage
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-lg-4 col-md-6 col-12 mb-4 px-4 fade-up delay-2 ">
          <img
            src="/src/assets/intradayTrades.svg"
            className="img-fluid mb-3"
            style={{ maxWidth: "120px" }}
            alt=""
          />
          <h3 className="fs-4">Intraday and F&O trades</h3>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order.
          </p>
        </div>

        {/* Card 3 */}
        <div className="col-lg-4 col-md-6 col-12 mb-4 px-4 mx-md-auto fade-up delay-3">
          <img
            src="/src/assets/pricingEquity.svg"
            className="img-fluid mb-3"
            style={{ maxWidth: "120px" }}
            alt=""
          />
           <h3 className="fs-4">Free direct MF</h3>
          <p className="text-muted">
            ₹0 commissions & DP charges on direct mutual funds.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Hero
