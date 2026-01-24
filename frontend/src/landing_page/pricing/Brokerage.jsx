
import React from 'react'

function Brokerage() {
  return (
    <div className="container">

      <div className="row mt-5 pt-5 text-center border-top">

        {/* Left Section */}
        <div className="col-lg-8 col-md-12 mb-4 px-3 px-md-4 fade-left">
          <a href="#" className="text-decoration-none">
            <h3 className="fs-4 text-start text-md-center text-lg-start">
              Brokerage Calculator
            </h3>
          </a>

          <ul 
            className="text-muted mt-3"
            style={{ 
              textAlign: "left", 
              lineHeight: "2", 
              paddingLeft: "1.2rem" 
            }}
          >
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order
            </li>
            <li>
              Digital contract notes will be sent via e-mail
            </li>
            <li>
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower)
            </li>
            <li>
              If the account is in debit balance, any order placed will be charged ₹40 per executed instead of ₹20
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="col-lg-4 col-md-12 d-flex align-items-start justify-content-center fade-right delay-1">
          <a href="#" className="text-decoration-none">
            <h3 className="fs-4">List of charges →</h3>
          </a>
        </div>

      </div>

    </div>
  )
}

export default Brokerage
