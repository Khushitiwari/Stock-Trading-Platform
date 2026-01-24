
import React from 'react'

function CreateTicket() {
  return (
    <div className="container">
      
      {/* Heading */}
      <div className="row py-5 mt-5 mb-4">
        <h1 className="fs-2 text-center text-md-start">
          To create a ticket, select a relevant topic
        </h1>
      </div>

      {/* Topics */}
      <div className="row">

        {/* Card */}
        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <h4 className="fs-5">
            <i className="fa-solid fa-plus me-2"></i>Account Opening
          </h4>
          <div className="d-flex flex-column gap-2">
            <a href="#" className="text-decoration-none">Online Account Opening</a>
            <a href="#" className="text-decoration-none">Offline Account Opening</a>
            <a href="#" className="text-decoration-none">Company, Partnership & HUF</a>
            <a href="#" className="text-decoration-none">NRI Account Opening</a>
            <a href="#" className="text-decoration-none">Charges at Zerodha</a>
            <a href="#" className="text-decoration-none">Getting Started</a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <h4 className="fs-5">
            <i className="fa-solid fa-user me-2"></i>Your Zerodha Account
          </h4>
          <div className="d-flex flex-column gap-2">
            <a href="#" className="text-decoration-none">Login Credentials</a>
            <a href="#" className="text-decoration-none">Account Modification</a>
            <a href="#" className="text-decoration-none">DP & Bank Details</a>
            <a href="#" className="text-decoration-none">Profile</a>
            <a href="#" className="text-decoration-none">Share Transfer</a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <h4 className="fs-5">
            <i className="fa-solid fa-chart-column me-2"></i>Trading & Orders
          </h4>
          <div className="d-flex flex-column gap-2">
            <a href="#" className="text-decoration-none">Margin & Order Types</a>
            <a href="#" className="text-decoration-none">Kite Web & Mobile</a>
            <a href="#" className="text-decoration-none">Trading FAQs</a>
            <a href="#" className="text-decoration-none">Corporate Actions</a>
            <a href="#" className="text-decoration-none">Kite API</a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <h4 className="fs-5">
            <i className="fa-solid fa-credit-card me-2"></i>Funds
          </h4>
          <div className="d-flex flex-column gap-2">
            <a href="#" className="text-decoration-none">Adding Funds</a>
            <a href="#" className="text-decoration-none">Withdrawals</a>
            <a href="#" className="text-decoration-none">eMandates</a>
            <a href="#" className="text-decoration-none">Add Bank Account</a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <h4 className="fs-5">
            <i className="fa-regular fa-circle me-2"></i>Console
          </h4>
          <div className="d-flex flex-column gap-2">
            <a href="#" className="text-decoration-none">Reports</a>
            <a href="#" className="text-decoration-none">Ledger</a>
            <a href="#" className="text-decoration-none">Portfolio</a>
            <a href="#" className="text-decoration-none">IPO</a>
            <a href="#" className="text-decoration-none">Referral Program</a>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <h4 className="fs-5">
            <i className="fa-solid fa-coins me-2"></i>Coin
          </h4>
          <div className="d-flex flex-column gap-2">
            <a href="#" className="text-decoration-none">Understanding Mutual Funds</a>
            <a href="#" className="text-decoration-none">About Coin</a>
            <a href="#" className="text-decoration-none">Buy & Sell via Coin</a>
            <a href="#" className="text-decoration-none">Start SIP</a>
            <a href="#" className="text-decoration-none">Govt Securities</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CreateTicket
