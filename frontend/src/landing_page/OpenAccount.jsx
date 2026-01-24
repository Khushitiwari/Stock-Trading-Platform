
import React from 'react'

function OpenAccount() {
  return (
    <div className='container my-5'>
      <div className='row text-center justify-content-center '>

        {/* Hero Image */}
        <div className='col-12 col-md-10 col-lg-8 mb-4 mt-5'>
          <img
            src='/src/assets/homeHero.png'
            alt='hero image'
            className='img-fluid'
          />
        </div>

        {/* Heading */}
        <div className='col-12 col-md-10 col-lg-8'>
          <h1 className='mt-4'>Open a Zerodha account</h1>

          <p className='text-muted mt-3'>
            Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and F&O trades.
          </p>

          <button className='btn btn-primary fs-5 px-4 py-2 mt-3 mb-5'>
            Sign up for free
          </button>
        </div>

      </div>
    </div>
  )
}

export default OpenAccount
