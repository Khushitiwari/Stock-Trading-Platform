
import React from 'react'

function Awards() {
  return (
    <div className='container mt-5 mb-5'>
      <div className='row align-items-center'>

        {/* Left Image */}
        <div className="col-lg-6 col-md-12 p-3 text-center mb-4">
          <img
            src='/src/assets/largestBroker.svg'
            alt="Largest Broker"
            className="img-fluid"
          />
        </div>

        {/* Right Content */}
        <div className='col-lg-6 col-md-12 p-3'>
          <h1>Largest stock broker in India</h1>

          <p className='mb-4'>
            2+ million Zerodha clients contribute to over 15% of all
            retail order volumes in India daily by trading and investing in:
          </p>

          {/* Lists */}
          <div className="row">
            <div className="col-md-6 col-12">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-md-6 col-12">
              <ul>
                <li>Stocks and IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt securities</li>
              </ul>
            </div>
          </div>

          {/* Press Logos */}
          <img
            src='/src/assets/pressLogos.png'
            alt="Press Logos"
            className="img-fluid mt-4"
          />
        </div>

      </div>
    </div>
  )
}

export default Awards
